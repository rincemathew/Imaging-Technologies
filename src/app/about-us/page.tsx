import React from 'react'
import Image from "next/image";
import { MdEngineering } from "react-icons/md";
import { MdOutlineInstallDesktop } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";



export default function page() {
    return (
        <div>
            {/* About Us Hero */}
            <section className="flex justify-center w-full py-20 bg-white overflow-hidden">
                <div className="w-full md:w-5/6 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div>

                        <span className="inline-block text-[var(--main-color)] font-semibold uppercase tracking-[4px] mb-4">
                            Our Story
                        </span>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                            Empowering Doctors with the Right{" "}
                            <span className="text-[var(--main-color)]">
                                Imaging Technology
                            </span>
                        </h1>

                        <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                            Imaging Technology is a dedicated medical imaging solutions
                            company founded by Sudheesh Kumar A and Mr. Jobish.

                            <br /><br />

                            More than dealers, we are technology partners to doctors and
                            hospitals across Kerala, providing honest guidance, advanced
                            imaging solutions, and long-term technical support.
                        </p>

                    </div>

                    {/* Right Image */}
                    <div className="relative group">

                        {/* Background Glow */}
                        <div className="absolute -inset-4 bg-[var(--main-color-light)] opacity-40 rounded-3xl blur-3xl group-hover:opacity-60 transition duration-500"></div>

                        <div className="relative overflow-hidden rounded-3xl shadow-2xl">

                            <Image
                                src="/images/about-us-main.png"
                                alt="Medical Imaging Technology"
                                width={1000}
                                height={700}
                                className="w-full h-[350px] md:h-[500px] object-cover transition duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="flex justify-center w-full py-20 bg-[var(--background-light)]">
                <div className="w-full md:w-5/6 px-4">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Mission */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">

                            <div className="w-14 h-14 rounded-xl bg-[var(--main-color-light)] flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-3xl text-[var(--main-color)]">
                                    track_changes
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4">
                                Our Mission
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                To empower doctors with the right imaging technology through
                                honest consultation, high-quality products, and localized
                                technical support that ensures uninterrupted patient care.
                            </p>

                        </div>

                        {/* Vision */}
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">

                            <div className="w-14 h-14 rounded-xl bg-[var(--main-color-light)] flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-3xl text-[var(--main-color)]">
                                    visibility
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-4">
                                Our Vision
                            </h3>

                            <p className="text-gray-600 leading-relaxed">
                                To become Kerala’s most trusted doctor-centric medical imaging
                                solutions provider, recognized for ethical guidance and superior
                                technical lifespan management.
                            </p>

                        </div>

                    </div>

                </div>
            </section>

            {/* Leadership */}
            <section className="flex justify-center w-full py-20">
                <div className="w-full md:w-5/6 px-4">

                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            Visionary Leadership
                        </h2>

                        <p className="text-gray-600">
                            Experts committed to ethical medical guidance.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                        {/* Sudheesh */}
                        <div className="bg-white rounded-3xl border border-gray-200 p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300">

                            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[var(--main-color-light)] mb-6">
                                <Image
                                    src="/images/sudheesh-kumar.jpg"
                                    alt="Sudheesh Kumar A"
                                    width={300}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h3 className="text-2xl font-bold">
                                Sudheesh Kumar A
                            </h3>

                            <p className="text-[var(--main-color)] font-semibold mt-2 mb-4">
                                Medical Imaging Consultant & Educator
                            </p>

                            <p className="text-gray-600 leading-relaxed mb-6">
                                With decades of experience in radiology education and consultancy,
                                Sudheesh ensures every solution we provide is clinically sound,
                                technically correct, and doctor-focused.
                            </p>

                            <div className="flex justify-center gap-3 flex-wrap">
                                <span className="bg-[var(--main-color-light)] text-[var(--main-color)] px-4 py-2 rounded-full text-xs font-bold">
                                    EDUCATION
                                </span>

                                <span className="bg-[var(--main-color-light)] text-[var(--main-color)] px-4 py-2 rounded-full text-xs font-bold">
                                    ETHICAL GUIDANCE
                                </span>
                            </div>

                        </div>

                        {/* Jobish */}
                        <div className="bg-white rounded-3xl border border-gray-200 p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300">

                            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-[var(--main-color-light)] mb-6">
                                <Image
                                    src="/images/jobish.jpg"
                                    alt="Jobish"
                                    width={300}
                                    height={300}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h3 className="text-2xl font-bold">
                                Mr. Jobish
                            </h3>

                            <p className="text-[var(--main-color)] font-semibold mt-2 mb-4">
                                Operations & Technical Lead
                            </p>

                            <p className="text-gray-600 leading-relaxed mb-6">
                                Managing the backbone of our technical operations, Jobish
                                oversees installations and field support, ensuring equipment
                                uptime remains our highest priority.
                            </p>

                            <div className="flex justify-center gap-3 flex-wrap">
                                <span className="bg-[var(--main-color-light)] text-[var(--main-color)] px-4 py-2 rounded-full text-xs font-bold">
                                    OPERATIONS
                                </span>

                                <span className="bg-[var(--main-color-light)] text-[var(--main-color)] px-4 py-2 rounded-full text-xs font-bold">
                                    INFRASTRUCTURE
                                </span>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* Services & Legacy Support */}
            <section className="flex justify-center w-full py-20">
                <div className="w-full md:w-5/6 px-4">

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Services */}
                        <div className="lg:col-span-7">

                            <h2 className="text-4xl font-bold mb-10">
                                Comprehensive Imaging Solutions
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                                <div className="p-6 rounded-2xl bg-[var(--background-light)] hover:bg-[var(--main-color-light)]/30 transition-all duration-300">
                                    <span className="material-symbols-outlined text-4xl text-[var(--main-color)] mb-4">
                                        radiology
                                    </span>

                                    <h5 className="font-bold text-lg mb-2">
                                        Digital X-Ray
                                    </h5>

                                    <p className="text-gray-600">
                                        DR Panels, High-frequency generators, and complete CR-to-DR conversion solutions.
                                    </p>
                                </div>

                                <div className="p-6 rounded-2xl bg-[var(--background-light)] hover:bg-[var(--main-color-light)]/30 transition-all duration-300">
                                    <span className="material-symbols-outlined text-4xl text-[var(--main-color)] mb-4">
                                        ecg
                                    </span>

                                    <h5 className="font-bold text-lg mb-2">
                                        C-Arm Systems
                                    </h5>

                                    <p className="text-gray-600">
                                        Surgical imaging solutions for orthopedic, pain management, and cardiac procedures.
                                    </p>
                                </div>

                                <div className="p-6 rounded-2xl bg-[var(--background-light)] hover:bg-[var(--main-color-light)]/30 transition-all duration-300">
                                    <span className="material-symbols-outlined text-4xl text-[var(--main-color)] mb-4">
                                        ultrasound
                                    </span>

                                    <h5 className="font-bold text-lg mb-2">
                                        Ultrasound Systems
                                    </h5>

                                    <p className="text-gray-600">
                                        Precision diagnostic scanners for general practice and specialty clinics.
                                    </p>
                                </div>

                                <div className="p-6 rounded-2xl bg-[var(--background-light)] hover:bg-[var(--main-color-light)]/30 transition-all duration-300">
                                    <span className="material-symbols-outlined text-4xl text-[var(--main-color)] mb-4">
                                        architecture
                                    </span>

                                    <h5 className="font-bold text-lg mb-2">
                                        Room Planning
                                    </h5>

                                    <p className="text-gray-600">
                                        Regulatory-compliant radiology room planning and electrical load assessment.
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* Legacy Support */}
                        <div className="lg:col-span-5">

                            <div className="relative h-full bg-[var(--main-color)] text-white rounded-3xl p-8 overflow-hidden">

                                {/* Background Icon */}
                                <div className="absolute top-4 right-4 opacity-10">
                                    <span className="material-symbols-outlined text-[120px]">
                                        construction
                                    </span>
                                </div>

                                <h3 className="text-3xl font-bold mb-6">
                                    Legacy Equipment Support
                                </h3>

                                <p className="leading-relaxed text-white/90 mb-8">
                                    We believe in sustainability. Our team provides specialized
                                    maintenance and technical support for conventional X-ray
                                    systems and older radiology setups, extending the life of
                                    your critical assets when others recommend replacement.
                                </p>

                                <div className="space-y-4">

                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-green-300">
                                            check_circle
                                        </span>
                                        <span>Spare Parts Sourcing</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-green-300">
                                            check_circle
                                        </span>
                                        <span>Calibration Services</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-green-300">
                                            check_circle
                                        </span>
                                        <span>Safety Audits & Compliance Checks</span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-green-300">
                                            check_circle
                                        </span>
                                        <span>Preventive Maintenance Programs</span>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* Team Pillars */}
            <section className="flex justify-center w-full py-20 bg-[var(--background-light)]">
                <div className="w-full md:w-5/6 px-4">

                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">
                            The Pillars of Our Team
                        </h2>

                        <p className="text-gray-600">
                            Every member is dedicated to the technical precision your practice demands.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col items-center text-center shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-[var(--main-color-light)] flex items-center justify-center mb-5">
                                <span className="material-symbols-outlined text-3xl text-[var(--main-color)]">
                                    engineering
                                </span>
                            </div>

                            <h4 className="font-bold text-xl mb-2">
                                Service Engineers
                            </h4>

                            <p className="text-gray-600">
                                Skilled field experts for rapid on-site troubleshooting and technical support.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col items-center text-center shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-[var(--main-color-light)] flex items-center justify-center mb-5">
                                <span className="material-symbols-outlined text-3xl text-[var(--main-color)]">
                                    build
                                </span>
                            </div>

                            <h4 className="font-bold text-xl mb-2">
                                Installation Staff
                            </h4>

                            <p className="text-gray-600">
                                Precision technical setup and imaging system integration specialists.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col items-center text-center shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-[var(--main-color-light)] flex items-center justify-center mb-5">
                                <span className="material-symbols-outlined text-3xl text-[var(--main-color)]">
                                    calendar_month
                                </span>
                            </div>

                            <h4 className="font-bold text-xl mb-2">
                                Office Coordination
                            </h4>

                            <p className="text-gray-600">
                                Seamless logistics and administrative support for every project.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col items-center text-center shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
                            <div className="w-16 h-16 rounded-full bg-[var(--main-color-light)] flex items-center justify-center mb-5">
                                <span className="material-symbols-outlined text-3xl text-[var(--main-color)]">
                                    support_agent
                                </span>
                            </div>

                            <h4 className="font-bold text-xl mb-2">
                                Customer Support
                            </h4>

                            <p className="text-gray-600">
                                Dedicated assistance and technical query handling whenever required.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* CTA Section */}
            <section className="flex justify-center w-full py-20">
                <div className="w-full md:w-5/6 px-4">

                    <div className="relative overflow-hidden rounded-[40px] bg-[var(--main-color)] p-10 md:p-16 text-center text-white">

                        {/* Background Glow */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="w-full h-full bg-radial from-white/30 via-transparent to-transparent"></div>
                        </div>

                        <div className="relative z-10">

                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Upgrade Your Imaging Quality?
                            </h2>

                            <p className="text-lg max-w-3xl mx-auto mb-10 text-white/90">
                                Join hundreds of clinics and hospitals across Kerala who trust
                                Imaging Technology for honest consultation, advanced imaging
                                equipment, and superior technical support.
                            </p>

                            <div className="flex flex-col sm:flex-row justify-center gap-4">

                                <button className="bg-white text-[var(--main-color)] px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300">
                                    Book Free Consultation
                                </button>

                                <button className="border-2 border-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[var(--main-color)] transition-all duration-300">
                                    View Our Solutions
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}
