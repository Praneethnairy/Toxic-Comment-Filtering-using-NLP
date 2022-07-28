import React from 'react'

export default function Header(props) {
  return (
    <>
    <div className='headerMainClass'>
        <h1>{props.heading}</h1>
        
    </div>
    <hr />
    </>
  )
}
