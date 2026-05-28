import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoImage from "../../Untitled (Your Story).png";

function Footer() {
  return (
    <footer className="relative bg-[#2f9f9a] px-10 py-6 pl-32 text-[#f8f3e8]">
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 36"
        preserveAspectRatio="none"
        className="absolute left-0 top-[-19px] h-5 w-full text-[#2f9f9a]"
      >
        <path
          fill="currentColor"
          d="M0 18 C30 18 30 4 60 4 S90 18 120 18 S150 4 180 4 S210 18 240 18 S270 4 300 4 S330 18 360 18 S390 4 420 4 S450 18 480 18 S510 4 540 4 S570 18 600 18 S630 4 660 4 S690 18 720 18 S750 4 780 4 S810 18 840 18 S870 4 900 4 S930 18 960 18 S990 4 1020 4 S1050 18 1080 18 S1110 4 1140 4 S1170 18 1200 18 S1230 4 1260 4 S1290 18 1320 18 S1350 4 1380 4 S1410 18 1440 18 V36 H0 Z"
        />
      </svg>
      <div className="grid grid-cols-[1.1fr_0.65fr_1.35fr] gap-10">
        <div className="relative flex flex-col items-center justify-center text-center">
          <Link
            to="/returns-exchanges"
            className="absolute left-[-4.5rem] top-1/2 flex h-60 w-20 -translate-y-1/2 rotate-180 items-center justify-center rounded-l-2xl border-4 border-[#790405] bg-[#ffb43b] text-center text-2xl font-black leading-none text-[#ca3a3c] shadow-[-7px_-7px_0px_#790405] transition hover:-translate-y-[52%] hover:bg-[#ffef3f]"
          >
            <span className="[writing-mode:vertical-rl] [text-orientation:mixed]">
              Returns & Exchanges
            </span>
          </Link>

          <div className="mb-5 flex items-center justify-center gap-4">
            <img
              src={logoImage}
              alt="The Memory Magnets"
              className="h-32 rounded-lg"
            />
            <h1 className="-ml-4 text-4xl font-black">The Memory Magnets</h1>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex flex-col items-start gap-4 text-left">
              <Link to="/shop">Shop</Link>
              <Link to="/customize">Customize</Link>
              <Link to="/society-stalls">Society Stalls</Link>
            </div>
            <div className="flex flex-col items-end gap-4 text-right">
              <Link to="/our-story">Our Story</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/order-feedback">Order Feedback</Link>
            </div>
          </div>

          <div className="mt-6 flex gap-6 text-4xl">
            <a
              href="https://www.instagram.com/the.memory.magnets"
              target="_blank"
              rel="noreferrer"
              aria-label="The Memory Magnets on Instagram"
            >
              <FaInstagram />
            </a>
            <FaLinkedin />
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="mb-6 text-3xl font-black">Product</h2>

          <div className="flex flex-col gap-4 text-xl font-medium">
            <Link to="/shop?category=Square+Magnets">Square Magnets</Link>
            <Link to="/shop?category=Strip+Magnets">Strip Magnets</Link>
            <Link to="/shop?category=Polaroids">Polaroid Magnets</Link>
            <Link to="/customize">Custom Magnets</Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center">
          <h3 className="mb-5 text-lg font-semibold">
            Get the freshest Memory Magnets news
          </h3>

          <div className="flex w-full max-w-xl">
            <input
              type="email"
              placeholder="Your email here"
              className="flex-1 bg-transparent border border-[#8aa89a] px-5 py-4 text-base outline-none"
            />
            <button className="border border-[#8aa89a] px-8 py-4 text-base font-semibold hover:bg-[#f8f3e8] hover:text-[#2f9f9a] transition">
              Subscribe
            </button>
          </div>

          <label className="mt-5 flex max-w-xl gap-3 text-sm text-[#c9d6cf]">
            <input type="checkbox" />
            By checking the box, you agree to receive updates from us.
          </label>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-4 border-t border-[#5f7d71] pt-3 text-xs text-[#c9d6cf]">
        <span>Website Terms</span>
        <span>|</span>
        <span>Privacy Policy</span>
        <span>|</span>
        <span>Accessibility Statement</span>
        <span>|</span>
        <span>Supplier Code of Conduct</span>
        <span>|</span>
        <span>Do Not Sell My Information</span>
      </div>
    </footer>
  );
}

export default Footer;
