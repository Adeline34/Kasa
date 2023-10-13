import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
const urlApi = "logements.json"

function Card() {
  const [apartments, setApartments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(urlApi)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((apartments) => {
        setApartments(apartments)
      })
      .catch((error) => {
        console.error("error fetching", error);
        console.log("error")
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) return "Loading ....";
  if (error) return "Error ! ";

  return (
    <div className="card-style">
      {apartments.map((apartment) => (
        <Link
          to={`/Accommodation/${apartment.id}`}
          key={apartment.id}
          className="card"
        >
          <img src={apartment.cover} alt={apartment.title}></img>
          <p className="card-title">{apartment.title}</p>
        </Link>
      ))}
    </div>
  );
}
export default Card;
