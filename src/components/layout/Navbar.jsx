import { CreditCard, Moon } from "lucide-react";

function Navbar() {

  return (
    <nav className="border-b border-zinc-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}

        <div className="flex items-center gap-2">

          <CreditCard size={28} />

          <h1 className="text-2xl font-bold tracking-wide">
            CARDIQ
          </h1>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex items-center gap-5">

          <button className="flex items-center gap-2 text-sm hover:text-zinc-300 transition">

            <Moon size={18} />

            Dark Mode

          </button>

          <a
            href="https://instagram.com"
            target="_blank"
            className="flex items-center gap-2 text-sm hover:text-pink-400 transition"
          >

            <span>📸</span>

            Instagram

          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;