function PopularSearches({
  setKeyword
}) {

  return (
    <div className="flex flex-wrap justify-center gap-3 mt-6">

      {[
        "Amazon",
        "Swiggy",
        "Fuel",
        "Travel",
        "Myntra"
      ].map((item) => (

        <button
          key={item}
          onClick={() => setKeyword(item)}
          className="px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 hover:border-white transition text-sm"
        >

          {item}

        </button>

      ))}

    </div>
  );
}

export default PopularSearches;