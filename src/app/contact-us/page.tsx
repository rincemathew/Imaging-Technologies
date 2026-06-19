import React from 'react'

function page() {
    return (
        <div>
            {/* Contact Hero */}
            <section className="flex justify-center w-full py-20 bg-[var(--background-light)]">
                <div className="w-full md:w-5/6 px-4 text-center">

                    <div className="inline-block px-4 py-2 rounded-full bg-[var(--main-color-light)] text-[var(--main-color)] font-medium mb-6">
                        Connecting Healthcare Professionals
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Get in Touch
                    </h1>

                    <p className="max-w-3xl mx-auto text-lg text-gray-600">
                        We are ready to support medical imaging needs across Kerala.
                        Whether you need technical consulting, equipment sales, or service
                        support, our team is just a click away.
                    </p>

                </div>
            </section>

            <section className="flex justify-center w-full py-16">
                <div className="w-full md:w-5/6 px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Contact Info */}
                    <div className="lg:col-span-5 space-y-6">

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                            <div className="flex gap-4">
                                <div className="bg-[var(--main-color-light)] p-3 rounded-xl">
                                    <span className="material-symbols-outlined text-[var(--main-color)]">
                                        call
                                    </span>
                                </div>

                                <div>
                                    <h3 className="font-bold text-xl mb-2">Phone</h3>
                                    <p>Sales: +91 XXXXX XXXXX</p>
                                    <p>Support: +91 XXXXX XXXXX</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                            <div className="flex gap-4">
                                <div className="bg-[var(--main-color-light)] p-3 rounded-xl">
                                    <span className="material-symbols-outlined text-[var(--main-color)]">
                                        mail
                                    </span>
                                </div>

                                <div>
                                    <h3 className="font-bold text-xl mb-2">Email</h3>
                                    <p>info@imagingtechnology.in</p>
                                    <p>support@imagingtechnology.in</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                            <div className="flex gap-4">
                                <div className="bg-[var(--main-color-light)] p-3 rounded-xl">
                                    <span className="material-symbols-outlined text-[var(--main-color)]">
                                        location_on
                                    </span>
                                </div>

                                <div>
                                    <h3 className="font-bold text-xl mb-2">Office Address</h3>
                                    <p>
                                        Kochi, Kerala, India
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[var(--main-color)] text-white p-6 rounded-2xl shadow-lg">
                            <div className="flex gap-4 items-center">
                                <span className="material-symbols-outlined text-5xl">
                                    support_agent
                                </span>

                                <div>
                                    <h4 className="font-bold text-xl">
                                        24/7 Technical Support
                                    </h4>

                                    <p className="text-white/90">
                                        Priority coordination for hospitals and clinical partners.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-7">

                        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200">

                            <h2 className="text-3xl font-bold text-[var(--main-color)] mb-8">
                                Send a Message
                            </h2>

                            <form className="space-y-6">

                                <div className="grid md:grid-cols-2 gap-6">

                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-[var(--main-color)]"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Hospital / Clinic"
                                        className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-[var(--main-color)]"
                                    />

                                </div>

                                <div className="grid md:grid-cols-2 gap-6">

                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-[var(--main-color)]"
                                    />

                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-[var(--main-color)]"
                                    />

                                </div>

                                <textarea
                                    rows={5}
                                    placeholder="How can we help you?"
                                    className="w-full border border-gray-300 rounded-xl p-4 focus:outline-none focus:border-[var(--main-color)]"
                                />

                                <button
                                    type="submit"
                                    className="w-full bg-[var(--main-color)] text-white py-4 rounded-xl font-bold hover:opacity-90 transition"
                                >
                                    Submit Request
                                </button>

                            </form>

                        </div>

                    </div>

                </div>
            </section>

            {/* <section className="flex justify-center w-full py-16">
                <div className="w-full md:w-5/6 px-4">

                    <div className="overflow-hidden rounded-3xl shadow-lg border border-gray-200">
                        <iframe
                            src="https://maps.google.com/maps?q=Kochi,%20Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="450"
                            loading="lazy"
                            className="border-0 w-full"
                        />
                    </div>

                </div>
            </section> */}

            <section className="flex justify-center w-full py-16">
                <div className="w-full md:w-5/6 px-4">

                    <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-lg">

                        <iframe
                            src="https://maps.google.com/maps?q=Kochi,%20Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            className="absolute inset-0 w-full h-full border-0"
                        />

                        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-sm">

                            <span className="material-symbols-outlined text-red-500 text-4xl">
                                location_on
                            </span>

                            <h3 className="text-xl font-bold mt-2">
                                Kochi Headquarters
                            </h3>

                            <p className="text-gray-600 mt-2 mb-4">
                                Visit our regional office and experience the latest in medical
                                imaging technology.
                            </p>

                            <a
                                href="https://maps.google.com/?q=Kochi,Kerala"
                                target="_blank"
                                className="inline-block bg-[var(--main-color)] text-white px-4 py-2 rounded-lg"
                            >
                                Open in Google Maps
                            </a>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    )
}

export default page