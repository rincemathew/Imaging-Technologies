import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-(--background-light) border-t border-gray-200 mt-16">
      <div className="w-full md:w-5/6 mx-auto px-4 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold text-(--main-color)">
              imaging
            </h2>

            <h3 className="text-xl font-bold mb-4">
              TECHNOLOGY
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Empowering Doctors with the Right Imaging Technology.
              Authorized dealer of Konica Minolta & Medion Healthcare Pvt Ltd.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-(--main-color) font-bold mb-4">
              Important Links
            </h4>

            <ul className="space-y-3 text-gray-700">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/products">Products</Link>
              </li>

              <li>
                <Link href="/services">Services</Link>
              </li>

              <li>
                <Link href="/about-us">About Us</Link>
              </li>

              <li>
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-(--main-color) font-bold mb-4">
              Contact Information
            </h4>

            <div className="space-y-3 text-gray-700">
              <p>
                Kochi, Kerala, India
              </p>

              <p>
                +91 XXXXX XXXXX
              </p>

              <p>
                info@imagingtechnology.in
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-sm text-gray-600 text-center md:text-left">
            © 2026 Imaging Technology. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-(--main-color) text-white flex items-center justify-center hover:scale-110 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-(--main-color) text-white flex items-center justify-center hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-(--main-color) text-white flex items-center justify-center hover:scale-110 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-(--main-color) text-white flex items-center justify-center hover:scale-110 transition"
            >
              <FaYoutube />
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}