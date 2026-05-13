import React from 'react'
import Image from "next/image";
import Link from "next/link";


export default function NavBar() {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='flex items-center w-5/6 justify-between px-3 py-8'>
        <div className='flex items-center'>
          <div>
            <Image src='/images/logo.png' alt='Logo' width={35} height={35} />
          </div>
          <div>imaging<br/>TECHNOLOGY</div>
        </div>
        <div className='flex items-center gap-3'>
          <Link href='/'>Home</Link>
          <Link href='/products'>Products</Link>
          <Link href='/services'>Services</Link>
          <Link href='/about-us'>About Us</Link>
        </div>
        <div className='flex items-center'>
          <Link href='/contact-us'>Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
