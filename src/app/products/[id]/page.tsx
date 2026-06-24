import React from 'react'
import Image from 'next/image'

function page() {
    return (
        <div>
            {/* Product Hero Section */}
            <section className="flex justify-center w-full py-20">
                <div className="w-full md:w-5/6 px-4">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        <div className="bg-[var(--background-light)] rounded-3xl p-8">
                            <Image
                                src="/images/products/mi-70hf.png"
                                alt="Mi 70HF MOVX DR"
                                width={800}
                                height={800}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        <div>

                            <span className="bg-[var(--main-color-light)] text-[var(--main-color)] px-4 py-2 rounded-full text-sm font-semibold">
                                Mobile Digital Radiography System
                            </span>

                            <h1 className="text-5xl font-bold mt-6 mb-6">
                                Mi 70HF MOVX DR
                            </h1>

                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Engineered for precision and maneuverability,
                                delivering exceptional imaging quality at the point of care.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">

                                <button className="bg-[var(--main-color)] text-white px-8 py-4 rounded-xl font-semibold">
                                    Request Consultation
                                </button>

                                <button className="border border-[var(--main-color)] text-[var(--main-color)] px-8 py-4 rounded-xl font-semibold">
                                    Download Brochure
                                </button>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* Technical Specifications */}
            <section className="flex justify-center w-full py-12">
                <div className="w-full md:w-5/6 px-4">

                    <h2 className="text-4xl font-bold mb-8">
                        Technical Specifications
                    </h2>

                    <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">

                        <div className="grid md:grid-cols-2">

                            <div className="p-6 border-b md:border-r">
                                <div className="text-gray-500">Output</div>
                                <div className="font-semibold mt-1">
                                    3.5 / 4.2 KW (High Frequency)
                                </div>
                            </div>

                            <div className="p-6 border-b">
                                <div className="text-gray-500">mA Range</div>
                                <div className="font-semibold mt-1">
                                    70 mA & 100 mA
                                </div>
                            </div>

                            <div className="p-6 border-b md:border-r">
                                <div className="text-gray-500">kV Range</div>
                                <div className="font-semibold mt-1">
                                    40 – 100 KV
                                </div>
                            </div>

                            <div className="p-6 border-b">
                                <div className="text-gray-500">Stand Type</div>
                                <div className="font-semibold mt-1">
                                    Spring Balanced
                                </div>
                            </div>

                            <div className="p-6 md:border-r">
                                <div className="text-gray-500">DR System</div>
                                <div className="font-semibold mt-1">
                                    14 x 17 Konica Minolta
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="text-gray-500">Console</div>
                                <div className="font-semibold mt-1">
                                    14&quot; Touch Screen
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* Key Features */}
            <section className="flex justify-center w-full py-12 bg-[var(--background-light)]">
                <div className="w-full md:w-5/6 px-4">

                    <h2 className="text-4xl font-bold mb-10">
                        Key Features
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="bg-white rounded-3xl p-6 shadow-sm">
                            <div className="w-14 h-14 rounded-full bg-[var(--main-color-light)] flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-[var(--main-color)]">
                                    design_services
                                </span>
                            </div>

                            <h3 className="font-bold text-xl mb-2">
                                Sleek Design
                            </h3>

                            <p className="text-gray-600">
                                Compact footprint with premium medical-grade design.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-6 shadow-sm">
                            <div className="w-14 h-14 rounded-full bg-[var(--main-color-light)] flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-[var(--main-color)]">
                                    local_shipping
                                </span>
                            </div>

                            <h3 className="font-bold text-xl mb-2">
                                Easy Mobility
                            </h3>

                            <p className="text-gray-600">
                                Smooth movement and precise positioning.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-6 shadow-sm">
                            <div className="w-14 h-14 rounded-full bg-[var(--main-color-light)] flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-[var(--main-color)]">
                                    tune
                                </span>
                            </div>

                            <h3 className="font-bold text-xl mb-2">
                                Precision Control
                            </h3>

                            <p className="text-gray-600">
                                Accurate exposure parameter selection.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-6 shadow-sm">
                            <div className="w-14 h-14 rounded-full bg-[var(--main-color-light)] flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined text-[var(--main-color)]">
                                    touch_app
                                </span>
                            </div>

                            <h3 className="font-bold text-xl mb-2">
                                Touch Interface
                            </h3>

                            <p className="text-gray-600">
                                Intuitive APR selection and operation.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* Clinical Applications */}
            <section className="flex justify-center w-full py-20">
                <div className="w-full md:w-5/6 px-4">

                    <div className="bg-[var(--main-color)] rounded-[40px] text-center text-white p-12">

                        <h2 className="text-4xl font-bold mb-4">
                            Clinical Applications
                        </h2>

                        <p className="max-w-3xl mx-auto text-lg text-white/90 mb-8">
                            Ideal for Bedside X-Ray, Emergency Departments,
                            Radiology Rooms and Veterinary Applications.
                        </p>

                        <button className="bg-white text-[var(--main-color)] px-8 py-4 rounded-xl font-bold">
                            Contact Our Team
                        </button>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default page