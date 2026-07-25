import React from 'react'

function BackColors() {
  return (
    <div className='absolute w-full h-[200vh] overflow-hidden -z-1'>
        <div className='relative top-[23%] left-[35%] w-[10px] h-[10px] rounded-full bg-dark-brown shadow-back-color-brown'></div>
        <div className='relative top-[45%] left-[90%] w-[10px] h-[10px] rounded-full bg-dark-blue shadow-back-color-blue'></div>
    </div>
  )
}

export default BackColors