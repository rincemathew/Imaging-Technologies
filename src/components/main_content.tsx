import React from 'react'
import Image from "next/image";
import WhoWeAre from './who_we_are';


export default function MainContent() {
  return (
    <div className='w-full'>
      {/* Hero Section */}
      <section className="flex justify-center w-full py-12 md:py-20">
        <div className="w-full md:w-5/6 px-4 grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-(--main-color-light) text-(--main-color) font-medium mb-6">
              <span className="material-symbols-outlined text-sm">
                verified
              </span>
              Authorized Dealer
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Empowering Doctors with the Right{" "}
              <span className="text-(--main-color)">
                Imaging Technology
              </span>
            </h1>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Authorized dealer of Konica Minolta & Medion Healthcare Pvt Ltd.
              Delivering Transparent Consultation, Reliable Equipment,
              and Long-Term Support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <button className="bg-(--main-color) text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
                📞 Contact Us
              </button>

              {/* <button className="bg-white border border-[var(--main-color)] text-[var(--main-color)] px-6 py-3 rounded-lg font-medium hover:bg-[var(--main-color)] hover:text-white transition">
                📩 Request Quote
              </button> */}

              {/* <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
                📍 Site Visit
              </button> */}

            </div>

          </div>

          {/* Right Image */}
          <div className="relative">

            <Image
              src="/images/home-page-title.png"
              alt="Medical Imaging Equipment"
              width={1000}
              height={800}
              className="w-full h-auto rounded-2xl"
            />

            {/* Floating Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg">

              <div className="flex items-center gap-3">

                <div className="w-12 h-12 rounded-full bg-(--main-color-light) flex items-center justify-center">
                  <span className="material-symbols-outlined text-(--main-color)">
                    monitor_heart
                  </span>
                </div>

                <div>
                  <h4 className="font-semibold text-sm uppercase tracking-wider">
                    Diagnostic Precision
                  </h4>

                  <p className="text-sm text-gray-600">
                    High-resolution imaging for accurate clinical assessments.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>
      {/* <div className='flex items-center justify-center w-full bg-gradient-to-l from-[#b8c6f4] to-[#fff]'>
        <div className='md:flex items-center w-full md:w-5/6 justify-between py-8'>
          <div className='md:w-1/2'>
            <div className='text-6xl font-bold'>Empowering Doctors with the Right Imaging Technology. </div>
            <div className='text-lg text-gray-700 mt-4'>Authorized dealer of Konica Minolta & Medion Healthcare Pvt Ltd Delivering Transparent Consultation. Reliable Equipment. Long-term Support.</div>
          </div>
          <div className='md:w-1/2'>
            <Image src='/images/home-page-title.png' alt='Logo' width={0} height={0} sizes='100vw' className='w-full h-auto' />
          </div>
        </div>

      </div> */}
      <WhoWeAre />
      {/* Our Brands */}
      <section className="flex justify-center w-full py-16">
        <div className="w-full md:w-5/6 px-4">

          <h2 className="text-4xl font-bold text-center mb-12">
            Our Brands
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Konica Minolta */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 flex flex-col">

              <div className="h-64 relative">
                <Image
                  src="/images/konica-minolta.jpg"
                  alt="Konica Minolta"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold text-(--main-color) mb-2">
                  Konica Minolta
                </h3>

                <p className="uppercase text-sm tracking-wider text-gray-500 mb-6">
                  Premium Digital Radiography
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    Japanese Technology
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    High-Resolution Wireless Panels
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    Reliable Long-Term Performance
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    Ideal for Multi-Specialty Hospitals
                  </li>
                </ul>
              </div>

            </div>

            {/* Medion */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200 flex flex-col">

              <div className="h-64 flex items-center justify-center bg-(--background-light)">
                <span className="text-8xl">🏥</span>
              </div>

              <div className="p-6 flex-grow">
                <h3 className="text-2xl font-bold text-(--main-color) mb-2">
                  Medion Healthcare Pvt Ltd
                </h3>

                <p className="uppercase text-sm tracking-wider text-gray-500 mb-6">
                  Reliable Indian Technology
                </p>

                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    Cost-Effective Solutions
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    Suitable for Clinics & Day-Care Centres
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    Strong Service Support
                  </li>

                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✔</span>
                    Customizable Configurations
                  </li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </section>
      {/* Why Choose Us */}
      <section className="flex justify-center w-full py-16 bg-(--background-light)">
        <div className="w-full md:w-5/6 px-4">

          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
              <div className="bg-(--main-color-light) p-3 rounded-lg">
                <span className="material-symbols-outlined text-(--main-color)">
                  medical_services
                </span>
              </div>
              <h4 className="font-semibold">Doctor-first approach</h4>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
              <div className="bg-(--main-color-light) p-3 rounded-lg">
                <span className="material-symbols-outlined text-(--main-color)">
                  handshake
                </span>
              </div>
              <h4 className="font-semibold">No pressure selling</h4>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
              <div className="bg-(--main-color-light) p-3 rounded-lg">
                <span className="material-symbols-outlined text-(--main-color)">
                  analytics
                </span>
              </div>
              <h4 className="font-semibold">
                Equipment selection based on case load
              </h4>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
              <div className="bg-(--main-color-light) p-3 rounded-lg">
                <span className="material-symbols-outlined text-(--main-color)">
                  architecture
                </span>
              </div>
              <h4 className="font-semibold">Site planning guidance</h4>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
              <div className="bg-(--main-color-light) p-3 rounded-lg">
                <span className="material-symbols-outlined text-(--main-color)">
                  verified_user
                </span>
              </div>
              <h4 className="font-semibold">
                Clinical Establishment Compliance Guidance
              </h4>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
              <div className="bg-(--main-color-light) p-3 rounded-lg">
                <span className="material-symbols-outlined text-(--main-color)">
                  lightbulb
                </span>
              </div>
              <h4 className="font-semibold">
                Transparent Technical Explanation
              </h4>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex items-start gap-4">
              <div className="bg-(--main-color-light) p-3 rounded-lg">
                <span className="material-symbols-outlined text-(--main-color)">
                  support_agent
                </span>
              </div>
              <h4 className="font-semibold">
                After-sales Coordination & Support
              </h4>
            </div>

          </div>

        </div>
      </section>
      {/* Our Process */}
      <section className="flex justify-center w-full py-16">
        <div className="w-full md:w-5/6 px-4">

          <h2 className="text-4xl font-bold text-center mb-16">
            Our Process
          </h2>

          <div className="relative">

            {/* Connecting Line - Desktop Only */}
            <div className="hidden lg:block absolute top-8 left-20 right-20 h-[2px] bg-(--main-color-light)"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">

              <div className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 rounded-full bg-(--main-color) text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-4">
                  1
                </div>
                <h4 className="font-semibold">
                  Requirement Analysis
                </h4>
              </div>

              <div className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 rounded-full bg-(--main-color) text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-4">
                  2
                </div>
                <h4 className="font-semibold">
                  Room Planning & Electrical Load Assessment
                </h4>
              </div>

              <div className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 rounded-full bg-(--main-color) text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-4">
                  3
                </div>
                <h4 className="font-semibold">
                  Equipment Recommendation
                </h4>
              </div>

              <div className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 rounded-full bg-(--main-color) text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-4">
                  4
                </div>
                <h4 className="font-semibold">
                  Transparent Quotation
                </h4>
              </div>

              <div className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 rounded-full bg-(--main-color) text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-4">
                  5
                </div>
                <h4 className="font-semibold">
                  Installation & Calibration
                </h4>
              </div>

              <div className="flex flex-col items-center text-center relative">
                <div className="w-16 h-16 rounded-full bg-(--main-color) text-white flex items-center justify-center text-2xl font-bold shadow-lg mb-4">
                  6
                </div>
                <h4 className="font-semibold">
                  Ongoing Technical Support
                </h4>
              </div>

            </div>
          </div>

        </div>
      </section>
      {/* Who We Serve */}
      <section className="flex justify-center w-full py-16 bg-(--background-light)">
        <div className="w-full md:w-5/6 px-4">

          <h2 className="text-4xl font-bold text-center mb-12">
            Who We Serve
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6">

            <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-200 hover:border-(--main-color) transition-all duration-300 hover:-translate-y-1">
              <span className="material-symbols-outlined text-5xl text-(--main-color) mb-3">
                accessibility
              </span>
              <h4 className="font-semibold">
                Orthopedic Surgeons
              </h4>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-200 hover:border-(--main-color) transition-all duration-300 hover:-translate-y-1">
              <span className="material-symbols-outlined text-5xl text-(--main-color) mb-3">
                stethoscope
              </span>
              <h4 className="font-semibold">
                General Practitioners
              </h4>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-200 hover:border-(--main-color) transition-all duration-300 hover:-translate-y-1">
              <span className="material-symbols-outlined text-5xl text-(--main-color) mb-3">
                local_hospital
              </span>
              <h4 className="font-semibold">
                Small Hospitals <br />
                (5–50 Beds)
              </h4>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-200 hover:border-(--main-color) transition-all duration-300 hover:-translate-y-1">
              <span className="material-symbols-outlined text-5xl text-(--main-color) mb-3">
                biotech
              </span>
              <h4 className="font-semibold">
                Diagnostic Centers
              </h4>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-200 hover:border-(--main-color) transition-all duration-300 hover:-translate-y-1">
              <span className="material-symbols-outlined text-5xl text-(--main-color) mb-3">
                healing
              </span>
              <h4 className="font-semibold">
                Day-care Surgical Centres
              </h4>
            </div>

          </div>

        </div>
      </section>
    </div>
  )
}
