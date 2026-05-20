import React from 'react'
import Image from "next/image";

export default function MainContent() {
  return (
    <div className='w-full'>
      {/* Hero Section */}
      <div className='flex items-center justify-center w-full bg-gradient-to-l from-[#b8c6f4] to-[#fff]'>
        <div className='md:flex items-center w-full md:w-5/6 justify-between py-8'>
          <div className='md:w-1/2'>
            <div className='text-6xl font-bold'>Empowering Doctors with the Right Imaging Technology. </div>
            <div className='text-lg text-gray-700 mt-4'>Authorized dealer of Konica Minolta & Medion Healthcare Pvt Ltd Delivering Transparent Consultation. Reliable Equipment. Long-term Support.</div>
          </div>
          <div className='md:w-1/2'>
            <Image src='/images/home-page-title.png' alt='Logo' width={0} height={0} sizes='100vw' className='w-full h-auto' />
          </div>
        </div>

      </div>
      {/* Who We Are */}
      <div className='flex items-center justify-center w-full'>
        <div className='flex items-center w-5/6 justify-between py-8'>
          <div className='w-1/2'>
            <Image src='/images/home-page-title.png' alt='Logo' width={0} height={0} sizes='100vw' className='w-full h-auto' />
          </div>
          <div className='w-1/2'>
            <h1>Imaging Technology is a Kerala-based medical imaging solutions provider specializing in:</h1>
            <h6>✔️ Digital Radiography (DR Systems)
              ✔️ X-Ray Rooms (50kW, 32kW, etc.)
              ✔️ C-Arm Systems
              ✔️ Imaging Equipment Consultation
              ✔️ Clinical Establishment Support
              Unlike traditional dealers, we focus on educating doctors before selling equipment, ensuring you invest in the right technology for your specialty and patient load</h6>
          </div>
        </div>
      </div>

      {/* Our Brands */}
      <div className='flex items-center justify-center w-full'>
        <div className='flex items-center w-5/6 justify-between py-8'>
          <h1>Our Brands</h1>
          <div className='grid grid-cols-4 gap-4 w-full'>
            <div>Konica Minolta – Premium Digital Radiography
              Japanese technology
              High-resolution wireless panels (14x17)
              Reliable long-term performance
              Ideal for Multi-specialty hospitals & Diagnostic centers
            </div>
            <div>2️⃣ Medion Healthcare Pvt Ltd – Reliable Indian Technology
              Cost-effective solutions
              Suitable for clinics & day-care centers
              Strong service support
              Customizable configurations
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Imaging Technology? */}
      <div className='flex items-center justify-center w-full'>
        <div className='flex items-center w-5/6 justify-between py-8'>
          <h1>Why Choose Us?</h1>
          🔷 Our Process
          <div className='grid grid-cols-4 gap-4 w-full'>
            <div>✔️ Doctor-first approach</div>
            <div>✔️ No pressure selling</div>
            <div>✔️ Equipment selection based on case load</div>
            <div>✔️ Site planning guidance</div>
            <div>✔️ CE (Clinical Establishment) compliance guidance</div>
            <div>✔️ Transparent technical explanation</div>
            <div>✔️ After-sales coordination</div>
            <div>1️⃣ Requirement Analysis</div>
            <div>2️⃣ Room Planning & Electrical Load Assessment</div>
            <div>3️⃣ Equipment Recommendation</div>
            <div>4️⃣ Transparent Quotation</div>
            <div>5️⃣ Installation & Calibration</div>
            <div>6️⃣ Ongoing Technical Support</div>

          </div>
        </div>
      </div>

      {/* Who We Serve */}
      <div className='flex items-center justify-center w-full'>
        <div className='flex items-center w-5/6 justify-between py-8'>
          <h1>Who We Serve </h1>
          <div className='grid grid-cols-4 gap-4 w-full'>
            <div>Orthopedic Surgeons</div>
            <div>General Practitioners</div>
            <div>Small Hospitals (5–50 beds)</div>
            <div>Diagnostic Centers</div>
            <div>Day-care Surgical Centres</div>

          </div>
        </div>
      </div>
    </div>
  )
}
