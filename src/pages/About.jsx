import Header from "../components/header/Header";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import picture from "../pictures/banniereAbout.webp";
import Collapsed from "../components/collapsed/Collapsed";
import AboutData from "../data/about.json";

const About = () => {
  return (
    <div>
      <div className="container-general">
        <Header />
        <section className="image-banner banner-about">
          <Banner image={picture} alt="photo de montagne" title1="" title2="" />
        </section>
        <section className="collapsedSection">
          <div className="collapsedBody">
            {AboutData.map(({ title, content, id }) => (
              <Collapsed key={id} title={title} content={content} />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
