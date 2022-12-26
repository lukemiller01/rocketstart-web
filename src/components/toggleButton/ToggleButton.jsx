import React from 'react'
import './toggleButton.css'
import { useState } from 'react';

const ToggleButton = () => {

    const [ btnState, setBtnState ] = useState(false);

    function handleClick() {
        setBtnState(btnState => !btnState);
    }

    let toggleClass = btnState ? 'checked' : '';

  return (
    <div>
        <label className='switch'>
            <input type="checkbox" className={{toggleClass}} onChange={handleClick}/>
            <span className="slider round"></span>
        </label>
    </div>
  )
}

export default ToggleButton