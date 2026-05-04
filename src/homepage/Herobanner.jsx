
// Place your hero background image at: /public/hero-bg.jpg
// Place the flower image at: /public/flower.png
// Or swap src values with your actual asset paths / CDN URLs.

const HeroBanner = () => {
  return (
    <section className="relative w-full min-h-[560px] md:min-h-[620px] lg:min-h-[775px] bg-black overflow-hidden">
      {/* ── Full-bleed background image ── */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="https://media.magnific.com/home/relaunch/media/hero/images/magnific-hero-01-2x.webp?w=1974&h=1175"
          alt=""
          fill
          priority
          quality={90}
          className="object-cover object-center opacity-90"
        />
        {/* subtle dark vignette so text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* ── Content wrapper — max-width 1700 px, centred ── */}
      <div className="relative z-10 mx-auto w-full max-w-[1700px] px-6 sm:px-10 lg:px-16 xl:px-20 py-10 md:py-14 lg:py-20 flex flex-col justify-between min-h-[560px] md:min-h-[620px] lg:min-h-[680px]">

        {/* News badge */}
        <div>
          <span className="inline-flex items-center gap-1.5 rounded border border-white/20 bg-black/60 px-3 py-1.5 text-xs sm:text-sm text-white backdrop-blur-sm">
            <span className="font-semibold">Flank news:</span>
            <span className="text-white/70">We raised $10M from Insight Partners</span>
          </span>
        </div>

        {/* Headline + CTA */}
        <div className="mt-10 md:mt-0 flex flex-col gap-8 max-w-[780px]">
          {/* Headline */}
          <h1 className="text-[clamp(2.4rem,5.5vw,5rem)] font-semibold leading-[1.08] tracking-tight">
            <span className="text-white">Hire AI agents&nbsp;</span>
            <span className="text-white/40">to resolve legal<br className="hidden sm:block" /> requests autonomously.</span>
          </h1>

          {/* CTA button */}
          <div>
            <button
              type="button"
              className="
                inline-flex items-center gap-2.5
                rounded bg-white px-6 py-3.5
                text-sm sm:text-base font-medium text-black
                transition-all duration-200
                hover:bg-white/90 hover:scale-[1.02]
                focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
                active:scale-[0.98]
              "
            >
              Book a demo
              {/* ✳ asterisk / snowflake icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
              </svg>
            </button>
          </div>
        </div>

        {/* Flower illustration — absolutely positioned on the right */}
        {/* 
          Replace /flower.png with your actual decorative flower asset.
          The image is hidden on very small screens and scales up progressively.
        */}
        <div
          className="
            hidden sm:block
            absolute right-0 bottom-0
            w-[340px] md:w-[420px] lg:w-[520px] xl:w-[580px]
            h-full
            pointer-events-none select-none
          "
        >
          <img
            src="/flower.png"
            alt=""
            fill
            quality={90}
            className="object-contain object-right-bottom"
          />
        </div>

      </div>
    </section>
  );
}

export default HeroBanner;