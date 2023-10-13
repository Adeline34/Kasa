import PropTypes from "prop-types";
import { useState } from "react";

import Arrow from "../../pictures/arrow_down.png";

const Collapsed = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
 
  const handleClick = () => {
     setIsActive(!isActive);
  };

  // {isActive && <div className="accordion-content isActive">{content}</div>}
  return (
    <div className="collapsed-item">
      <div className="collapsed-title" onClick={handleClick}>
        <div className="dropdownTitle">{title}</div>
        <div>
          {" "}
          <img
            src={Arrow}
            alt="Fléche pour afficher le description"
            className={isActive ? "rotated" : "arrow"}
          />
        </div>
      </div>
      <div className={isActive ? "collapsed-content-active" : "collapsed-content"}>
        {content}
      </div>
    </div>
  );
};


Collapsed.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};


export default Collapsed;
