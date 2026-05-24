// ==============================
// IMPORTS START
// ==============================

import {
  Search,
  Moon,
  CreditCard,
  Sparkles,
  IndianRupee
} from "lucide-react";

import { useState } from "react";

import { searchCards } from "./api/searchApi";

// ==============================
// IMPORTS END
// ==============================



function App() {

  // ==============================
  // STATES START
  // ==============================

  const [keyword, setKeyword] = useState("");

  const [amount, setAmount] = useState("");

  const [results, setResults] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [searched, setSearched] = useState(false);

  // ==============================
  // STATES END
  // ==============================



  // ==============================
  // SEARCH FUNCTION START
  // ==============================

  const handleSearch = async () => {

    // EMPTY INPUT CHECK
    if (!keyword.trim()) return;

    try {

      // START LOADING
      setLoading(true);

      // USER SEARCHED
      setSearched(true);

      // CLEAR OLD ERROR
      setError("");

      // API CALL
      const response = await searchCards(keyword, amount);

      // SAVE RESULTS
      setResults(response.data || []);

    } catch (err) {

      console.log(err);

      setError("Failed to fetch results");

    } finally {

      // STOP LOADING
      setLoading(false);

    }

  };

  // ==============================
  // SEARCH FUNCTION END
  // ==============================



  return (

    // ==============================
    // MAIN PAGE START
    // ==============================

    <div className="min-h-screen bg-black text-white">



      {/* ==============================
          NAVBAR START
      ============================== */}

      <nav className="border-b border-zinc-800">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}

          <div className="flex items-center gap-2">

            <CreditCard size={28} />

            <h1 className="text-2xl font-bold tracking-wide">
              CARDIQ
            </h1>

          </div>



          {/* RIGHT NAV ITEMS */}

          <div className="flex items-center gap-5">

            {/* DARK MODE */}

            <button className="flex items-center gap-2 text-sm hover:text-zinc-300 transition">

              <Moon size={18} />

              Dark Mode

            </button>



            {/* INSTAGRAM */}

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

      {/* ==============================
          NAVBAR END
      ============================== */}





      {/* ==============================
          HERO SECTION START
      ============================== */}

      <section className="max-w-5xl mx-auto px-6 py-24 text-center">



        {/* TOP BADGE */}

        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-2 text-sm mb-6">

          <Sparkles size={16} />

          Smart Credit Card Recommendation Platform

        </div>



        {/* MAIN TITLE */}

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





        {/* ==============================
            SEARCH SECTION START
        ============================== */}

        <div className="mt-12 flex flex-col md:flex-row gap-4 justify-center">



          {/* KEYWORD INPUT */}

          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search Amazon, Swiggy, Fuel..."
            className="w-full md:w-[500px] bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-white"
          />



          {/* AMOUNT INPUT */}

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount (Optional)"
            className="w-full md:w-[220px] bg-zinc-900 border border-zinc-700 rounded-xl px-5 py-4 outline-none focus:border-white"
          />



          {/* SEARCH BUTTON */}

          <button
            disabled={loading}
            onClick={handleSearch}
            className="bg-white text-black px-6 py-4 rounded-xl font-semibold hover:bg-zinc-300 transition flex items-center justify-center gap-2"
          >

            <Search size={18} />

            {loading ? "Searching..." : "Search"}

          </button>

        </div>

        {/* ==============================
            SEARCH SECTION END
        ============================== */}





        {/* ==============================
            POPULAR SEARCHES START
        ============================== */}

        <div className="flex flex-wrap justify-center gap-3 mt-6">

          {["Amazon", "Swiggy", "Fuel", "Travel", "Myntra"].map((item) => (

            <button
              key={item}
              onClick={() => setKeyword(item)}
              className="px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 hover:border-white transition text-sm"
            >

              {item}

            </button>

          ))}

        </div>

        {/* ==============================
            POPULAR SEARCHES END
        ============================== */}



      </section>

      {/* ==============================
          HERO SECTION END
      ============================== */}





      {/* ==============================
          RESULTS SECTION START
      ============================== */}

      <div className="mt-16 max-w-4xl mx-auto space-y-6 px-6 pb-20">



        {/* ERROR MESSAGE */}

        {error && (

          <div className="text-red-400 text-center">

            {error}

          </div>

        )}





        {/* ==============================
            RESULTS LIST START
        ============================== */}

        {results.map((card, index) => (

          <div
            key={index}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-left"
          >



            {/* BEST MATCH BADGE */}

            {index === 0 && (

              <div className="mb-4 inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">

                🏆 Best Match

              </div>

            )}





            {/* ==============================
                CARD TOP SECTION START
            ============================== */}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">



              {/* LEFT SIDE */}

              <div>

                {/* CARD NAME */}

                <h2 className="text-2xl font-bold">

                  {card.cardName}

                </h2>



                {/* OFFER TITLE */}

                <p className="text-zinc-400 mt-2">

                  {card.offerTitle}

                </p>

              </div>





              {/* RIGHT SIDE */}

              <div className="text-left md:text-right">



                {/* SAVINGS */}

                <div className="flex items-center md:justify-end text-emerald-400 font-bold text-3xl">

                  <IndianRupee size={28} />

                  <span>

                    {card.estimatedSavings || 0}

                  </span>

                </div>



                {/* SAVINGS LABEL */}

                <p className="text-zinc-500 text-sm mt-1">

                  Estimated Savings

                </p>

              </div>

            </div>

            {/* ==============================
                CARD TOP SECTION END
            ============================== */}





            {/* ==============================
                TAGS SECTION START
            ============================== */}

            <div className="mt-5 flex flex-wrap gap-3">



              {/* MERCHANT */}

              <span className="bg-black px-3 py-1 rounded-full text-sm border border-zinc-700">

                {card.merchantName}

              </span>



              {/* REWARD TYPE */}

              <span className="bg-black px-3 py-1 rounded-full text-sm border border-zinc-700">

                {card.rewardType}

              </span>



              {/* OFFER TYPE */}

              <span className="bg-black px-3 py-1 rounded-full text-sm border border-zinc-700">

                {card.offerType}

              </span>

            </div>

            {/* ==============================
                TAGS SECTION END
            ============================== */}



          </div>

        ))}

        {/* ==============================
            RESULTS LIST END
        ============================== */}





        {/* ==============================
            EMPTY STATE START
        ============================== */}

        {results.length === 0 && searched && !loading && (

          <div className="text-center mt-16 text-zinc-500">

            <p className="text-2xl font-semibold">

              No cards found

            </p>

            <p className="mt-3">

              Try Amazon, Fuel, Travel, Shopping...

            </p>

          </div>

        )}

        {/* ==============================
            EMPTY STATE END
        ============================== */}



      </div>

      {/* ==============================
          RESULTS SECTION END
      ============================== */}



    </div>

    // ==============================
    // MAIN PAGE END
    // ==============================

  );
}

export default App;