import React from 'react'
import { useNavigate } from 'react-router-dom';

function SecondPage() {
  const navigate = useNavigate();
    const handleButtonClick = () => {
        // Change route to '/first' when the button is clicked
        navigate('/home');
      };
  return (
    <div className='second-page-section'>
        <div className='second-page-container'>
          <div className='second-page-name'><h1>NITW</h1></div>
          <div className='second-page-tag'><p>presents</p></div>
            <div className='second-section-tilte'>
                <h2>TZ</h2>
            </div>
            <button className='btnGlowEnter' onClick={handleButtonClick}>ENTER</button>
            <div>
            </div>
        </div> 
    </div> 
  )
}

export default SecondPage