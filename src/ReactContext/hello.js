import React from 'react'
import Myapp from './Myapp';

function Hello(props) {
  return (
    <>
    <span>{ props.msg }</span>
    <br />
    <Myapp count={props.count}/>
    </>
  );
}

export default Hello;
