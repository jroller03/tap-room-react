import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <div>
      <style global jsx>{`
        h5 {
          width: 300px;
        }
      `}</style>
      <h3>
        {props.name} - {props.city}
      </h3>
      <h4> ${props.cost} </h4>
      <h5> {props.description} </h5>
      <p>
        <em>
          {props.ABV}% & {props.IBU}
        </em>
      </p>
      <hr />
    </div>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  cost: PropTypes.string,
  description: PropTypes.string,
  ABV: PropTypes.string,
  IBU: PropTypes.string
};

export default Keg;
