import SearchCard from "./SearchCard";

function SearchResults({
  results
}) {

  return (
    <div className="space-y-6">

      {results.map((card, index) => (

        <SearchCard
          key={index}
          card={card}
          index={index}
        />

      ))}

    </div>
  );
}

export default SearchResults;