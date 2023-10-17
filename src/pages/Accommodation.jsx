import Footer from "../components/footer/Footer";
import Carousel from "../components/carousel/Carousel";
import AccommodationDetail from "../components/AccommodationDetail/AccommodationDetail";
import AccommodationCollapsed from "../components/accommodationCollapsed/accommodationCollapsed";
import { useParams, Navigate } from "react-router-dom"
import { useState, useEffect } from "react";
import Header from '../components/header/Header';

const urlApi = "/logements.json"

export default function Fetch() {
    const { id } = useParams();
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
    
    const apartment = apartments.find((item) => item.id === id)

    apartment.rating = parseFloat(apartment.rating);

    return (
        <div>
            {!apartment && (<Navigate to='Error404' replace={true} />)}
            {apartment && (
                <div>
                    <div className="container-general">
                        <Header />
                        <Carousel pictures={apartment.pictures} title={apartment.title} pictureLength={apartment.pictures.length}/>
                        <AccommodationDetail apartment={apartment} />
                        <AccommodationCollapsed description={apartment.description} equipments={apartment.equipments} />
                    </div>
                    <Footer />
                </div>
            )}
        </div>
    )
}