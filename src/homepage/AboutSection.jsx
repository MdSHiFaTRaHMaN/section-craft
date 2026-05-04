"use client";

import { useEffect, useRef } from "react";

// Placeholder image URLs (replace with your actual images)
const IMG_1 =
  "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80"; // laptop/ecom scene
const IMG_2 =
  "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80"; // product on screen
const IMG_3 =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80"; // devices/workspace

const AboutSection = () => {
  const col1Ref = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);

  useEffect(() => {
    let animFrame;
    let progress = 0;

    const SPEED = 0.18; // px per frame base
    // col1: bottom-to-top at 65deg tilt → scroll up (negative translateY)
    // col2: top-to-bottom → scroll down (positive translateY)
    // col3: bottom-to-top slowly (halka) → scroll up slightly

    const animate = () => {
      progress += SPEED;

      const maxScroll = 120; // px of total travel

      // Col 1: loops bottom→top (negative direction), 65deg tilt handled in CSS
      const y1 = -(progress % maxScroll);
      // Col 2: loops top→bottom (positive direction)
      const y2 = progress % maxScroll;
      // Col 3: slow bottom→top
      const y3 = -((progress * 0.45) % maxScroll);

      if (col1Ref.current) col1Ref.current.style.transform = `translateY(${y1}px)`;
      if (col2Ref.current) col2Ref.current.style.transform = `translateY(${y2}px)`;
      if (col3Ref.current) col3Ref.current.style.transform = `translateY(${y3}px)`;

      animFrame = requestAnimationFrame(animate);
    };

    animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <section className="w-full flex justify-center px-3 sm:px-6 py-6 sm:py-10 bg-[#0a0a0a]">
      <div
        className="w-full rounded-2xl sm:rounded-3xl bg-[#111113] overflow-hidden flex flex-col md:flex-row items-stretch border border-white/[0.06]"
        style={{ maxWidth: "1700px", minHeight: "320px" }}
      >
        {/* ── LEFT CONTENT ── */}
        <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 md:py-14 w-full md:w-[52%] lg:w-[48%] shrink-0 z-10">
          {/* Badge */}
          <span className="inline-flex items-center self-start border border-white/15 bg-white/8 rounded-full text-xs sm:text-sm font-medium text-gray-300 px-3 py-1 mb-6 tracking-wide">
            800+ Templates
          </span>

          {/* Headline */}
          <h1 className="text-[2rem] sm:text-[2.6rem] lg:text-[3rem] xl:text-[3.2rem] font-extrabold text-white leading-[1.15] mb-6 sm:mb-8">
            Unlock the world's largest
            <br className="hidden sm:block" /> eCom library
          </h1>

          {/* Feature list */}
          <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            {[
              "Built for speed & CRO best practices",
              "Created by eCommerce design experts",
              "Ready-to-use for any page type",
            ].map((text) => (
              <li key={text} className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 sm:w-[22px] sm:h-[22px] rounded-full bg-white flex items-center justify-center">
                  <svg
                    width="11"
                    height="8"
                    viewBox="0 0 11 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 3.5L4 6.5L10 1"
                      stroke="#111113"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm sm:text-base font-medium text-gray-300">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div>
            <button className="bg-[#29d4f5] hover:bg-[#1fc4e3] active:scale-95 transition-all duration-200 text-gray-900 font-semibold text-sm sm:text-base px-7 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-lg hover:shadow-[0_0_24px_rgba(41,212,245,0.4)]">
              Start for Free
            </button>
          </div>
        </div>

        {/* ── RIGHT IMAGE COLLAGE ── */}
        <div
          className="relative flex-1 overflow-hidden"
          style={{ minHeight: "300px" }}
        >
          {/* Gradient fade on left edge so it blends into content */}
          <div
            className="absolute inset-y-0 left-0 w-12 sm:w-16 z-20 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, #111113 0%, transparent 100%)",
            }}
          />

          {/*
            Three columns arranged in a slightly rotated collage.
            The outer wrapper is tilted ~-12deg to create the diagonal feel from the design.
          */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ padding: "0 0 0 24px" }}
          >
            <div
              className="flex gap-3 sm:gap-4 items-start"
              style={{
                transform: "rotate(-12deg) scale(1.18)",
                transformOrigin: "center center",
                width: "100%",
                height: "100%",
              }}
            >
              {/* Column 1 — scrolls bottom to top (fast, 65° tilt feel via parent rotation) */}
              <div
                className="flex flex-col gap-3 sm:gap-4 flex-1"
                style={{ willChange: "transform" }}
                ref={col1Ref}
              >
                <ImageCard src={IMG_1} alt="ecom template 1" tall />
                <ImageCard src={IMG_2} alt="ecom template 2" />
                <ImageCard src={IMG_3} alt="ecom template 3" tall />
                {/* Duplicate for seamless loop */}
                <ImageCard src={IMG_1} alt="ecom template 1b" tall />
                <ImageCard src={IMG_2} alt="ecom template 2b" />
              </div>

              {/* Column 2 — scrolls top to bottom */}
              <div
                className="flex flex-col gap-3 sm:gap-4 flex-1"
                style={{ willChange: "transform", marginTop: "-40px" }}
                ref={col2Ref}
              >
                <ImageCard src={IMG_2} alt="ecom template 4" />
                <ImageCard src={IMG_3} alt="ecom template 5" tall />
                <ImageCard src={IMG_1} alt="ecom template 6" />
                {/* Duplicate */}
                <ImageCard src={IMG_2} alt="ecom template 4b" />
                <ImageCard src={IMG_3} alt="ecom template 5b" tall />
              </div>

              {/* Column 3 — scrolls bottom to top slowly (halka) */}
              <div
                className="flex flex-col gap-3 sm:gap-4 flex-1"
                style={{ willChange: "transform", marginTop: "20px" }}
                ref={col3Ref}
              >
                <ImageCard src={IMG_3} alt="ecom template 7" tall />
                <ImageCard src={IMG_1} alt="ecom template 8" />
                <ImageCard src={IMG_2} alt="ecom template 9" tall />
                {/* Duplicate */}
                <ImageCard src={IMG_3} alt="ecom template 7b" tall />
                <ImageCard src={IMG_1} alt="ecom template 8b" />
              </div>
            </div>
          </div>

          {/* Top & bottom fade masks */}
          <div
            className="absolute inset-x-0 top-0 h-16 sm:h-20 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, #111113 0%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-16 sm:h-20 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, #111113 0%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}

function ImageCard({ src, alt, tall = false }) {
  return (
    <div
      className={`w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-gray-800 shrink-0 ${
        tall ? "aspect-[4/5]" : "aspect-[4/3]"
      }`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

export default AboutSection;