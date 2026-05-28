import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import customTabHelper from "../assets/custom-tab-helper-transparent.png";

type MagnetType =
  | "Square Photo Magnets"
  | "Strip Acryclic Magent Frames"
  | "Big Acryclic Magent Frames";

const magnetTypes: MagnetType[] = [
  "Square Photo Magnets",
  "Strip Acryclic Magent Frames",
  "Big Acryclic Magent Frames",
];

const photoSlotColors = ["bg-[#ffd4d4]", "bg-[#fff1e7]", "bg-[#f7b8b9]"];

const magnetPrices: Record<MagnetType, string> = {
  "Square Photo Magnets": "Rs. 99",
  "Strip Acryclic Magent Frames": "Rs. 249",
  "Big Acryclic Magent Frames": "Rs. 199",
};

const magnetSizes: Record<MagnetType, string> = {
  "Square Photo Magnets": "Square - 2x2 inches",
  "Strip Acryclic Magent Frames": "Strip Magnetic Frame - 3x7 inches",
  "Big Acryclic Magent Frames": "Rectangle Magnetic Frame - 3x4 inches",
};

function CustomizeSection() {
  const navigate = useNavigate();
  const { addToCart, user } = useStore();
  const [magnetType, setMagnetType] =
    useState<MagnetType>("Square Photo Magnets");
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [fileInputKey, setFileInputKey] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [cartMessage, setCartMessage] = useState("");
  const hasRequiredImages =
    magnetType === "Strip Acryclic Magent Frames"
      ? previewImages.length === 3
      : previewImages.length === 1;

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files ?? []);

    if (files.length === 0) {
      setPreviewImages([]);
      return;
    }

    const maxImages = magnetType === "Strip Acryclic Magent Frames" ? 3 : 1;
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

  const updateMagnetType = (nextMagnetType: MagnetType) => {
    setMagnetType(nextMagnetType);
    setPreviewImages((currentPreviews) => {
      if (nextMagnetType === "Strip Acryclic Magent Frames") {
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
    if (magnetType === "Strip Acryclic Magent Frames") {
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

    if (magnetType === "Big Acryclic Magent Frames") {
      return (
        <div className="relative h-[360px] w-[310px] max-w-full rounded-[42px] border border-[#ffb6b6] bg-[#ca3a3c]/80 p-6 shadow-[0px_24px_80px_rgba(121,4,5,0.3)] backdrop-blur sm:h-[460px] sm:w-[390px] sm:p-8">
          <div className="absolute inset-4 rounded-[34px] border border-[#ffd6d6]" />
          <div className="relative flex h-full items-center justify-center">
            <div className="h-56 w-40 rounded-[10px] bg-[#fff5f0] p-3 pb-10 shadow-xl sm:h-72 sm:w-52 sm:pb-12">
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
      <div className="h-[300px] w-[300px] max-w-full overflow-hidden rounded-[40px] bg-[#ca3a3c] p-4 shadow-[0px_20px_80px_rgba(121,4,5,0.3)] sm:h-[410px] sm:w-[410px] sm:p-5">
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
    <section
      id="customize"
      className="relative min-h-screen overflow-hidden bg-[#f8efe6] px-5 py-16 sm:px-8 lg:px-16 lg:py-24"
    >
      <motion.img
        src={customTabHelper}
        alt="Memory Magnets helper"
        initial={{ opacity: 0, x: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="pointer-events-none absolute right-5 top-16 hidden w-52 drop-shadow-2xl xl:block 2xl:w-64"
      />

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-5xl font-black text-[#1a1a1a] sm:text-6xl"
      >
        Customize Your Magnet
      </motion.h2>

      <p className="mt-5 text-center text-lg text-gray-600 sm:text-xl">
        Upload your favorite memory and turn it into a premium keepsake.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-[32px] bg-[#ca3a3c] p-5 text-white shadow-[0px_24px_70px_rgba(121,4,5,0.28)] sm:p-10 sm:rounded-[40px]"
        >
          <h3 className="text-3xl font-bold mb-8">Create Your Magnet</h3>

          <p className="mt-3 text-base text-[#ffe1dc]">
            {magnetType === "Strip Acryclic Magent Frames"
              ? "Upload exactly 3 pictures for a Strip Acryclic Magent Frame."
              : "Upload 1 picture for this magnet."}
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {magnetTypes.map((type) => {
              const isSelected = magnetType === type;

              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => updateMagnetType(type)}
                  className={`flex min-h-36 w-full flex-col justify-between gap-4 rounded-[24px] border px-4 py-4 text-left transition ${
                    isSelected
                      ? "border-[#790405] bg-[#f8efe6] text-[#790405] shadow-lg"
                      : "border-[#ffb6b6] bg-[#ffe1dc] text-[#1a1a1a] hover:border-[#790405]"
                  }`}
                >
                  <span className="min-w-0">
                    <span className="block text-base font-bold leading-snug sm:text-lg">
                      {type}
                    </span>
                    <span
                      className={`mt-2 block text-sm font-semibold leading-snug ${
                        isSelected ? "text-[#9a1518]" : "text-[#5a0205]/75"
                      }`}
                    >
                      {magnetSizes[type]}
                    </span>
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center self-end rounded-full border ${
                      isSelected
                        ? "border-[#790405] bg-[#ca3a3c] text-white"
                        : "border-[#790405]/30 bg-white text-transparent"
                    }`}
                  >
                    <Check size={18} strokeWidth={3} />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-5 rounded-2xl border border-[#ffb6b6] bg-[#5a0205]/35 px-5 py-4">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#ffe1dc]">
              Selected size
            </p>
            <p className="mt-1 text-lg font-bold text-white">
              {magnetSizes[magnetType]}
            </p>
          </div>

          <input
            key={fileInputKey}
            type="file"
            accept="image/*"
            multiple={magnetType === "Strip Acryclic Magent Frames"}
            onChange={handleImageChange}
            className="mt-5 w-full rounded-2xl border border-[#ffb6b6] bg-[#f8efe6] p-5 text-[#1a1a1a]"
          />

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
