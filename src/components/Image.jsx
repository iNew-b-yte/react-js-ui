import React from 'react'

function Image(props) {
  return (
        <img className={props.class} src={props.src} />
  )
}

export default Image;