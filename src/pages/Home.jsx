import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Cards from "../components/card/Cards";
import Footer from "../components/footer/Footer";
import picture from "../pictures/banniere.webp";

const Home = () => {

  return (
    <div>
      <div className="container-general">
        <Header />
        <section className="image-banner banner-home">
          <Banner
            className="image-banner"
            image={picture}
            alt="photo de montagne"
            title="Chez vous, partout et ailleurs"
          />
        </section>
        <Cards />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
