import { Search } from "lucide-react";

function SearchBar({
  keyword,
  setKeyword,
  amount,
  setAmount,
  loading,
  handleSearch
}) {

  return (
    <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">

      {/* KEYWORD */}

      <input
        type="text"
        value={keyword}
        onChange={(e) =>
          setKeyword(e.target.value)
        }
        placeholder="Search Amazon, Swiggy, Fuel..."
        className="w-full md:w-[500px] bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-white"
      />

      {/* AMOUNT */}

      <input
        type="number"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value)
        }
        placeholder="Amount (Optional)"
        className="w-full md:w-[220px] bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-white"
      />

      {/* BUTTON */}

      <button
        disabled={loading}
        onClick={handleSearch}
        className="bg-white text-black px-6 py-4 rounded-xl font-semibold hover:bg-zinc-300 transition flex items-center justify-center gap-2"
      >

        <Search size={18} />

        {loading
          ? "Searching..."
          : "Search"}

      </button>

    </div>
  );
}

export default SearchBar;