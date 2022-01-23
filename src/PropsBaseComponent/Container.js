import React from 'react';
import Comments from './Comments';

export default function Container(props) {
  return (
      <>
      <span>{props.education}</span>
      <br />
      <br />
      <Comments comment = {props.comment}/> 
      </>
  );
}
