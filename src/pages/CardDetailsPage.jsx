import { useParams } from "react-router-dom";

function CardDetailsPage() {

  const { cardName } = useParams();
  // Helper function to turn "swiggy-hdfc-bank-credit-card" into "Swiggy Hdfc Bank Credit Card"
  const formatTitle = (slug) => {
    if (!slug) return "";
    
    return decodeURIComponent(slug)
      .split("-")                             // Split the text at every hyphen into an array of words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter of each word
      .join(" ");                             // Join the words back together with spaces
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">

      <h1 className="text-5xl font-bold">

        {formatTitle(cardName)}

      </h1>

      <p className="text-zinc-400 mt-4">

        Card Details Page

      </p>

    </div>
  );
}

export default CardDetailsPage;