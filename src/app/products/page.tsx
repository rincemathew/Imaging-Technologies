import React from 'react'
import Image from 'next/image'

// const products = any[]

function page() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-[var(--background-light)] py-24">
                <div className="w-full md:w-5/6 mx-auto px-4">

                    <div className="max-w-3xl">

                        <span className="bg-[var(--main-color-light)] text-[var(--main-color)] px-4 py-2 rounded-full text-sm font-semibold">
                            Medical Imaging Solutions
                        </span>

                        <h1 className="text-5xl md:text-6xl font-bold mt-6 mb-6">
                            Advanced Medical Imaging Equipment
                        </h1>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Explore our range of Digital Radiography, C-Arm Systems,
                            X-Ray Rooms and Diagnostic Imaging Solutions from trusted
                            global brands.
                        </p>

                    </div>

                </div>
            </section>
            {/* Category Filter */}
            <div className="sticky top-20 z-30 bg-white border-y border-gray-200">
                <div className="w-full md:w-5/6 mx-auto px-4 py-4 overflow-x-auto">

                    <div className="flex gap-3 min-w-max">

                        <button className="bg-[var(--main-color)] text-white px-5 py-2 rounded-full">
                            All Products
                        </button>

                        <button className="bg-[var(--background-light)] px-5 py-2 rounded-full hover:bg-[var(--main-color-light)]">
                            DR Systems
                        </button>

                        <button className="bg-[var(--background-light)] px-5 py-2 rounded-full hover:bg-[var(--main-color-light)]">
                            C-Arms
                        </button>

                        <button className="bg-[var(--background-light)] px-5 py-2 rounded-full hover:bg-[var(--main-color-light)]">
                            X-Ray Rooms
                        </button>

                    </div>

                </div>
            </div>
            {/* Product Card */}
            <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">

                <div className="bg-[var(--background-light)] p-8">
                    <Image
                        src="/images/about-us-main.png"
                        alt="Product"
                        width={400}
                        height={300}
                        className="w-full h-60 object-contain"
                    />
                </div>

                <div className="p-6">

                    <span className="bg-[var(--main-color-light)] text-[var(--main-color)] px-3 py-1 rounded-full text-xs font-semibold">
                        DR SYSTEM
                    </span>

                    <h3 className="text-2xl font-bold mt-4">
                        Konica Minolta AeroDR
                    </h3>

                    <p className="text-gray-600 mt-3">
                        High-resolution wireless digital radiography panel with
                        exceptional image quality.
                    </p>

                    <button className="mt-6 bg-[var(--main-color)] text-white px-5 py-3 rounded-xl hover:opacity-90">
                        View Details
                    </button>

                </div>

            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* {products.map((product) => (
    <ProductCard key={product.id} />
  ))} */}
            </div>

            {/* CTA Section */}

            <section className="py-20">
                <div className="w-full md:w-5/6 mx-auto px-4">

                    <div className="bg-[var(--main-color)] rounded-[40px] p-12 text-center text-white">

                        <h2 className="text-4xl font-bold mb-4">
                            Need Help Choosing the Right Equipment?
                        </h2>

                        <p className="max-w-2xl mx-auto text-white/90 mb-8">
                            Our experts will help you select the ideal imaging
                            solution based on your specialty and patient load.
                        </p>

                        <button className="bg-white text-[var(--main-color)] px-8 py-4 rounded-xl font-bold">
                            Book Free Consultation
                        </button>

                    </div>

                </div>
            </section>




        </div>
    )
}

export default page