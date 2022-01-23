import React from 'react';
import Container from './Container';

export default function Home(props) {
  return (
      <>
      <span>{props.dob}</span>
      <br />
      <br />
      <Container education = {props.education} comment = {props.comment}/>
      </>
  );
}
