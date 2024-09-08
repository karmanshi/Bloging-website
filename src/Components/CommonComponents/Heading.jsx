import React from 'react'

const Heading = (props) => {
  return (
    <>
     <div>
        <h1 className='text-black text-2xl font-bold'>{props.heading}</h1>
    </div>
    </>
  )
}

export default Heading