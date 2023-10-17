import PropTypes from 'prop-types';
import Star from "../star/Star";

const AccommodationDetail = ({ apartment }) => {

  return (
    <section className="title" >
      <div className='titleInfo'>
        <h1> {apartment.title}</h1>
        <p> {apartment.location}</p>
      </div>
      <div className='titleName'>
        <p> {apartment.host.name} </p>
        <img src={apartment.host.picture} alt={apartment.host.name}></img>
      </div>
      <div className="accommodationDetail">
        <div className='accommodationInformation'>
          {apartment.tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div >
      </div>
      <Star starRating={apartment.rating} />
    </section>
  )
}

AccommodationDetail.propTypes = {
  apartment: PropTypes.shape({
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    host: PropTypes.shape({
      name: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    }).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.node.isRequired,
  }).isRequired,
};

export default AccommodationDetail; 