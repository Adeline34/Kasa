import PropTypes from 'prop-types';

function Banner({ image, alt, title }) {
  return (
    <div>
      <img src={image} alt={alt} />
      <h1 className="banner-text">
        <span>{title}</span>
      </h1>
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Banner;
