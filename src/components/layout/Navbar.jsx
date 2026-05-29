import { CreditCard } from "lucide-react";

function Navbar() {
  return (
    <nav className="border-b border-zinc-800 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        
        {/* LOGO SECTION */}
        <div className="flex items-center gap-2 shrink-0">
          <CreditCard size={28} />
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold tracking-wide">
              CARDIQ
            </h1>
            <span className="bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-md uppercase">
              Beta
            </span>
          </div>
        </div>

        {/* RIGHT SIDE SECTION */}
        <div className="flex items-center shrink-0">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-pink-400 transition font-medium"
          >
            <span>📸</span>
            {/* hidden on mobile screens, visible on small devices and up */}
            <span className="hidden sm:inline">Instagram</span>
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;