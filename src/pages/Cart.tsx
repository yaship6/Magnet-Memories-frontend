import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useStore } from "../context/StoreContext";

const getPriceNumber = (price: string) => Number(price.replace(/[^0-9]/g, ""));

function Cart() {
  const { user, cartItems, clearCart, removeFromCart, updateQuantity } =
    useStore();
  const total = cartItems.reduce(
    (sum, item) => sum + getPriceNumber(item.price) * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#f8efe6] text-[#1a1a1a]">
      <Navbar />

      <main className="min-h-[80vh] px-16 py-20">
        <section className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <h1 className="text-6xl font-black text-[#ce272a]">Cart</h1>
              <p className="mt-4 text-xl text-gray-700">
                {user
                  ? `${user.name}'s saved cart`
                  : "Login to save cart items for your account."}
              </p>
            </div>

            {cartItems.length > 0 && (
              <button
                type="button"
                onClick={clearCart}
                className="rounded-full bg-[#ce272a] px-6 py-3 text-lg font-semibold text-white"
              >
                Clear Cart
              </button>
            )}
          </div>

          {!user && (
            <Link
              to="/login"
              className="mt-8 inline-flex rounded-full bg-[#2f9f9a] px-7 py-3 text-lg font-semibold text-white"
            >
              Login
            </Link>
          )}

          {cartItems.length === 0 ? (
            <div className="mt-10 rounded-[32px] bg-[#ffbcbc] p-10 text-center shadow-xl">
              <p className="text-3xl font-black text-[#ce272a]">
                Your cart is empty.
              </p>
              <Link
                to="/shop"
                className="mt-6 inline-flex rounded-full bg-[#ce272a] px-8 py-4 text-lg font-semibold text-white"
              >
                Shop Magnets
              </Link>
            </div>
          ) : (
            <div className="mt-10 grid gap-5">
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="grid grid-cols-[120px_1fr_auto] items-center gap-6 rounded-[28px] bg-[#ffbcbc] p-5 shadow-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-28 w-28 rounded-2xl object-cover"
                  />

                  <div>
                    <h2 className="text-2xl font-black text-[#790405]">
                      {item.name}
                    </h2>
                    <p className="mt-1 text-lg text-gray-700">
                      {item.category}
                    </p>
                    <p className="mt-2 text-xl font-bold text-[#2f9f9a]">
                      {item.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#790405]"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="w-8 text-center text-xl font-bold">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#790405]"
                    >
                      <Plus size={18} />
                    </button>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ce272a] text-white"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </article>
              ))}

              <div className="rounded-[28px] bg-[#ca3a3c] p-8 text-right text-white shadow-xl">
                <p className="text-2xl font-black">Total: Rs. {total}</p>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Cart;
