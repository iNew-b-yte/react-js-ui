import React from 'react';

function Button(props) {
  return (
    <div className={props.className}>{props.icon} {props.name}</div>
  )
}

export default Button;