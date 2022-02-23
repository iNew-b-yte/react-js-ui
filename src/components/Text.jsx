import React from 'react'

function Text(props) {
  return (

    <p className={props.class}>{props.icon} {props.text}</p>

  )
}

export default Text;