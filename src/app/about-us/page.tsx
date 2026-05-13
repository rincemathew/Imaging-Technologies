import React from 'react'
import Image from "next/image";

export default function page() {
    return (
        <div>

            <div className='flex items-center justify-center w-full class="h-24"'>
        <div className='flex items-center w-5/6 justify-between py-8'>
          <div className='w-1/2'>
            <div>Who We Are</div>
            <div className='text-4xl font-bold'>Empowering Doctors with the Right Imaging Technology </div>
            <div className='text-lg text-gray-700 mt-4'>Imaging Technology is a dedicated medical imaging solutions company founded by Sudheesh Kumar A and Mr. Jobish, built on the principles of technical clarity, ethical guidance, and long-term service commitment.<br />
                We specialize in the sales, consultation, installation, and maintenance of advanced imaging systems from globally recognized brands such as Konica Minolta and trusted Indian manufacturers including Medion Healthcare Pvt Ltd.<br />
                More than dealers, we are technology partners to doctors and hospitals.</div>
          </div>
          <div className='w-1/2'>
          <Image src='/images/about-us-main.png' alt='Logo' width={0} height={0} sizes='100vw' className='w-full h-auto' />
          </div>
        </div>

      </div>
            <div>
                Our Leadership<br/>
                Sudheesh Kumar A<br/>
                Doctor-focused Medical Imaging Consultant & Educator<br/>
                With deep technical knowledge in Digital Radiography systems, Sudheesh guides doctors in selecting the right equipment based on specialty, patient load, and long-term investment planning — without pressure selling.<br/>
                Mr. Jobish<br/>
                Operations & Technical Support Lead<br/>
                Mr. Jobish ensures smooth coordination in installation, service follow-up, and field execution, maintaining strong relationships with hospitals and diagnostic centers.<br/>
                Together, we combine consultation expertise with operational efficiency.<br/><br/>
                What We Do<br/>
                We provide complete solutions for:<br/>
                Digital X-Ray Systems (Room DR, Portable DR)<br/>
                C-Arm Systems<br/>
                Ultrasound Systems<br/>
                Room Planning & Load Assessment<br/>
                Installation & Calibration<br/>
                After-Sales Support<br/>
                Equipment Upgrade Consultation<br/><br/>
                Caring for Existing Radiology Equipment<br/>
                We strongly believe that healthcare providers should not replace equipment unnecessarily.<br/>
                That’s why we also support and maintain:<br/>
                Conventional X-ray Machines<br/>
                C-Arm Systems<br/>
                Ultrasound Machines<br/>
                Older Radiology Setups<br/>
                Our field engineers and office support team work closely to ensure timely service coordination, troubleshooting, and technical assistance — helping hospitals extend equipment life and maintain consistent patient care.<br/><br/>
                Our Team<br/>
                Behind Imaging Technology is a committed team of:<br/>
                ✔ Skilled Field Service Engineers<br/>
                ✔ Technical Installation Staff<br/>
                ✔ Office Coordination Team<br/>
                ✔ Customer Support Executives<br/>
                Every project we undertake reflects teamwork, responsibility, and accountability.<br/><br/>
                Our Mission<br/>
                To empower doctors with the right imaging technology through honest consultation, reliable products, and dependable service support<br/><br/>
                Our Vision<br/>
                To become Kerala’s most trusted doctor-centric medical imaging solutions provider.<br/>
            </div>
        </div>
    )
}
