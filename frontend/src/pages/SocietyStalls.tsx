import { useState } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import stallImage1 from "../../WhatsApp Image 2026-01-25 at 21.06.49 (1).jpeg";
import stallImage2 from "../../WhatsApp Image 2026-01-25 at 21.06.49 (2).jpeg";
import stallImage3 from "../../WhatsApp Image 2026-01-25 at 21.06.49.jpeg";
import stallImage4 from "../../WhatsApp Image 2026-01-25 at 21.06.50 (1).jpeg";
import stallImage5 from "../../WhatsApp Image 2026-01-25 at 21.06.50.jpeg";
import stallImage6 from "../../WhatsApp Image 2026-01-25 at 21.06.55.jpeg";
import stallImage8 from "../../WhatsApp Image 2026-05-27 at 16.08.20 (1).jpeg";
import stallImage9 from "../../WhatsApp Image 2026-05-27 at 16.08.20.jpeg";
import stallImage10 from "../../WhatsApp Image 2026-05-27 at 16.08.24.jpeg";
import stallImage11 from "../../WhatsApp Image 2026-05-28 at 04.06.13.jpeg";
import stallImage12 from "../../WhatsApp Image 2026-05-28 at 04.06.56.jpeg";
import stallImage13 from "../../WhatsApp Image 2026-05-28 at 04.07.25.jpeg";
import stallImage14 from "../../WhatsApp Image 2026-05-28 at 04.07.48.jpeg";
import stallImage15 from "../../WhatsApp Image 2026-05-28 at 04.08.43.jpeg";
import stallVideo1 from "../../WhatsApp Video 2026-01-25 at 21.06.53.mp4";
import stallVideo2 from "../../WhatsApp Video 2026-05-27 at 16.08.24.mp4";

const stallMedia = [
  { type: "image", src: stallImage1 },
  { type: "image", src: stallImage2 },
  { type: "image", src: stallImage3 },
  { type: "video", src: stallVideo1 },
  { type: "image", src: stallImage4 },
  { type: "image", src: stallImage5 },
  { type: "image", src: stallImage6 },
  { type: "image", src: stallImage8 },
  { type: "video", src: stallVideo2 },
  { type: "image", src: stallImage9 },
  { type: "image", src: stallImage10 },
  { type: "image", src: stallImage11 },
  { type: "image", src: stallImage12 },
  { type: "image", src: stallImage13 },
  { type: "image", src: stallImage14 },
  { type: "image", src: stallImage15 },
];

const stallSections = [
  {
    name: "Panchsheel",
    media: stallMedia.slice(0, 6),
    startIndex: 0,
  },
  {
    name: "Gardenia",
    media: stallMedia.slice(6, 11),
    startIndex: 6,
  },
  {
    name: "Stall",
    media: stallMedia.slice(11),
    startIndex: 11,
  },
];

function SocietyStalls() {
  const [activeMedia, setActiveMedia] = useState<number | null>(null);

  const showPreviousMedia = () => {
    setActiveMedia((current) => {
      if (current === null) return current;
      return current === 0 ? stallMedia.length - 1 : current - 1;
    });
  };

  const showNextMedia = () => {
    setActiveMedia((current) => {
      if (current === null) return current;
      return current === stallMedia.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <div className="min-h-screen bg-[#f8efe6] text-[#1a1a1a]">
      <Navbar />

      <main className="min-h-[105vh] px-5 py-16 sm:px-8 lg:px-16 lg:py-28">
        <section className="mx-auto max-w-7xl">
          <h1 className="text-5xl font-black leading-tight text-[#ce272a] sm:text-6xl">
            Society Stalls
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-relaxed text-gray-700">
            A glimpse of Memory Magnets stalls, customer moments, and our
            favorite display setups.
          </p>

          <div className="mt-14 space-y-20">
            {stallSections.map((section) => (
              <section key={section.name}>
                <h2 className="text-4xl font-black text-[#2f9f9a]">
                  {section.name}
                </h2>

                <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-6">
                  {section.media.map((media, index) => {
                    const mediaIndex = section.startIndex + index;

                    return (
                      <button
                        key={media.src}
                        type="button"
                        onClick={() => setActiveMedia(mediaIndex)}
                        className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] shadow-xl"
                      >
                        {media.type === "image" ? (
                          <img
                            src={media.src}
                            alt={`${section.name} Memory Magnets stall ${
                              index + 1
                            }`}
                            className="h-full w-full object-cover transition hover:scale-105"
                          />
                        ) : (
                          <>
                            <video
                              src={media.src}
                              muted
                              playsInline
                              className="h-full w-full object-cover transition hover:scale-105"
                            />
                            <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#ce272a] shadow-xl">
                                <Play size={28} fill="currentColor" />
                              </span>
                            </span>
                          </>
                        )}
                      </button>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>

      {activeMedia !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-8 py-8">
          <button
            type="button"
            onClick={() => setActiveMedia(null)}
            className="absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-xl"
            aria-label="Close image"
          >
            <X size={26} />
          </button>

          <button
            type="button"
            onClick={showPreviousMedia}
            className="absolute left-8 flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-xl"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          {stallMedia[activeMedia].type === "image" ? (
            <img
              src={stallMedia[activeMedia].src}
              alt={`Memory Magnets society stall ${activeMedia + 1}`}
              className="max-h-[86vh] max-w-[82vw] rounded-[28px] object-contain shadow-2xl"
            />
          ) : (
            <video
              src={stallMedia[activeMedia].src}
              controls
              autoPlay
              className="max-h-[86vh] max-w-[82vw] rounded-[28px] object-contain shadow-2xl"
            />
          )}

          <button
            type="button"
            onClick={showNextMedia}
            className="absolute right-8 flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-xl"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default SocietyStalls;
