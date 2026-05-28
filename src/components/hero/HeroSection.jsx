import { Sparkles } from "lucide-react";

import SearchBar from "./SearchBar";

import PopularSearches from "./PopularSearches";

function HeroSection({
  keyword,
  setKeyword,
  amount,
  setAmount,
  loading,
  handleSearch
}) {

  return (
    <section className="max-w-5xl mx-auto px-6 py-24 text-center">

      {/* TOP BADGE */}

      <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 text-sm mb-6">

        <Sparkles size={16} />

        Smart Credit Card Recommendation Platform

      </div>

      {/* TITLE */}

      <h1 className="text-5xl md:text-7xl font-bold leading-tight">

        Find The Best <br />

        Credit Card For Every Purchase

      </h1>

      {/* DESCRIPTION */}

      <p className="text-zinc-400 text-lg mt-8 max-w-2xl mx-auto leading-relaxed">

        Search merchants like Amazon, Swiggy, Zomato,
        Fuel, Travel, Shopping and instantly discover
        which card gives the best cashback, rewards,
        discounts and savings.

      </p>

      {/* SEARCH BAR */}

      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        amount={amount}
        setAmount={setAmount}
        loading={loading}
        handleSearch={handleSearch}
      />

      {/* POPULAR SEARCHES */}

      <PopularSearches setKeyword={setKeyword} />

    </section>
  );
}

export default HeroSection;