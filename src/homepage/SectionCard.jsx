"use client";
import { useRef, useState, useEffect, useCallback } from "react";

const templates = [
  {
    id: 1,
    label: "Homepage",
    description: "Stand out from the very first impression",
    bg: "from-zinc-100 to-stone-200",
    preview: (
      <div className="w-full h-full relative overflow-hidden rounded-xl bg-white">
        {/* Marquee bar */}
        <div className="absolute top-0 left-0 right-0 bg-zinc-900 text-white text-[9px] tracking-widest uppercase py-1 px-3 flex gap-6 overflow-hidden">
          <span className="whitespace-nowrap animate-marquee inline-block">
            Skin beyond boundaries &nbsp;&nbsp;•&nbsp;&nbsp; Skin beyond boundaries &nbsp;&nbsp;•&nbsp;&nbsp; Skin beyond boundaries &nbsp;&nbsp;•&nbsp;&nbsp;
          </span>
        </div>
        {/* Hero image */}
        <div className="absolute top-6 left-0 right-0 bottom-0 flex">
          <div className="w-1/2 bg-gradient-to-br from-amber-100 to-orange-200 relative overflow-hidden flex items-end p-3">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80')] bg-cover bg-center opacity-60" />
            <span className="relative text-3xl font-black text-zinc-900 leading-none">Born<br/>Free</span>
          </div>
          <div className="w-1/2 flex flex-col">
            <div className="flex-1 bg-orange-500 flex items-center justify-center p-2">
              <div className="bg-white rounded-lg p-1.5 shadow-md w-16 text-center">
                <div className="w-10 h-10 bg-orange-100 rounded mx-auto mb-0.5 flex items-center justify-center">
                  <div className="w-5 h-7 bg-orange-400 rounded-sm" />
                </div>
                <p className="text-[7px] font-bold text-zinc-700">tsuki</p>
              </div>
            </div>
            <div className="flex-1 bg-zinc-50 flex items-center justify-center gap-1 p-2">
              <div className="bg-white rounded-lg p-1 shadow text-center w-14">
                <div className="w-8 h-8 bg-zinc-200 rounded mx-auto mb-0.5" />
                <p className="text-[7px] text-zinc-500">tsuki</p>
                <p className="text-[8px] font-semibold text-zinc-800">$29</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-3 left-3">
          <span className="text-[8px] font-bold bg-zinc-900 text-white px-2 py-0.5 rounded-full">Service</span>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    label: "Shopify Sections",
    description: "Extend your Shopify theme",
    bg: "from-stone-100 to-neutral-200",
    preview: (
      <div className="w-full h-full bg-stone-50 rounded-xl flex flex-col items-center justify-center gap-3 p-4">
        <p className="text-[10px] tracking-widest uppercase text-zinc-400 font-medium">New Collection</p>
        <div className="grid grid-cols-3 gap-2 w-full">
          {[
            { w: "w-14 h-14", shape: "rounded-full border-4 border-zinc-300" },
            { w: "w-10 h-14", shape: "rounded-sm border-2 border-zinc-200 rotate-12" },
            { w: "w-14 h-14", shape: "rounded-full border-4 border-zinc-300" },
          ].map((r, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className={`${r.w} bg-gradient-to-br from-zinc-200 to-zinc-300 ${r.shape} flex items-center justify-center shadow-md`}>
                <div className="w-6 h-6 rounded-full bg-zinc-400/40" />
              </div>
              <p className="text-[7px] text-zinc-400">Product</p>
              <p className="text-[8px] font-semibold text-zinc-700">$99</p>
            </div>
          ))}
        </div>
        <div className="w-full h-px bg-zinc-200" />
        <div className="flex gap-3">
          {["All", "Rings", "Bands"].map((t) => (
            <span key={t} className="text-[8px] text-zinc-500 cursor-pointer hover:text-zinc-900 transition-colors">{t}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 3,
    label: "Landing Pages",
    description: "Turn more clicks into conversions",
    bg: "from-yellow-50 to-amber-100",
    preview: (
      <div className="w-full h-full bg-white rounded-xl overflow-hidden relative">
        {/* Top strip */}
        <div className="absolute top-0 left-0 right-0 h-1.5 flex">
          <div className="flex-1 bg-blue-600" />
          <div className="flex-1 bg-yellow-400" />
        </div>
        <div className="pt-4 px-3 pb-2">
          <div className="flex gap-0.5 mb-1">
            {[1,2,3,4,5].map(i=><div key={i} className="w-2 h-2 text-yellow-400 text-[10px]">★</div>)}
          </div>
          <p className="text-[9px] text-zinc-400 leading-tight mb-2">Professionals love it</p>
          <p className="text-sm font-black text-zinc-900 leading-tight uppercase">Anti-Aging<br/>Sunscreen<br/><span className="text-blue-600">That Works</span></p>
          <div className="mt-1 flex gap-1">
            <span className="text-[6px] bg-yellow-400 text-zinc-900 px-1.5 py-0.5 rounded font-bold uppercase">Shop Now</span>
            <span className="text-[6px] bg-blue-600 text-white px-1.5 py-0.5 rounded font-bold uppercase">PD-S Series</span>
          </div>
        </div>
        {/* Product image block */}
        <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-gradient-to-bl from-amber-100 to-orange-50 flex items-center justify-center">
          <div className="w-12 h-20 bg-gradient-to-b from-amber-300 to-orange-400 rounded-full shadow-xl relative">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-6 bg-amber-200/50 rounded-full" />
          </div>
        </div>
        {/* Logos strip */}
        <div className="absolute bottom-8 left-0 right-0 px-2">
          <div className="flex gap-1 overflow-hidden">
            {["Numéro","KINFOLK","HYPEBEAST"].map(b=>(
              <span key={b} className="text-[5.5px] font-black text-zinc-400 whitespace-nowrap border border-zinc-200 px-1 py-0.5 rounded">{b}</span>
            ))}
          </div>
        </div>
        {/* Feature badges */}
        <div className="absolute bottom-1 left-2 flex gap-1">
          {["Water Proof","Vegan","Dermatologist Tested"].map(b=>(
            <span key={b} className="text-[5px] bg-zinc-100 text-zinc-600 px-1 py-0.5 rounded whitespace-nowrap">{b}</span>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 4,
    label: "Navigation",
    description: "Make your store easy to browse",
    bg: "from-zinc-800 to-zinc-900",
    preview: (
      <div className="w-full h-full bg-zinc-900 rounded-xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-700">
          <div className="flex items-center gap-1">
            <div className="w-3 h-3 bg-white rounded-sm flex items-center justify-center">
              <div className="w-0 h-0 border-l-[4px] border-l-white border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent" />
            </div>
            <span className="text-[9px] font-black text-white tracking-widest">▲</span>
          </div>
          <div className="flex gap-2">
            {["Shop","About","Editorial","Contact"].map(n=>(
              <span key={n} className="text-[7px] text-zinc-400 hover:text-white transition-colors cursor-pointer">{n}</span>
            ))}
          </div>
          <div className="flex gap-1.5">
            <div className="w-4 h-4 rounded-full bg-zinc-700 flex items-center justify-center">
              <span className="text-[7px] text-zinc-300">⌕</span>
            </div>
            <div className="w-4 h-4 rounded-full bg-zinc-700 flex items-center justify-center">
              <span className="text-[7px] text-zinc-300">◻</span>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-[8px] text-zinc-500 tracking-widest uppercase mb-1">Mega Menu</p>
            <div className="grid grid-cols-3 gap-2 px-4">
              {["Tops","Bottoms","Footwear","Accessories","New In","Sale"].map(c=>(
                <div key={c} className="bg-zinc-800 rounded px-2 py-1.5 text-center hover:bg-zinc-700 transition-colors cursor-pointer">
                  <div className="w-6 h-6 bg-zinc-700 rounded mb-1 mx-auto" />
                  <span className="text-[7px] text-zinc-300">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    label: "Product Pages",
    description: "Convert browsers into buyers",
    bg: "from-rose-50 to-pink-100",
    preview: (
      <div className="w-full h-full bg-white rounded-xl overflow-hidden flex">
        <div className="w-1/2 bg-gradient-to-br from-rose-100 to-pink-200 flex items-center justify-center p-3">
          <div className="relative">
            <div className="w-16 h-20 bg-gradient-to-b from-rose-300 to-rose-500 rounded-2xl shadow-2xl flex items-center justify-center">
              <div className="w-8 h-10 bg-rose-200/40 rounded-xl" />
            </div>
            <div className="absolute -top-1 -right-1 bg-yellow-400 text-[6px] font-black text-zinc-900 rounded-full w-6 h-6 flex items-center justify-center">NEW</div>
          </div>
        </div>
        <div className="w-1/2 p-3 flex flex-col justify-between">
          <div>
            <p className="text-[7px] text-zinc-400 uppercase tracking-widest mb-0.5">Skincare</p>
            <p className="text-[11px] font-black text-zinc-900 leading-tight">Glow<br/>Serum</p>
            <p className="text-[8px] font-bold text-rose-500 mt-1">$48.00</p>
            <div className="flex gap-0.5 mt-1">
              {["30ml","50ml","100ml"].map(s=>(
                <span key={s} className="text-[6px] border border-zinc-300 px-1 py-0.5 rounded cursor-pointer hover:border-rose-400">{s}</span>
              ))}
            </div>
          </div>
          <button className="w-full bg-zinc-900 text-white text-[7px] font-bold py-1.5 rounded-lg mt-2">Add to Cart</button>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    label: "Collection Pages",
    description: "Showcase your full catalog beautifully",
    bg: "from-sky-50 to-blue-100",
    preview: (
      <div className="w-full h-full bg-white rounded-xl overflow-hidden p-3">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[10px] font-black text-zinc-900">All Products</p>
          <span className="text-[7px] text-zinc-400">24 items</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            {c:"bg-blue-100",h:"h-12"},
            {c:"bg-sky-200",h:"h-16"},
            {c:"bg-indigo-100",h:"h-10"},
            {c:"bg-blue-200",h:"h-14"},
            {c:"bg-cyan-100",h:"h-12"},
            {c:"bg-sky-100",h:"h-16"},
          ].map((item,i)=>(
            <div key={i} className="flex flex-col gap-0.5">
              <div className={`${item.c} ${item.h} rounded-lg w-full flex items-center justify-center`}>
                <div className="w-4 h-6 bg-white/50 rounded" />
              </div>
              <p className="text-[6px] text-zinc-500">$29</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const SectionCard = () => {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    // Update active index based on scroll
    const cardWidth = el.scrollWidth / templates.length;
    setActiveIndex(Math.round(el.scrollLeft / cardWidth));
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState]);

  const scrollTo = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("[data-card]")?.offsetWidth + 24 || 380;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
    trackRef.current.style.cursor = "grabbing";
  };
  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = scrollLeft - (x - startX);
  };
  const onMouseUp = () => {
    setIsDragging(false);
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  };

  const onTouchStart = (e) => {
    setStartX(e.touches[0].pageX);
    setScrollLeft(trackRef.current.scrollLeft);
  };
  const onTouchMove = (e) => {
    const x = e.touches[0].pageX;
    trackRef.current.scrollLeft = scrollLeft - (x - startX);
  };

  return (
    <section className="w-full bg-[#0C0414] py-14 md:py-20 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap');
        .template-section .card-label { font-family: 'Syne', sans-serif; }
        .scroll-track::-webkit-scrollbar { display: none; }
        .scroll-track { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .animate-marquee { animation: marquee 8s linear infinite; }
        .card-hover { transition: transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease; }
        .card-hover:hover { transform: translateY(-6px) scale(1.015); box-shadow: 0 32px 64px -12px rgba(0,0,0,0.18); }
        .btn-arrow { transition: all 0.2s ease; }
        .btn-arrow:hover { transform: scale(1.08); }
        .btn-arrow:disabled { opacity: 0.35; cursor: not-allowed; transform: none; }
        .dot-active { width: 20px; background: #18181b; }
        .dot-inactive { width: 6px; background: #d4d4d8; }
      `}</style>

      <div className="template-section w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold text-gray-100 leading-tight tracking-tight">
              Launch Faster with the largest
              <br />
              <span className="text-zinc-400">Shopify template library</span>
            </h2>
          </div>
          {/* Arrow controls — desktop */}
          <div className="hidden sm:flex items-center gap-3 flex-shrink-0 mb-1">
            <button
              onClick={() => scrollTo(-1)}
              disabled={!canScrollLeft}
              className="btn-arrow w-11 h-11 rounded-full border-2 border-zinc-300 bg-white flex items-center justify-center text-zinc-700 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => scrollTo(1)}
              disabled={!canScrollRight}
              className="btn-arrow w-11 h-11 rounded-full border-2 border-zinc-300 bg-white flex items-center justify-center text-zinc-700 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div
          ref={trackRef}
          className="scroll-track flex gap-5 md:gap-6 overflow-x-auto select-none pb-4"
          style={{ cursor: "grab" }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
        >
          {templates.map((t) => (
            <div
              key={t.id}
              data-card
              className="card-hover flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] xl:w-[430px] bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm border border-white/80"
            >
              {/* Preview area */}
              <div className={`h-[220px] sm:h-[260px] md:h-[300px] bg-gradient-to-br ${t.bg} p-3 md:p-4`}>
                {t.preview}
              </div>
              {/* Label */}
              <div className="px-5 py-4 md:py-5">
                <p className="card-label text-sm md:text-base font-bold text-zinc-900 mb-0.5">{t.label}</p>
                <p className="text-xs md:text-sm text-zinc-500 font-normal">{t.description}</p>
              </div>
            </div>
          ))}
          {/* End spacer */}
          <div className="flex-shrink-0 w-2" />
        </div>

        {/* Bottom row: dots + mobile arrows */}
        <div className="flex items-center justify-between mt-6 md:mt-8">
          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {templates.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = trackRef.current;
                  if (!el) return;
                  const cardWidth = el.querySelector("[data-card]")?.offsetWidth + 24 || 380;
                  el.scrollTo({ left: i * cardWidth, behavior: "smooth" });
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "dot-active" : "dot-inactive"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          {/* Mobile arrows */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => scrollTo(-1)}
              disabled={!canScrollLeft}
              className="w-9 h-9 rounded-full border border-zinc-300 bg-white flex items-center justify-center text-zinc-700 disabled:opacity-30"
              aria-label="Previous"
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => scrollTo(1)}
              disabled={!canScrollRight}
              className="w-9 h-9 rounded-full border border-zinc-300 bg-white flex items-center justify-center text-zinc-700 disabled:opacity-30"
              aria-label="Next"
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionCard;