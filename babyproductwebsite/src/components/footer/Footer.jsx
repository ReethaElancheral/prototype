import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#b3e5fc] text-black py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Know */}
        <div>
          <h3 className="font-semibold border-b-2 border-gray-600 pb-1 mb-3">KNOW</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li>About Earthbubs Store</li>
            <li>Bulk Purchase & Corporate Gifts</li>
          </ul>
        </div>

        {/* Terms & Conditions */}
        <div>
          <h3 className="font-semibold border-b-2 border-gray-600 pb-1 mb-3">TERMS & CONDITIONS</h3>
          <ul className="space-y-2 text-sm">
            <li>Shipping & Return Policies</li>
            <li>Privacy Policy</li>
            <li>FAQ’s</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold border-b-2 border-gray-600 pb-1 mb-3">CONTACT US</h3>
          <ul className="space-y-2 text-sm">
            <li>For Sale: Earthbubs@co.in</li>
            <li>Call: +91 1234567890</li>
            <li>For Complaints: 1800 202 2222</li>
            <li>Chat Time: Our Team is Available<br />From Monday to Saturday from<br />9.00AM to 8.00PM</li>
            <li>For Complaints: Ebcustomercare.com</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="font-semibold border-b-2 border-gray-600 pb-1 mb-3">FOLLOW US</h3>
          <div className="flex gap-4 mt-4 text-xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="hover:text-gray-700" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="hover:text-gray-700" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="hover:text-gray-700" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-800">
        Copyright © 2025 All Rights Reserved.
      </div>
    </footer>
  );
}
