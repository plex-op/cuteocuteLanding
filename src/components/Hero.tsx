import { MessageCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="
        relative text-white overflow-hidden mt-20
        flex items-center justify-center
        bg-[url('/hero-factory.jpg')] bg-cover bg-center
      " 
    >
      {/* black tint */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 w-full z-10">
        <div className="text-center space-y-6 sm:space-y-8">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Direct from Tirupur Factory
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Bulk Custom T-Shirts
            <span className="block text-red-500 mt-2">for Corporates & Events</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-200 leading-relaxed">
            Factory Prices • On-Time Delivery • MOQ 100 pcs
          </p>

          <div className="hidden md:flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://wa.me/919876543210?text=Hi%20I%20want%20a%20bulk%20T-shirt%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-green-600/30"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>

            <a
              href="tel:+919876543210"
              className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-red-600/30"
            >
              <ArrowRight className="w-5 h-5" />
              Call Us Directly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
