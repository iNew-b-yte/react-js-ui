import React from 'react'

function Input(props) {
  return (
    <div>
        <input className={props.class} type={props.type} value={props.value} placeholder={props.placeholder} />
    </div>
  )
}

export default Input;