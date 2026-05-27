import { ShoppingCart } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ekuImage from "../../Eku.png";
import ganeshImage from "../../Ganesh.png";
import motivationImage from "../../Motivation.webp";
import logoImage from "../../withbg.png";

const products = [
  {
    category: "All",
    name: "Square photo magnet",
    price: "Rs. 99",
    image: ganeshImage,
    imageHeight: "h-80",
  },
  {
    category: "Photo strips",
    name: "Strip magnet",
    price: "Rs. 149",
    image: ekuImage,
    imageHeight: "h-56",
  },
  {
    category: "Polaroids",
    name: "Polaroid keepsake",
    price: "Rs. 179",
    image: motivationImage,
    imageHeight: "h-96",
  },
  {
    category: "Custom",
    name: "Custom logo magnet",
    price: "Rs. 199",
    image: logoImage,
    imageHeight: "h-72",
  },
  {
    category: "Mini",
    name: "Mini square magnet",
    price: "Rs. 79",
    image: motivationImage,
    imageHeight: "h-64",
  },
  {
    category: "Photo strips",
    name: "Photo strip set",
    price: "Rs. 159",
    image: ganeshImage,
    imageHeight: "h-48",
  },
  {
    category: "Premium",
    name: "Premium polaroid",
    price: "Rs. 219",
    image: ekuImage,
    imageHeight: "h-88",
  },
  {
    category: "Custom",
    name: "Logo magnet",
    price: "Rs. 129",
    image: logoImage,
    imageHeight: "h-60",
  },
  {
    category: "Gift sets",
    name: "Memory gift set",
    price: "Rs. 249",
    image: ganeshImage,
    imageHeight: "h-72",
  },
  {
    category: "Quotes",
    name: "Quote magnet",
    price: "Rs. 119",
    image: motivationImage,
    imageHeight: "h-52",
  },
  {
    category: "Festive",
    name: "Festive magnet",
    price: "Rs. 189",
    image: ekuImage,
    imageHeight: "h-80",
  },
  {
    category: "Personalized",
    name: "Personalized magnet",
    price: "Rs. 199",
    image: logoImage,
    imageHeight: "h-64",
  },
];

const categories = [
  "All",
  "Square",
  "Photo strips",
  "Polaroids",
  "Custom",
  "Mini",
  "Gift sets",
  "Quotes",
  "Festive",
  "Premium",
  "Personalized",
];

const shopPins = [
  ...products.slice(0, 7),
  ...products.slice(0, 7).map((product, index) => ({
    ...product,
    name: [
      "Memory square magnet",
      "Mini strip magnet",
      "Classic polaroid",
      "Personalized logo magnet",
      "Pocket square magnet",
      "Family photo strip",
      "Keepsake polaroid",
    ][index],
    image: [
      motivationImage,
      ganeshImage,
      ekuImage,
      logoImage,
      ganeshImage,
      motivationImage,
      ekuImage,
    ][index],
    imageHeight: ["h-56", "h-72", "h-52", "h-80", "h-64", "h-48", "h-88"][
      index
    ],
  })),
];

function Shop() {
  return (
    <div className="min-h-screen bg-[#f8efe6] text-[#1a1a1a]">
      <Navbar />

      <main className="min-h-[105vh] px-3 py-10">
        <section className="mx-auto max-w-[1800px]">
          <div className="sticky top-0 z-10 -mx-3 mb-7 flex gap-7 overflow-x-auto bg-[#f8efe6] px-7 py-4 text-lg font-semibold text-black">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`shrink-0 pb-1 ${
                  index === 0 ? "border-b-2 border-black" : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="columns-1 gap-4 md:columns-3 lg:columns-7">
            {shopPins.map((product, index) => (
              <article
                key={`${product.name}-${index}`}
                className="group mb-5 inline-block w-full break-inside-avoid"
              >
                <div
                  className={`relative flex ${product.imageHeight} items-center justify-center overflow-hidden rounded-2xl bg-white`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
                  <button className="absolute right-3 top-3 rounded-full bg-[#e60023] px-5 py-3 text-sm font-bold text-white opacity-0 shadow-lg transition group-hover:opacity-100">
                    Save
                  </button>
                  <button className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-lg transition group-hover:opacity-100">
                    <ShoppingCart size={18} />
                  </button>
                </div>

                <div className="px-1 pt-2">
                  <div className="flex items-start justify-between gap-2">
                    <h2 className="line-clamp-1 text-sm font-semibold text-black">
                      {product.name}
                    </h2>
                    <span className="text-lg leading-none">...</span>
                  </div>
                  <div className="mt-1 flex items-center justify-between gap-3">
                    <p className="text-sm font-bold text-[#2f9f9a]">
                      {product.price}
                    </p>
                    <button className="rounded-full bg-[#ce272a] px-3 py-1.5 text-xs font-semibold text-white">
                      Add
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Shop;
