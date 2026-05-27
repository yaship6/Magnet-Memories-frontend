import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext";

type MagnetType = "Square Magnet" | "Strip Magnet" | "Polaroid Magnet";

const magnetTypes: MagnetType[] = [
  "Square Magnet",
  "Strip Magnet",
  "Polaroid Magnet",
];

const photoSlotColors = ["bg-[#ffd4d4]", "bg-[#fff1e7]", "bg-[#f7b8b9]"];

const magnetPrices: Record<MagnetType, string> = {
  "Square Magnet": "Rs. 99",
  "Strip Magnet": "Rs. 149",
  "Polaroid Magnet": "Rs. 179",
};

function CustomizeSection() {
  const navigate = useNavigate();
  const { addToCart, user } = useStore();
  const [magnetType, setMagnetType] = useState<MagnetType>("Square Magnet");
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [fileInputKey, setFileInputKey] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState("");
  const hasRequiredImages =
    magnetType === "Strip Magnet"
      ? previewImages.length === 3
      : previewImages.length === 1;

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);

    if (files.length === 0) {
      setPreviewImages([]);
      return;
    }

    const maxImages = magnetType === "Strip Magnet" ? 3 : 1;
    const readers = files.slice(0, maxImages).map(
      (file) =>
        new Promise<string>((resolve) => {
          const reader = new FileReader();
          reader.onload = () => resolve(String(reader.result));
          reader.readAsDataURL(file);
        })
    );

    Promise.all(readers).then((nextPreviews) => {
      setPreviewImages(nextPreviews);
    });
  };

  const handleMagnetTypeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const nextMagnetType = event.target.value as MagnetType;

    setMagnetType(nextMagnetType);
    setPreviewImages((currentPreviews) => {
      if (nextMagnetType === "Strip Magnet") {
        return currentPreviews;
      }

      const [firstPreview] = currentPreviews;

      return firstPreview ? [firstPreview] : [];
    });
    setFileInputKey((currentKey) => currentKey + 1);
  };

  const removeImage = (indexToRemove: number) => {
    setPreviewImages((currentPreviews) => {
      return currentPreviews.filter((_, index) => index !== indexToRemove);
    });
    setFileInputKey((currentKey) => currentKey + 1);
  };

  const renderRemoveButton = (index: number) => (
    <button
      type="button"
      aria-label="Remove image"
      onClick={() => removeImage(index)}
      className="absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#5a0205] text-white shadow-lg transition hover:scale-110 hover:bg-[#790405]"
    >
      <X size={18} strokeWidth={3} />
    </button>
  );

  const renderPhoto = (image: string | undefined, className = "") =>
    image ? (
      <img
        src={image}
        alt="Uploaded magnet preview"
        className={`h-full w-full object-cover ${className}`}
      />
    ) : (
      <div className={`h-full w-full ${className}`} />
    );

  const renderPreview = () => {
    if (magnetType === "Strip Magnet") {
      return (
        <div className="w-[440px] max-w-full rounded-[32px] bg-[#ca3a3c] p-5 shadow-[0px_18px_60px_rgba(121,4,5,0.28)]">
          <div className="grid grid-cols-3 gap-3 rounded-[24px] bg-[#8f1518] p-3">
            {photoSlotColors.map((slotColor, index) => (
              <div
                key={slotColor}
                className="relative aspect-[3/4] overflow-hidden rounded-[18px] bg-white shadow-inner"
              >
                {renderPhoto(previewImages[index], slotColor)}
                {previewImages[index] && renderRemoveButton(index)}
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (magnetType === "Polaroid Magnet") {
      return (
        <div className="relative h-[460px] w-[390px] max-w-full rounded-[42px] border border-[#ffb6b6] bg-[#ca3a3c]/80 p-8 shadow-[0px_24px_80px_rgba(121,4,5,0.3)] backdrop-blur">
          <div className="absolute inset-4 rounded-[34px] border border-[#ffd6d6]" />
          <div className="relative flex h-full items-center justify-center">
            <div className="h-72 w-52 rounded-[10px] bg-[#fff5f0] p-3 pb-12 shadow-xl">
              <div className="relative h-full overflow-hidden rounded-md bg-[#ffd4d4]">
                {renderPhoto(previewImages[0], photoSlotColors[0])}
                {previewImages[0] && renderRemoveButton(0)}
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="h-[410px] w-[410px] max-w-full overflow-hidden rounded-[40px] bg-[#ca3a3c] p-5 shadow-[0px_20px_80px_rgba(121,4,5,0.3)]">
        <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[30px] bg-[#ffe1dc]">
          {renderPhoto(previewImages[0], photoSlotColors[0])}
          {previewImages[0] && renderRemoveButton(0)}
        </div>
      </div>
    );
  };

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (!hasRequiredImages) {
      return;
    }

    const itemId = `custom-${magnetType}-${previewImages.join("-")}`;

    for (let count = 0; count < quantity; count += 1) {
      addToCart({
        id: itemId,
        name: `Custom ${magnetType}`,
        price: magnetPrices[magnetType],
        category: "Custom Magnets",
        image: previewImages[0],
      });
    }

    setCartMessage(`${quantity} custom ${magnetType.toLowerCase()} added.`);
  };

  return (
    <section id="customize" className="min-h-screen bg-[#f8efe6] px-16 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-6xl font-black text-center text-[#1a1a1a]"
      >
        Customize Your Magnet
      </motion.h2>

      <p className="text-center text-gray-600 text-xl mt-5">
        Upload your favorite memory and turn it into a premium keepsake.
      </p>

      <div className="grid grid-cols-2 gap-14 mt-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-[40px] bg-[#ca3a3c] p-10 text-white shadow-[0px_24px_70px_rgba(121,4,5,0.28)]"
        >
          <h3 className="text-3xl font-bold mb-8">Create Your Magnet</h3>

          <input
            key={fileInputKey}
            type="file"
            accept="image/*"
            multiple={magnetType === "Strip Magnet"}
            onChange={handleImageChange}
            className="w-full rounded-2xl border border-[#ffb6b6] bg-[#f8efe6] p-5 text-[#1a1a1a]"
          />
          <p className="mt-3 text-base text-[#ffe1dc]">
            {magnetType === "Strip Magnet"
              ? "Upload exactly 3 pictures for a strip magnet."
              : "Upload 1 picture for this magnet."}
          </p>

          <select
            value={magnetType}
            onChange={handleMagnetTypeChange}
            className="mt-5 w-full rounded-2xl border border-[#ffb6b6] bg-[#f8efe6] p-5 text-[#1a1a1a]"
          >
            {magnetTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Quantity"
            min="1"
            value={quantity}
            onChange={(event) =>
              setQuantity(Math.max(1, Number(event.target.value) || 1))
            }
            className="mt-5 w-full rounded-2xl border border-[#ffb6b6] bg-[#f8efe6] p-5 text-[#1a1a1a]"
          />

          <button
            type="button"
            onClick={handleAddToCart}
            disabled={!hasRequiredImages}
            className="mt-8 w-full rounded-2xl border-2 border-[#790405] bg-[#5a0205] py-5 text-xl text-white transition hover:scale-105 hover:border-[#ff9999] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
          >
            Add To Cart
          </button>
          {cartMessage && (
            <p className="mt-4 text-center text-lg font-semibold text-[#ffe1dc]">
              {cartMessage}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center"
        >
          <div className="flex w-full flex-col items-center gap-6">
            {renderPreview()}
            <p className="text-center text-3xl font-bold text-[#ca3a3c]">
              {magnetType}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CustomizeSection;
