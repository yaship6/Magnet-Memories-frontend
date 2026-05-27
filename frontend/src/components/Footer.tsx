import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoImage from "../../Untitled (Your Story).png";

function Footer() {
  return (
    <footer className="relative bg-[#2f9f9a] px-5 py-10 text-[#f8f3e8] sm:px-8 lg:px-12 lg:py-12">
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
      <div className="grid gap-10 lg:grid-cols-[1.45fr_0.85fr] lg:gap-16">
        <div>
          <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center lg:-mt-4">
            <img
              src={logoImage}
              alt="The Memory Magnets"
              className="h-28 w-fit rounded-lg sm:h-36"
            />
            <h1 className="text-3xl font-black sm:text-4xl">
              The Memory Magnets
            </h1>
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(10rem,1fr))] gap-x-10 gap-y-7 text-2xl font-bold">
            <Link to="/shop">Shop</Link>
            <Link to="/customize">Customize</Link>
            <Link to="/society-stalls">Society Stalls</Link>
            <Link to="/our-story">Our Story</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/shop">Delivery</Link>
            <Link to="/order-feedback">Order Feedback</Link>
          </div>

          <div className="mt-10 flex justify-center gap-8 text-4xl">
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

        <div className="flex flex-col items-start justify-center lg:items-end">
          <div className="w-full max-w-xl">
            <h2 className="mb-6 text-3xl font-black">Products</h2>

            <div className="flex flex-col gap-4 text-xl font-medium">
              <Link to="/shop?category=Square+Photo+Magnets">
                Square Photo Magnets
              </Link>
              <Link to="/shop?category=Strip+Acryclic+Magent+Frames">
                Strip Acryclic Magent Frames
              </Link>
              <Link to="/shop?category=Big+Acryclic+Magent+Frames">
                Big Acryclic Magent Frames
              </Link>
              <Link to="/customize">Custom Magnets</Link>
            </div>

            <div className="mt-10">
              <h3 className="mb-5 text-lg font-semibold">
                Get the freshest Memory Magnets news
              </h3>

              <div className="flex w-full flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email here"
                  className="min-w-0 flex-1 border border-[#8aa89a] bg-transparent px-5 py-4 text-base outline-none"
                />
                <button className="border border-[#8aa89a] px-8 py-4 text-base font-semibold transition hover:bg-[#f8f3e8] hover:text-[#2f9f9a]">
                  Subscribe
                </button>
              </div>

              <label className="mt-5 flex gap-3 text-sm text-[#c9d6cf]">
                <input type="checkbox" />
                By checking the box, you agree to receive updates from us.
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap justify-center gap-4 border-t border-[#7d5f5f] pt-5 text-center text-xs text-[#c9d6cf]">
        <span>Website Terms</span>
        <span>|</span>
        <span>Privacy Policy</span>
        <span>|</span>
        <Link to="/returns-exchanges">Returns & Exchanges</Link>
        <span>|</span>
        <span>Copyright 2026 The Memory Magnets. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
