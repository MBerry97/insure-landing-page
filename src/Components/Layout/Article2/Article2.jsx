import React from 'react';
import AffordableTemplate from '../../Template/AffordableTemplate/AffordableTemplate';
import BoxWithButton from '../../Template/BoxWithButton/BoxWithButton';
import PeopleTemplate from '../../Template/PeopleTemplate/PeopleTemplate';
import SnappyTemplate from '../../Template/SnappyTemplate/SnappyTemplate';

export default function Article2() {
  return (
    <article>
      <h1>We're different</h1>
      <SnappyTemplate />
      <AffordableTemplate />
      <PeopleTemplate />
      <BoxWithButton text="HOW WE WORK">
        <h1>Find out more about how we work</h1>
      </BoxWithButton>
    </article>
  );
}
