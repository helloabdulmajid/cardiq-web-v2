// ==============================
// IMPORTS START
// ==============================

import { useState } from "react";

import { searchCards } from "../api/searchApi";

import Navbar from "../components/layout/Navbar";

import HeroSection from "../components/hero/HeroSection";

import SearchResults from "../components/search/SearchResults";

import EmptyState from "../components/search/EmptyState";
import Footer from "../components/layout/Footer";

// ==============================
// IMPORTS END
// ==============================

function HomePage() {
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
    // CLEAR OLD RESULTS

    setResults([]);

    setError("");

    // EMPTY INPUT CHECK

    if (!keyword.trim()) return;

    try {
      // START LOADING

      setLoading(true);

      // USER SEARCHED

      setSearched(true);

      // API CALL

      const response = await searchCards(
        keyword,
        amount
      );

      // SAVE RESULTS

      if (response.data.length === 0) {
        setError("No matching cards found");

        setResults([]);
      } else {
        setResults(response.data);
      }

    } catch (error) {

      setResults([]);

      setError(
        "Something went wrong. Please try again."
      );

    } finally {

      // STOP LOADING

      setLoading(false);
    }
  };

  // ==============================
  // SEARCH FUNCTION END
  // ==============================

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ==============================
          NAVBAR
      ============================== */}

      <Navbar />

      {/* ==============================
          HERO SECTION
      ============================== */}

      <HeroSection
        keyword={keyword}
        setKeyword={setKeyword}
        amount={amount}
        setAmount={setAmount}
        loading={loading}
        handleSearch={handleSearch}
      />

      {/* ==============================
          RESULTS SECTION
      ============================== */}

      <div className="mt-16 max-w-4xl mx-auto space-y-6 px-6 pb-20">

        {/* ERROR MESSAGE */}

        {error && (
          <div className="text-center mt-16">
            <p className="text-red-500 text-xl font-medium">
              {error}
            </p>
          </div>
        )}

        {/* RESULTS */}

        <SearchResults results={results} />

        {/* EMPTY STATE */}

        {results.length === 0 &&
          searched &&
          !loading && (
            <EmptyState />
          )}

      </div>

      <Footer/>
    </div>
  );
}

export default HomePage;