import { Moon } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
        
        {/* COPYRIGHT */}
        <div>
          © {new Date().getFullYear()} CardIQ. Your smart checkout advisor. All rights reserved.
        </div>

        {/* DARK MODE SWITCH IN FOOTER */}
        <div>
          <button className="flex items-center gap-2 hover:text-zinc-300 transition">
            <Moon size={16} />
            <span>Dark Mode</span>
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;