import React from 'react'

function Hologram() {
  return (
    <div className='Hologram-section'>
        <div className='larger-circle-section'>
            <div className='larger-circle-outter'></div>
        </div>
        <div className='left-bar-section'>
            <div className='left-bar'></div>
        </div>
        <div className='right-bar-section'>
            <div className='right-bar'></div>
        </div>
        <div className='small-circle-section'>
            <div className='small-circle-outter'>
                {/* <div className='small-circle-inner'></div> */}
            </div>
        </div>
    </div>
  )
}

export default Hologram