import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Shared/Button/Button';

export default function BoxWithButton({ children, text }) {
  return (
    <section>
      {children}
      <Button text={text} />
    </section>
  );
}

BoxWithButton.propTypes = {
  text: PropTypes.string,
  children: PropTypes.element,
};

BoxWithButton.defaultProps = {
  text: null,
  children: null,

  // hover: null,
};
