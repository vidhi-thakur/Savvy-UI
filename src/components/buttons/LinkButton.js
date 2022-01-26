import React from 'react';
import './LinkButton.css'

function LinkButton(props) {
  return <>
      <button onClick={props.handleClick} className='linkCTA'>
          {props.children}
      </button>
  </>;
}

export default LinkButton;
