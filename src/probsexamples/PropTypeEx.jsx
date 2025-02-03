//!props validation
import React from 'react';
import PropTypes from 'prop-types';

const PropTypeEx = (props) => {
    console.log(props);
  return (
    <div>
      <h1>{props.username}</h1>
      <h1>{props.age}</h1>
      <h1>{props.city}</h1>
    </div>
  );
}

PropTypeEx.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired
};

export default PropTypeEx;
