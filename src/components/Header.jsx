import React from 'react'


function Header(props) {

  const {darkmode, handleDarkmode} = props;
  
  return (
    <header>
      <h2>Where in the world?</h2>
      <button className='darkBtn' onClick={handleDarkmode}>Dark mode</button>
    </header>
  )
}

export default Header