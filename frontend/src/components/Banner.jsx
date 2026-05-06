import React from 'react';

const PremiumSneakerHero = () => {
  return (
    <section className="relative w-full h-[75vh] min-h-[550px] max-h-[700px] bg-[#050505] overflow-hidden flex items-center justify-center font-sans text-white px-6 md:px-12 lg:px-20 mt-1">
      {/* Premium Red Glow Aura */}
      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 items-center z-10">
        
        {/* Left Content Column */}
        <div className="lg:col-span-5 space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <h1 className="text-5xl md:text-7xl font-bold uppercase leading-[0.85] tracking-tighter">
                May your <br />
                <span className="text-gray-600">journey be</span> <br />
                with us
              </h1>
              <div className="px-3 py-1 border border-red-500 rounded-full text-[10px] font-black uppercase tracking-widest text-red-500 self-start mt-2">
                Just Do It
              </div>
            </div>
            <p className="max-w-sm text-gray-500 text-xs md:text-sm leading-relaxed">
              A shoe is an item of footwear intended to protect and comfort the human foot. They are often worn with a sock.
            </p>
          </div>

          <div className="flex gap-4">
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 transition-all rounded-sm font-bold text-[11px] uppercase tracking-widest">
              Browse Products
            </button>
            <button className="px-8 py-3 border border-white/10 hover:bg-white/5 transition-all rounded-sm font-bold text-[11px] uppercase tracking-widest flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ef4444]"></span>
              Why Choose Us
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
            <div className="group cursor-pointer">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold uppercase text-[10px] tracking-widest text-gray-300">Comfort</span>
                <span className="text-red-500 text-xs group-hover:translate-x-1 transition-transform">↗</span>
              </div>
              <p className="text-[10px] text-gray-500 leading-tight">The insoles are very comfortable and peaceful.</p>
            </div>
            <div className="group cursor-pointer">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold uppercase text-[10px] tracking-widest text-gray-300">Style</span>
                <span className="text-red-500 text-xs group-hover:translate-x-1 transition-transform">↗</span>
              </div>
              <p className="text-[10px] text-gray-500 leading-tight">Nike shoes have there hundreds of styles.</p>
            </div>
          </div>
        </div>

        {/* Right Shoe Column - Perfected Positioning */}
        <div className="lg:col-span-7 relative h-full min-h-[450px] flex items-center justify-center pt-10">
          
          {/* Shadow & Pedestal - Adjusted Z-index and Blur */}
          {/* <div className="absolute bottom-[20%] w-[70%] h-16 bg-red-600/30 blur-[70px] rounded-[100%] opacity-50" /> */}
          {/* <div className="absolute bottom-[22%] w-[60%] h-10 bg-gradient-to-b from-[#111] to-black border border-white/10 rounded-[100%] shadow-[0_15px_40px_rgba(220,38,38,0.2)]" /> */}
          
          {/* Main Shoe Image - Optimized size and rotation */}
          <div className="relative z-20 transform transition-all duration-700 hover:scale-[1.08]">
            <img 
              src="https://as2.ftcdn.net/jpg/05/29/66/05/1000_F_529660518_jJlFmGiXJ6YfEBB7aN6wacbfziGhp4ab.jpg" 
              alt="Premium Shoe"
              className=" rounded-3xl w-full max-w-[320px] h-auto object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.85)] -rotate-[15deg] -translate-y-6"
            />
          </div>

          {/* Floating Premium Label - Re-anchored */}
          <div className="absolute top-[15%] right-4 hidden xl:block animate-float">
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl">
               <div className="text-red-500 text-[10px] font-black uppercase tracking-widest mb-1.5">New Arrival</div>
               <div className="text-xs font-medium text-white/80 leading-relaxed">
                 Nike shoes have there<br/>hundreds of styles
               </div>
               <div className="mt-3 w-8 h-[1px] bg-red-500"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Red Gradient Border at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[10px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />
    </section>
  );
};

export default PremiumSneakerHero;