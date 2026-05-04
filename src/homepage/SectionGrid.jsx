// SectionGrid.jsx
// Next.js component — drop into your pages or app directory.
// Requires Tailwind CSS v3+ configured in the project.

import Image from "next/image";
import Link from "next/link";

const sections = [
  // Row 1
  {
    id: 1,
    label: "Hero section",
    bg: "from-orange-500 to-red-600",
    preview: (
      <div className="relative w-full h-full bg-gradient-to-br from-orange-500 via-red-500 to-red-700 flex items-center justify-center overflow-hidden">
        {/* Silhouette shape */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-40 h-48 sm:w-48 sm:h-56 bg-black/80 rounded-full blur-[1px] translate-y-6" style={{clipPath:"ellipse(45% 55% at 50% 45%)"}} />
        </div>
        <div className="relative z-10 text-center">
          <p className="text-white text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-1 opacity-80">First Light</p>
          <p className="text-white text-sm sm:text-base font-bold leading-tight">Spring Season is here</p>
          <div className="flex gap-1.5 mt-2 justify-center">
            {["Browse","Sale","CTA"].map(b=>(
              <span key={b} className="text-[8px] sm:text-[9px] bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded-sm border border-white/30">{b}</span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    label: "Hero section",
    preview: (
      <div className="w-full h-full bg-gray-900 flex overflow-hidden">
        <div className="w-1/2 flex flex-col justify-center px-3 py-3 gap-2">
          <div className="text-white text-xs sm:text-sm font-bold leading-tight">Boost Your<br/>Workout</div>
          <div className="text-gray-400 text-[8px] leading-relaxed line-clamp-2">Professional grade supplements for peak performance.</div>
          <span className="text-[8px] sm:text-[9px] bg-cyan-500 text-white px-2 py-0.5 rounded-sm w-fit">ALL PRODUCTS →</span>
        </div>
        <div className="w-1/2 relative grid grid-cols-2 gap-1 p-2">
          {["bg-orange-400","bg-yellow-500","bg-cyan-600","bg-blue-500"].map((c,i)=>(
            <div key={i} className={`${c} rounded opacity-80 aspect-square`} />
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 3,
    label: "Hero grid countdown",
    preview: (
      <div className="w-full h-full bg-stone-800 relative flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-amber-300/30 border border-amber-300/50 flex items-center justify-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-400/50" />
          </div>
        </div>
        <div className="relative z-10 p-3 w-full">
          <p className="text-white/60 text-[8px] uppercase tracking-widest">Adora</p>
          <p className="text-white text-xs sm:text-sm font-semibold mt-0.5">Born in Nature,<br/>Crafted by us.</p>
          <div className="flex gap-2 mt-2">
            {["12","34","56"].map((n,i)=>(
              <div key={i} className="text-center">
                <div className="text-white text-xs font-bold">{n}</div>
                <div className="text-white/40 text-[7px]">{["HRS","MIN","SEC"][i]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    label: "Hero section with slider",
    preview: (
      <div className="w-full h-full bg-gray-100 flex overflow-hidden">
        <div className="flex-1 flex flex-col justify-center px-3 py-3">
          <p className="text-[8px] text-gray-400 uppercase tracking-widest mb-1">Streetware</p>
          <p className="text-gray-900 text-lg sm:text-2xl font-black leading-none uppercase tracking-tight">STREET<br/>WARE</p>
          <p className="text-gray-500 text-[8px] mt-1.5 leading-relaxed line-clamp-2">A streetwear fashion store that captures the essence of urban style.</p>
          <div className="flex items-center gap-1 mt-2">
            <span className="text-[8px] text-gray-700 font-semibold uppercase tracking-wider">Shop Collection</span>
            <span className="text-gray-400 text-[8px]">→</span>
          </div>
        </div>
        <div className="w-2/5 relative overflow-hidden">
          <div className="absolute inset-0 flex items-end justify-center gap-1 p-1">
            <div className="w-8 h-20 sm:w-10 sm:h-24 bg-orange-500 rounded-sm opacity-90" />
            <div className="w-8 h-20 sm:w-10 sm:h-24 bg-yellow-400 rounded-sm opacity-90" />
          </div>
        </div>
      </div>
    ),
  },
  // Row 2
  {
    id: 5,
    label: "Hero section",
    preview: (
      <div className="w-full h-full bg-gray-300 relative flex items-center justify-end overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-200/50" />
        <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10 max-w-[55%]">
          <p className="text-gray-800 text-[10px] sm:text-xs font-bold leading-tight">The award-<br/>winning shave<br/>that started it<br/>all</p>
          <p className="text-gray-500 text-[7px] mt-1.5 leading-relaxed line-clamp-3">Unmatched performance that never duplicated.</p>
          <span className="inline-block mt-2 bg-gray-800 text-white text-[7px] px-2 py-0.5 rounded-sm">GET 30% OFF · LIMITED TIME</span>
          <p className="text-gray-400 text-[7px] mt-1">Free shipping on all orders</p>
        </div>
        <div className="w-2/5 h-full flex items-center justify-center pr-2">
          <div className="w-10 h-20 sm:w-12 sm:h-24 bg-gray-800 rounded-lg shadow-2xl transform -rotate-6" />
        </div>
      </div>
    ),
  },
  {
    id: 6,
    label: "Product section with gallery",
    preview: (
      <div className="w-full h-full bg-white flex items-center justify-center overflow-hidden p-3">
        <div className="w-full max-w-full flex flex-col items-center gap-2">
          <div className="w-28 sm:w-36 h-20 sm:h-24 bg-gray-100 rounded flex items-center justify-center">
            <div className="w-20 sm:w-28 h-14 sm:h-16 bg-gray-200 rounded transform rotate-3" />
          </div>
          <div className="text-center">
            <p className="text-[7px] text-gray-400 uppercase tracking-widest">Brand Studio</p>
            <p className="text-xs font-bold text-gray-800 mt-0.5">SHADES OF WHITE</p>
            <div className="flex items-center justify-center gap-0.5 mt-1">
              {[1,2,3,4].map(i=><span key={i} className="text-yellow-400 text-[8px]">★</span>)}
              <span className="text-gray-300 text-[8px]">★</span>
              <span className="text-gray-400 text-[7px] ml-1">4.1 (32)</span>
            </div>
            <p className="text-gray-800 text-[10px] font-bold mt-1">$140.00</p>
            <div className="flex gap-1 justify-center mt-1.5">
              <span className="bg-gray-900 text-white text-[7px] px-2 py-0.5 rounded-sm">Add to Cart</span>
              <span className="border border-gray-300 text-gray-600 text-[7px] px-2 py-0.5 rounded-sm">Wishlist</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    label: "Product hero with buy section",
    preview: (
      <div className="w-full h-full bg-gray-100 flex items-center overflow-hidden p-3 gap-3">
        <div className="flex flex-col gap-2">
          {[1,2].map(i=>(
            <div key={i} className="w-8 sm:w-10 h-10 sm:h-12 bg-gray-300 rounded flex items-center justify-center">
              <div className="w-5 sm:w-6 h-7 sm:h-8 bg-gray-600 rounded-sm" />
            </div>
          ))}
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="w-16 sm:w-20 h-28 sm:h-32 bg-gray-400 rounded flex items-center justify-center">
            <div className="w-10 sm:w-12 h-20 sm:h-24 bg-gray-700 rounded" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-1.5">
          <p className="text-[8px] text-gray-400 uppercase tracking-widest">Best Sellers</p>
          <p className="text-gray-900 text-[10px] font-bold leading-tight">OUTERWEAR<br/>COLLECTION</p>
          <div className="flex gap-1 flex-wrap mt-1">
            {["XS","S","M","L"].map(s=>(
              <span key={s} className="border border-gray-400 text-gray-600 text-[7px] w-4 h-4 flex items-center justify-center rounded-sm">{s}</span>
            ))}
          </div>
          <span className="bg-lime-400 text-gray-900 text-[7px] font-bold px-2 py-0.5 rounded-sm mt-1 w-fit">BUY NOW →</span>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    label: "Botanicals grid hero sections",
    preview: (
      <div className="w-full h-full bg-purple-900 relative flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-0 right-0 w-3/4 h-full bg-gradient-to-tl from-purple-700 to-transparent" />
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage:"radial-gradient(circle at 70% 60%, rgba(139,92,246,0.4) 0%, transparent 60%)"}} />
        </div>
        <div className="relative z-10 p-4 flex flex-col gap-2">
          <div className="w-4 h-4 border border-white/60 rounded-full flex items-center justify-center">
            <span className="text-white text-[8px]">✦</span>
          </div>
          <h2 className="text-white text-sm sm:text-lg font-black leading-tight">Botanicals<br/>Flowers &amp;<br/>Accessories</h2>
          <p className="text-white/50 text-[8px] leading-relaxed max-w-[120px]">Inspired by the natural world.</p>
          <span className="bg-yellow-400 text-gray-900 text-[7px] font-bold px-2 py-0.5 w-fit">SHOP NOW</span>
        </div>
        <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-60 overflow-hidden">
          <div className="absolute inset-0" style={{background:"linear-gradient(135deg, rgba(109,40,217,0.5) 0%, rgba(76,29,149,0.8) 100%)"}} />
          {/* decorative leaf shapes */}
          <div className="absolute top-4 right-4 w-16 h-20 rounded-[50%_50%_50%_0] bg-purple-700/50 transform rotate-45" />
          <div className="absolute bottom-2 right-2 w-12 h-16 rounded-[50%_50%_50%_0] bg-purple-600/40 transform -rotate-12" />
        </div>
      </div>
    ),
  },
];

const SectionGrid =()=> {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 xl:px-14 py-10 sm:py-14">
      <div className="mx-auto" style={{ maxWidth: "1700px" }}>

        {/* Header */}
        <div className="flex items-center justify-between mb-7 sm:mb-9">
          <h2 className="text-gray-900 text-xl sm:text-2xl font-bold tracking-tight">Theme Sections</h2>
          <Link
            href="#"
            className="text-cyan-500 text-sm font-medium hover:text-cyan-600 transition-colors flex items-center gap-1"
          >
            Browse Theme Sections
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {sections.map((section) => (
            <div key={section.id} className="group flex flex-col gap-2.5">

              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden bg-gray-100 border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer aspect-[4/3]">
                {/* Preview fills the card */}
                <div className="absolute inset-0">
                  {section.preview}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-200 rounded-2xl" />
              </div>

              {/* Label */}
              <p className="text-gray-700 text-sm font-medium pl-0.5">{section.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
export default SectionGrid;