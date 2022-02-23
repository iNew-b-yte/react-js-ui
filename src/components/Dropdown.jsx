import React from 'react'

function Dropdown(props) {
  return (
    <div class="dropdown">
      <button class={props.class} type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        {props.name}
      </button>

    </div>
  )
}

export default Dropdown;