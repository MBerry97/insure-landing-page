import React from 'react';
import peopleImg from '../../../assets/image-intro-mobile.jpg';
import BoxWithButton from '../../Template/BoxWithButton/BoxWithButton';

export default function Section1() {
  return (
    <section>
      <img src={peopleImg} alt="people" />

      <BoxWithButton text="VIEW PLANS">
        <h1>Humanizing your insurance.</h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan thats right for
          you. Ensure you and your loved ones are protected.
        </p>
      </BoxWithButton>
    </section>
  );
}
