import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useStore } from "../context/StoreContext";
import logoImage from "../../Untitled (Your Story).png";

function Navbar() {
  const { cartCount, logout, user } = useStore();

  return (
    <nav className="relative z-20 flex min-h-28 items-center justify-between bg-[#2f9f9a] px-8 py-6">
      <img
        src={logoImage}
        alt="The Memory Magnets"
        className="absolute bottom-[-54px] left-8 z-30 h-32 md:bottom-[-62px] md:left-10 md:h-36"
      />

      <div className="absolute left-1/2 z-20 flex -translate-x-1/2 flex-wrap justify-center gap-x-7 gap-y-3 text-lg font-medium text-white xl:text-xl">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/customize">Customize</Link>
        <Link to="/order-feedback">Feedback</Link>
        <Link to="/society-stalls">Society Stalls</Link>
      </div>

      <div className="z-20 ml-auto flex flex-wrap justify-end gap-x-8 gap-y-3 text-lg font-medium text-white xl:text-xl">
        <Link to="/cart" className="flex items-center gap-2">
          <ShoppingCart size={24} />
          Cart
          {cartCount > 0 && (
            <span className="rounded-full bg-[#ca3a3c] px-2 py-0.5 text-sm">
              {cartCount}
            </span>
          )}
        </Link>
        <Link to="/contact">Contact</Link>
        {user ? (
          <button type="button" onClick={logout} className="text-left">
            Logout {user.name}
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>

      <svg
        aria-hidden="true"
        viewBox="0 0 1440 36"
        preserveAspectRatio="none"
        className="absolute bottom-[-19px] left-0 z-10 h-5 w-full rotate-180 text-[#2f9f9a]"
      >
        <path
          fill="currentColor"
          d="M0 18 C30 18 30 4 60 4 S90 18 120 18 S150 4 180 4 S210 18 240 18 S270 4 300 4 S330 18 360 18 S390 4 420 4 S450 18 480 18 S510 4 540 4 S570 18 600 18 S630 4 660 4 S690 18 720 18 S750 4 780 4 S810 18 840 18 S870 4 900 4 S930 18 960 18 S990 4 1020 4 S1050 18 1080 18 S1110 4 1140 4 S1170 18 1200 18 S1230 4 1260 4 S1290 18 1320 18 S1350 4 1380 4 S1410 18 1440 18 V36 H0 Z"
        />
      </svg>
    </nav>
  );
}

export default Navbar;
