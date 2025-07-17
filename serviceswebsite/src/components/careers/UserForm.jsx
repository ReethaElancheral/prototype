import React, { useEffect, useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import pdfimg from '../../assets/images/pdf.png';
import modalimg from '../../assets/images/modalcheck.png'

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';

const schema = yup.object().shape({
  fullName: yup.string().matches(/^[A-Za-z ]+$/, 'Letters & spaces only').required('Required'),
  email: yup.string().email('Invalid email').required('Required'),
  phone: yup.string().matches(/^[0-9]{10}$/, 'Enter a valid 10-digit phone number').required('Required'),
  address: yup.string().required('Required'),
  resume: yup.mixed()
    .test('required', 'Resume required', v => v && v.length > 0)
    .test('fileType', 'PDF only', v => v && v[0]?.type === 'application/pdf')
    .test('fileSize', 'Max 10MB', v => v && v[0]?.size <= 10 * 1024 * 1024)
});

export default function UserForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
    watch
  } = useForm({ resolver: yupResolver(schema) });

  const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users') || '[]'));
  const [formSuccess, setFormSuccess] = useState(false);
  const fileInputRef = useRef(null);
  const shareUrl = window.location.href;
  const resumeFile = watch('resume');

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const handleFileChange = (e) => {
    const fileList = e.target.files;
    setValue('resume', fileList, { shouldValidate: true });
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

const onSubmit = (data) => {
  const newUser = {
    id: Date.now(),
    fullName: data.fullName,
    email: data.email,
    phone: data.phone,
    address: data.address,
    resumeName: data.resume[0].name
  };

  const updatedUsers = [...users, newUser];
  setUsers(updatedUsers);
  localStorage.setItem('users', JSON.stringify(updatedUsers));

  setFormSuccess(true); // ✅ Modal shows and stays open
  reset();
  if (fileInputRef.current) fileInputRef.current.value = '';
};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-screen-xl mx-auto px-6 py-10 bg-white rounded-md space-y-10 shadow-lg"
    >
      <h1 className="text-4xl font-bold text-center">WE ARE HIRING!!!</h1>
      <p className="text-md text-black font-semibold text-center">We appreciate your interest in joining Zahrix Electromechanical services. Currently, we do not have any opening positions. </p>
      <h2 className="text-3xl font-bold text-center">CAREER OPPORTUNITY</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Column */}
        <div className="space-y-6">
          {['fullName', 'email', 'phone'].map((field) => (
            <div key={field}>
              <label className="block text-lg font-semibold capitalize">
                {field === 'fullName' ? 'Full Name *' : field === 'email' ? 'Email Address *' : 'Phone Number *'}
              </label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                {...register(field)}
                placeholder={
                  field === 'fullName' ? 'Enter Name' : field === 'email' ? 'Enter Email' : 'Enter Phone No'
                }
                className="w-full h-14 px-5 border-2 border-gray-300 rounded-lg text-lg focus:border-blue-500 focus:outline-none"
              />
              {errors[field] && <p className="text-red-600 mt-1">{errors[field].message}</p>}
              
            </div>
          
          ))}
          <p className="text-xl text-[#4B69A9] font-semibold text-center">Thank You For Considering Zahrix As Your Future Workplace! </p>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Resume Upload */}
          <div className="h-56 border-2 border-gray-300 rounded-lg p-4 focus-within:border-blue-500 flex">
            <div className="flex-shrink-0">
              <img src={pdfimg} alt="PDF" className="w-16 h-16" />
            </div>
            <div className="flex-1 ml-4">
              <label className="block text-lg font-semibold">Resume *</label>
              <p className="text-lg">Attach Your Resume in PDF format</p>
              <button
                type="button"
                onClick={handleUploadClick}
                className="bg-[#4B69A9] text-white px-6 py-2 mt-2 rounded-lg text-lg hover:bg-blue-700"
              >
                Upload Resume
              </button>
              <p className="text-sm text-gray-600 mt-1">Maximum size: 10MB</p>
              <input
                type="file"
                accept=".pdf"
                {...register('resume')}
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
              {resumeFile?.length > 0 && (
                <p className="mt-2 text-gray-700">{resumeFile[0]?.name}</p>
              )}
              {errors.resume && <p className="text-red-600 mt-1">{errors.resume.message}</p>}
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-lg font-semibold">Additional Information</label>
            <input
              type="text"
              {...register('address')}
              placeholder="Enter Address Line 1"
              className="w-full h-14 px-5 border-2 border-gray-300 rounded-lg text-lg focus:border-blue-500 focus:outline-none"
            />
            {errors.address && <p className="text-red-600 mt-1">{errors.address.message}</p>}
          </div>

          {/* Share Job */}
          <div className="border-2 border-gray-300 rounded-lg p-4">
            <label className="block text-lg font-semibold mb-2">Share Job:</label>
            <div className="flex space-x-3 mt-2">
              <FacebookShareButton url={shareUrl}><FacebookIcon size={40} round /></FacebookShareButton>
              <TwitterShareButton url={shareUrl}><TwitterIcon size={40} round /></TwitterShareButton>
              <LinkedinShareButton url={shareUrl}><LinkedinIcon size={40} round /></LinkedinShareButton>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 bg-[#4B69A9] text-white py-3 rounded-lg text-lg hover:bg-blue-700"
            >
              Submit Application
            </button>
            <button
              type="button"
              onClick={() => reset()}
              className="flex-1 bg-gray-500 text-white py-3 rounded-lg text-lg hover:bg-gray-600"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
{formSuccess && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="relative bg-white rounded-2xl p-8 w-full max-w-lg text-center shadow-xl">
      
      {/* Close Button */}
      <button
        onClick={() => setFormSuccess(false)}
        className="absolute top-3 right-4 text-black text-2xl font-bold focus:outline-none"
      >
        ×
      </button>

      {/* Success Icon */}
      <div className="flex justify-center mb-4">
       <img src={modalimg}/>
      </div>

      {/* Success Message */}
      <h2 className="text-lg md:text-xl font-bold mb-6">Application Submitted Successfully !</h2>

      {/* Go Back Home Button */}
      <button
        onClick={() => {
          setFormSuccess(false);
          window.location.href = '/';
        }}
        className="bg-[#4B69A9] text-white text-lg font-medium px-10 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Go&nbsp; Back&nbsp; Home
      </button>
    </div>
  </div>
)}


    </form>
  );
}
