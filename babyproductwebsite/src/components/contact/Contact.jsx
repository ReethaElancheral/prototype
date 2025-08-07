import React, { useState } from 'react';
import phoneicon from '../../assets/images/phoneicon.PNG'
import mailicon from '../../assets/images/mailicon.PNG'
import locationicon from '../../assets/images/locationicon.PNG'


const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectChange = (e) => {
    setFormData((prev) => ({ ...prev, subject: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
    localStorage.setItem('contactSubmissions', JSON.stringify([...submissions, formData]));
    alert('Message Sent!');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: 'General Inquiry',
      message: '',
    });
  };

  return (
    <div className="w-full px-4 py-8 md:px-12 lg:px-24 font-[Poppins]">
      <p className="text-md font-semibold text-black mb-4">Home &gt; Contact Us</p>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Contact Info Box */}
        <div className="bg-[#8fcde2] rounded-md p-8 flex-1 relative overflow-hidden h-[500px]">
          <h2 className="text-3xl font-semibold text-white mb-2">Contact Information</h2>
          <p className="text-lg text-white mb-6">Say something to start a live chat!</p>

          <div className="flex items-center gap-4 mb-6 text-white mt-16">
            <img
                              src={phoneicon}
                              alt="Free Delivery"
                              className="w-8 h-8"
                            />
            <span className='text-md'>+911234567890</span>
          </div>

          <div className="flex items-center gap-4 mb-6 text-white">
            <img
                              src={mailicon}
                              alt="Free Delivery"
                              className="w-8 h-8"
                            />
            <span className='text-md'>Earthbuts@gmail.com</span>
          </div>

          <div className="flex items-center gap-4 text-white">
            <img
                              src={locationicon}
                              alt="Free Delivery"
                              className="w-8 h-8"
                            />
            <span className='text-md'>
              No.5, 12th Main Road, Vijaya Nagar,<br />
              Velacheri, Chennai - 600 042.
            </span>
          </div>

          {/* Decorative Circles */}
          <div className="absolute -bottom-14 -right-14 w-64 h-64 bg-cyan-400 rounded-full opacity-80 z-0"></div>
          <div className="absolute -bottom-20 -right-36 w-48 h-48 bg-cyan-200 rounded-full z-0"></div>
        </div>

        {/* Right Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 bg-white z-10 flex flex-col gap-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium">First Name</label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="border-b-2 border-cyan-300 outline-none py-1"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium">Last Name</label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="border-b-2 border-cyan-300 outline-none py-1"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-b-2 border-cyan-300 outline-none py-1"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-sm font-medium">Phone Number</label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="border-b-2 border-cyan-300 outline-none py-1"
              />
            </div>
          </div>

          <div>
            <label className="text-sm  text-black font-bold">Select Subject?</label>
            <div className="flex flex-wrap gap-6 mt-2">
              {['General Inquiry', 'Call Request', 'Complaint', 'Information'].map((subj) => (
                <label key={subj} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    value={subj}
                    checked={formData.subject === subj}
                    onChange={handleSubjectChange}
                    className="accent-cyan-400"
                  />
                  {subj}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="3"
              required
              className="w-full border-b-2 border-cyan-300 outline-none py-1"
              placeholder="Write your message.."
            />
          </div>

          <div className="text-right mt-4">
            <button
              type="submit"
              className="bg-cyan-400 hover:bg-cyan-500 text-black px-6 py-2 rounded-md transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
