import PropTypes from 'prop-types';
import Collapsed from '../collapsed/Collapsed';

const title = ["Description", "Équipements"]

const AccommodationDropdown = ({ description, equipments }) => {

    return (
        <section className="collapsedSection ">
            <div className="collapsedBody">
                <Collapsed key={title} title={title[0]} content={<p>{description}</p>} />
            </div>
            <div className="collapsedBody">
                <Collapsed key={title} title={title[1]} content={<ul>{equipments.map((equipement) =>
                    <li key={equipement}>{equipement}</li>)}
                </ul>} />
            </div>
        </section>
    );
};


AccommodationDropdown.propTypes = {
    description: PropTypes.string.isRequired,
    equipments: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default AccommodationDropdown;