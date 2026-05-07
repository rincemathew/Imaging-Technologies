import React from 'react'
import Image from "next/image";


export default function NavBar() {
  return (
    <div className='flex items-center justify-center bg-amber-200 w-full'>
      <div className='flex items-center w-5/6 justify-between px-4 py-8'>
        <div className='flex items-center'>
          <div>
            <Image src='/images/logo.png' alt='Logo' width={100} height={100} />
          </div>
          <div>imaging<br/>TECHNOLOGY</div>
        </div>
        <div className='flex items-center'>
          <div>Home</div>
          <div>Products</div>
          <div>Services</div>
          <div>About Us</div>
        </div>
        <div className='flex items-center'>
          <div>Contact Us</div>
        </div>
      </div>
    </div>
  )
}
