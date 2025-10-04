export default function Footer() {
  return (
    <footer className="bg-[#0D2B55] text-white">
      {/* thin red accent line */}
      <div className="h-1 w-full bg-gradient-to-br from-slate-900 to-slate-800" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#"
              className="font-medium text-white/80 hover:text-white transition-colors border-b border-transparent hover:border-red-500"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-medium text-white/80 hover:text-white transition-colors border-b border-transparent hover:border-red-500"
            >
              Terms & Conditions
            </a>
          </nav>

          {/* divider */}
          <div className="w-full h-px bg-white/10" />

          {/* copyright */}
          <p className="text-xs sm:text-sm text-white/80">
            2025 © All Rights Reserved | <span className="text-white">Cute O Cute Garments</span>
          </p>

          {/* divider */}
       
        </div>
      </div>
    </footer>
  );
}
