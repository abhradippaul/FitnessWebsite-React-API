import React from 'react'
import Logo from "../assets/images/Logo-1.png"
function Footer() {
  return (
    <div className='mt-8 bg-red-50 flex items-center justify-center flex-col'>
      <img className='h-12 m-8' src={Logo} alt="logo" />
      <h1 className='m-4 font-semibold text-xl'>Made by Abhradip Paul</h1>
    </div>
  )
}

export default Footer