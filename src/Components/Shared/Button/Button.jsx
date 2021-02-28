import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ text }) {
  return (
    <>
      <button type="button">{text}</button>
    </>
  );
}

Button.propTypes = {
  text: PropTypes.string,
};

Button.defaultProps = {
  text: null,

  // hover: null,
};
