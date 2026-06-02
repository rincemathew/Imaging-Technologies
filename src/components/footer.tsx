import React from 'react'

export default function Footer() {
  return (
    <div className='flex items-center'>
      <div className='flex items-center justify-center w-full class="h-24"'>
        <div className='flex flex-col items-center w-5/6 justify-between py-8'>

          <div className='flex items-center w-full'>
            <div className='w-1/3'>
            <h1 className='text-(--main-color) text-sm font-bold mb-4'>Important Links</h1>
              Home
              Products
              Services
              About Us
              Contact Us
            </div>
            <div className='w-1/3'>
              <div>imaging</div>
              <div className='font-bold'>TECHNOLOGY</div>
            </div>
            <div className='w-1/3'>
            <h1 className='text-(--main-color) text-sm font-bold mb-4'>Contact Links</h1>
              address<br />
              phone number<br />
              email
            </div>
          </div>
          <div>
            <div>
              ©2026 imaging technology All Rights Reserved.
            </div>
            <div>
              facebook insta etc
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
