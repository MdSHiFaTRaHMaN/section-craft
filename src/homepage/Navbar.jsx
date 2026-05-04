import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Product', hasDropdown: true },
    { name: 'Templates', hasDropdown: false },
    { name: 'Resources', hasDropdown: true },
    { name: 'Customers', hasDropdown: true },
    { name: 'Partners', hasDropdown: true },
    { name: 'Company', hasDropdown: false },
    { name: 'Pricing', hasDropdown: false },
  ];

  return (
    <nav className="relative w-full bg-[#0C0414] px-4 py-4 md:px-8">
      <div className="max-w-[1720px] mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="text-2xl font-black tracking-tighter text-[#0a1f2f] flex items-center">
            <img 
              src="https://cdn.shopify.com/s/files/1/0955/2553/6062/files/liquid_logo.png?v=1777886870" 
              alt="Instant Logo"
                className="w-[180px] object-contain"
            />
          </span>
        </div>

        {/* Desktop Navigation Pill */}
        <div className="hidden lg:flex items-center bg-white/70 backdrop-blur-md rounded-full px-6 py-2.5 shadow-sm border border-white/50">
          <ul className="flex items-center space-x-10">
            {navLinks.map((link) => (
              <li key={link.name} className="group cursor-pointer">
                <span className="text-[#0a1f2f] text-md font-semibold hover:text-[#030303] transition-colors">
                  {link.name}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <button className="px-6 py-2.5 rounded-full text-[#0a1f2f] font-semibold text-sm bg-white border border-gray-100 hover:bg-gray-50 transition-all">
            Help Center
          </button>
          <button className="px-6 py-2.5 rounded-full bg-[#CCDA30] text-[#0a1f2f] font-bold text-sm shadow-lg shadow-[#CCDA30]/50 hover:bg-[#7a8316] transition-all">
            Registration
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden p-2 text-[#cbd8e2]"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Fullscreen Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      <div 
        className={`fixed inset-0 bg-white z-[60] transition-opacity duration-300 ease-in-out lg:hidden pointer-events-none ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'
        }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center bg-[#22505F] justify-between px-6 py-5 border-b border-gray-50">
          <div className="flex items-center gap-1">
            <span className="text-2xl font-black tracking-tighter text-[#0a1f2f] flex items-center">
              <img 
                src="https://cdn.shopify.com/s/files/1/0955/2553/6062/files/liquid_logo.png?v=1777886870" 
                alt="Instant Logo"
                className="w-[150px] object-contain"
              />
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2 rounded-full bg-[#CCDA30] text-[#0a1f2f] font-bold text-sm">
              Registration
            </button>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full bg-gray-100 text-gray-600"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Links List */}
        <div className="px-6 py-4 overflow-y-auto h-[calc(100vh-160px)]">
          <ul className="space-y-8 mt-4">
            {navLinks.map((link) => (
              <li key={link.name} className="flex items-center justify-between group cursor-pointer">
                <span className="text-xl font-semibold text-[#0a1f2f]">
                  {link.name}
                </span>
                {link.hasDropdown && (
                  <ChevronDown className="text-gray-400 group-hover:text-cyan-500 transition-colors" size={20} />
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Footer Buttons */}
        <div className="absolute bottom-0 left-0 w-full p-6 bg-white border-t border-gray-100 flex items-center gap-4">
          <button className="flex-1 py-4 rounded-full bg-gray-50 text-[#0a1f2f] font-bold text-base hover:bg-gray-100">
            Login
          </button>
          <button className="flex-1 py-4 rounded-full bg-white text-[#0a1f2f] font-bold text-base border border-gray-100 hover:bg-gray-50">
            Book Demo
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;