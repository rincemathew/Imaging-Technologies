import React from 'react'
import Image from "next/image";
import { MdEngineering } from "react-icons/md";
import { MdOutlineInstallDesktop } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";



export default function page() {
    return (
        <div>
            <div className='flex items-center justify-center w-full class="h-24"'>
                <div className='flex items-center w-5/6 justify-between py-8'>
                    <div className='w-1/2'>
                        <div>
                            <div>Who We Are</div>
                            <div className='text-4xl font-bold'>Empowering Doctors with the Right Imaging Technology </div>
                            <div className='text-lg text-gray-700 mt-4'>Imaging Technology is a dedicated medical imaging solutions company founded by Sudheesh Kumar A and Mr. Jobish, built on the principles of technical clarity, ethical guidance, and long-term service commitment.<br />
                                We specialize in the sales, consultation, installation, and maintenance of advanced imaging systems from globally recognized brands such as Konica Minolta and trusted Indian manufacturers including Medion Healthcare Pvt Ltd.<br />
                                More than dealers, we are technology partners to doctors and hospitals.</div>
                        </div>
                        <div className='flex'>
                            <div className='w-1/2'>
                                Our Mission<br />
                                To empower doctors with the right imaging technology through honest consultation, reliable products, and dependable service support
                            </div>
                            <div className='w-1/2'>
                                Our Vision<br />
                                To become Kerala’s most trusted doctor-centric medical imaging solutions provider.
                            </div>
                        </div>

                    </div>
                    <div className='w-1/2'>
                        <Image src='/images/about-us-main.png' alt='Logo' width={0} height={0} sizes='100vw' className='w-full h-auto' />
                    </div>
                </div>

            </div>
            <div className='flex items-center justify-center w-full class="h-24"'>
                <div className='flex items-center w-5/6 justify-between py-8'>

                    <div className='w-1/2'>
                        <div>Our Leadership</div>
                        Sudheesh Kumar A<br />
                        Doctor-focused Medical Imaging Consultant & Educator<br />
                        With deep technical knowledge in Digital Radiography systems, Sudheesh guides doctors in selecting the right equipment based on specialty, patient load, and long-term investment planning — without pressure selling.<br />
                    </div>
                    <div className='w-1/2'>
                        Mr. Jobish<br />
                        Operations & Technical Support Lead<br />
                        Mr. Jobish ensures smooth coordination in installation, service follow-up, and field execution, maintaining strong relationships with hospitals and diagnostic centers.<br />
                        Together, we combine consultation expertise with operational efficiency.<br />
                    </div>
                </div>
            </div>



            <div className='flex items-center justify-center w-full class="h-24"'>
                <div className='flex items-center w-5/6 justify-between py-8'>
                    What We Do<br />
                    <div className='grid grid-cols-4 gap-4 w-full'>
                        <div>Digital X-Ray Systems (Room DR, Portable DR)</div>
                        <div>C-Arm Systems</div>
                        <div>Ultrasound Systems</div>
                        <div>Room Planning & Load Assessment</div>
                        <div>Installation & Calibration</div>
                        <div>After-Sales Support</div>
                        <div>Equipment Upgrade Consultation</div>
                        <div>Caring for Existing Radiology Equipment</div>
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-center w-full class="h-24"'>
                <div className='flex items-center w-5/6 justify-between py-8'>
                    We strongly believe that healthcare providers should not replace equipment unnecessarily.<br />
                    That’s why we also support and maintain:
                    <div className='grid grid-cols-4 gap-4 w-full'>
                        <div>Conventional X-ray Machines</div>
                        <div>C-Arm Systems</div>
                        <div>Ultrasound Machines</div>
                        <div>Older Radiology Setups</div>
                        <div>Our field engineers and office support team work closely to ensure timely service coordination, troubleshooting, and technical assistance — helping hospitals extend equipment life and maintain consistent patient care.</div>
                    </div>
                </div>
            </div>


            <div className='flex items-center justify-center w-full class="h-24"'>
                <div className='flex items-center w-5/6 justify-between py-8'>
                    <div className='flex flex-col w-full'>
                        <h1 className='text-(--main-color) text-sm font-bold mb-4'>Our Team</h1>
                        <div className='grid grid-cols-4 gap-4 w-full'>
                            <div className="relative">
                                <div className="bg-(--main-color-light) shadow-lg rounded-xl pl-16 pr-6 py-6 border border-gray-200">
                                    <h3 className="text-xl font-semibold text-white">
                                        Skilled Field Service Engineers
                                    </h3>
                                </div>
                                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-l from-[#b8c6f4] to-[#fff] rounded-full flex items-center justify-center shadow-lg">
                                    <MdEngineering className="text-(--main-color) text-3xl" />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-(--main-color-light) shadow-lg rounded-xl pl-16 pr-6 py-6 border border-gray-200">
                                    <h3 className="text-xl font-semibold text-white">
                                        Technical Installation Staff
                                    </h3>
                                </div>
                                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-l from-[#b8c6f4] to-[#fff] rounded-full flex items-center justify-center shadow-lg">
                                    <MdOutlineInstallDesktop className="text-(--main-color) text-3xl" />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-(--main-color-light) shadow-lg rounded-xl pl-16 pr-6 py-6 border border-gray-200">
                                    <h3 className="text-xl font-semibold text-white">
                                        Office Coordination Team
                                    </h3>
                                </div>
                                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-l from-[#b8c6f4] to-[#fff] rounded-full flex items-center justify-center shadow-lg">
                                    <RiTeamFill className="text-(--main-color) text-3xl" />
                                </div>
                            </div>
                            <div className="relative">
                                <div className="bg-(--main-color-light) shadow-lg rounded-xl pl-16 pr-6 py-6 border border-gray-200">
                                    <h3 className="text-xl font-semibold text-white">
                                        Customer Support Executives
                                    </h3>
                                </div>
                                <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-l from-[#b8c6f4] to-[#fff] rounded-full flex items-center justify-center shadow-lg">
                                    <RiCustomerService2Fill className="text-(--main-color) text-3xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
