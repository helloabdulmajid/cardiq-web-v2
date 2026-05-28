import {
  IndianRupee,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

function SearchCard({
  card,
  index
}) {

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-zinc-700 transition">

      {/* ==============================
          TOP BADGES
      ============================== */}

      <div className="flex items-center justify-between mb-6">

        {/* BEST MATCH */}

        {index === 0 ? (

          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">

            🏆 Best Match

          </div>

        ) : (
          <div />
        )}

        {/* MATCH SCORE */}

        {card.matchPercentage && (

          <div className="text-sm text-zinc-400">

            {card.matchPercentage.toFixed(0)}% Match

          </div>

        )}

      </div>

      {/* ==============================
          MAIN CARD CONTENT
      ============================== */}

      <div className="grid lg:grid-cols-[220px_1fr_auto] gap-8 items-center">

        {/* ==============================
    CARD IMAGE
============================== */}

<div className="flex justify-center">

  <div className="relative">

    {/* GLOW */}

    <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full" />

    {/* CARD IMAGE */}

    <img
      src={
        card.imageUrl ||
        "https://placehold.co/300x190/18181b/ffffff?text=CARDIQ"
      }
      alt={card.cardName}
      className="relative w-[220px] rounded-2xl border border-zinc-700 shadow-2xl hover:scale-105 transition duration-300"
    />

  </div>

</div>

        {/* ==============================
            LEFT SIDE
        ============================== */}

        <div>

          {/* CARD NAME */}

          <h2 className="text-3xl font-bold">

            {card.cardName}

          </h2>

          {/* BANK */}

          <p className="text-zinc-400 mt-2">

            {card.bankName}

          </p>

          {/* BENEFIT */}

          <div className="mt-5">

            <span className="text-emerald-400 text-4xl font-bold">

              {card.value}%

            </span>

            <span className="ml-2 text-xl text-white font-medium">

              Cashback

            </span>

          </div>

          {/* BENEFIT SUMMARY */}

          <p className="text-zinc-400 mt-4 leading-relaxed max-w-2xl">

            {card.benefitSummary}

          </p>

          {/* TAGS */}

          <div className="mt-6 flex flex-wrap gap-3">

            {/* MERCHANT */}

            <span className="bg-black px-4 py-2 rounded-full text-sm border border-zinc-700">

              {card.merchantName}

            </span>

            {/* REWARD TYPE */}

            <span className="bg-black px-4 py-2 rounded-full text-sm border border-zinc-700">

              {card.rewardType}

            </span>

            {/* OFFER TYPE */}

            <span className="bg-black px-4 py-2 rounded-full text-sm border border-zinc-700">

              {card.offerType}

            </span>

            {/* NETWORK */}

            <span className="bg-black px-4 py-2 rounded-full text-sm border border-zinc-700">

              {card.network}

            </span>

            {/* LTF */}

            {card.ltf && (

              <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-4 py-2 rounded-full text-sm">

                Lifetime Free

              </span>

            )}

          </div>

        </div>

        {/* ==============================
            RIGHT SIDE
        ============================== */}

        <div className="flex flex-col justify-between md:items-end">

          {/* SAVINGS */}

          <div className="text-left md:text-right">

            <div className="flex items-center md:justify-end text-emerald-400 font-bold text-5xl">

              <IndianRupee size={38} />

              <span>

                {card.estimatedSavings?.toFixed(0) || 0}

              </span>

            </div>

            <p className="text-zinc-500 text-sm mt-2">

              Estimated Savings

            </p>

          </div>

         <Link
              to={`/cards/${card.cardSlung}`}

           className="mt-8 md:mt-0 bg-white text-black px-5 py-3 rounded-xl font-semibold hover:bg-zinc-300 transition flex items-center gap-2">

            View Details

            <ArrowRight size={18} />

         </Link>

        </div>

      </div>

    </div>
  );
}

export default SearchCard;