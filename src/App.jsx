import {
  Search,
  Moon,
  CreditCard,
  Sparkles,

} from "lucide-react";

function App() {

  return (

    <div className="min-h-screen bg-black text-white">

      {/* Navbar */}

      <nav className="border-b border-zinc-800">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <CreditCard size={28} />

            <h1 className="text-2xl font-bold tracking-wide">
              CARDIQ
            </h1>

          </div>

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
{/* <Instagram size={18} /> */}
<span>📸</span>

              Instagram

            </a>

          </div>

        </div>

      </nav>


      {/* Hero Section */}

      <section className="max-w-5xl mx-auto px-6 py-24 text-center">

        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 text-sm mb-6">

          <Sparkles size={16} />

          Smart Credit Card Recommendation Platform

        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">

          Find The Best <br />

          Credit Card For Every Purchase

        </h1>

        <p className="text-zinc-400 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">

          Search merchants like Amazon, Swiggy, Zomato,
          Fuel, Travel, Shopping and instantly discover
          which card gives the best cashback, rewards,
          discounts and savings.

        </p>


        {/* Search Box */}

        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">

          <input
            type="text"
            placeholder="Search Amazon, Swiggy, Fuel..."
            className="w-full md:w-[500px] bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-white"
          />

          <button className="bg-white text-black px-6 py-4 rounded-xl font-semibold hover:bg-zinc-300 transition flex items-center justify-center gap-2">

            <Search size={18} />

            Search

          </button>

        </div>

      </section>

    </div>
  );
}

export default App;