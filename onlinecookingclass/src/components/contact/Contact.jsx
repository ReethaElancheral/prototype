// import React, { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import contactImg from "../../assets/images/academy.png";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     subject: "",
//     description: "",
//     file: null,
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === "file") {
//       setFormData({ ...formData, file: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     toast.success("Submitted successfully!");
//     setFormData({
//       email: "",
//       subject: "",
//       description: "",
//       file: null,
//     });
//   };

//   return (
//     <>
//     <div className="bg-[#fef3eb] p-4 md:p-10 flex items-center justify-center">
//      <h2 className="text-2xl font-bold bg-[#fef3eb] text-center">ACADEMY SUPPORT</h2>
//     </div>
//     <div className="h-[600px] md:h-[600px] lg:h-[700px] xl:h-[700px] bg-[#fef3eb] p-4 md:p-10 flex items-center justify-center ">

//       <Toaster position="bottom-center" />

//       <div className="bg-white md:flex rounded-lg w-full max-w-5xl  shadow-xl overflow-hidden">

//         {/* Left Section */}
//         <div className="w-full md:w-1/2 p-6 md:p-10">
//           <h2 className="text-lg font-bold mb-6">SUBMIT A TICKET</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="block text-sm font-semibold mb-1">REQUESTER*</label>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="EMAIL"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-semibold mb-1">SUBJECT*</label>
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="SUBJECT"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-sm font-semibold mb-1">DESCRIPTION*</label>
//               <textarea
//                 name="description"
//                 placeholder="DESCRIPTION"
//                 value={formData.description}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 rounded-2xl border border-gray-300 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block text-green-600 font-semibold cursor-pointer underline text-sm">
//                 + ATTACH A FILE
//                 <input
//                   type="file"
//                   name="file"
//                   accept="image/*,.pdf"
//                   onChange={handleChange}
//                   className="hidden"
//                 />
//               </label>
//             </div>

//             {/* reCAPTCHA Placeholder */}
//             <div className="bg-white border-2 border-yellow-300 rounded-full px-6 py-2 text-sm text-gray-700 font-semibold mb-6 w-fit">
//               I'M NOT A ROBOT
//             </div>

//             {/* Buttons */}
//             <div className="flex gap-4">
//               <button
//                 type="submit"
//                 className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold"
//               >
//                 SUBMIT
//               </button>
//               <button
//                 type="button"
//                 onClick={() =>
//                   setFormData({ email: "", subject: "", description: "", file: null })
//                 }
//                 className="border border-gray-600 px-6 py-2 rounded-full text-sm font-bold"
//               >
//                 CANCEL
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Right Section */}
//         <div className="w-full md:w-1/2">
//           <img
//             src={contactImg}
//             alt="Contact"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import contactImg from "../../assets/images/academy.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    description: "",
    file: null,
    robotCheck: false, // NEW: checkbox state
  });

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.robotCheck) {
      toast.error("Please confirm you're not a robot.");
      return;
    }
    toast.success("Submitted successfully!");
    setFormData({
      email: "",
      subject: "",
      description: "",
      file: null,
      robotCheck: false,
    });
  };

  return (
    <>
      <div className="bg-[#fef3eb] p-4 md:p-10 flex items-center justify-center">
        <h2 className="text-2xl font-bold bg-[#fef3eb] text-center">
          ACADEMY SUPPORT
        </h2>
      </div>

      <div className="h-fit min-h-screen bg-[#fef3eb] p-4 md:p-10 flex items-center justify-center">
        <Toaster position="bottom-center" />

        <div className="bg-white md:flex rounded-lg w-full max-w-5xl shadow-xl overflow-hidden">
          {/* Left Section */}
          <div className="w-full md:w-1/2 p-6 md:p-10">
            <h2 className="text-2xl font-bold mb-6">SUBMIT A TICKET</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-lg font-semibold mb-1">
                  REQUESTER*
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-semibold mb-1">
                  SUBJECT*
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="SUBJECT"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-semibold mb-1">
                  DESCRIPTION*
                </label>
                <textarea
                  name="description"
                  placeholder="DESCRIPTION"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-2xl border border-gray-300 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-green-600 font-semibold cursor-pointer underline text-lg">
                  + ATTACH A FILE
                  <input
                    type="file"
                    name="file"
                    accept="image/*,.pdf"
                    onChange={handleChange}
                    className="hidden"
                  />
                </label>
              </div>

              {/* ✅ Checkbox and label in same line */}
              <div className="flex items-center mb-4 border-2 border-gray-100 rounded-lg px-4 shadow-md">
                <input
                  type="checkbox"
                  name="robotCheck"
                  checked={formData.robotCheck}
                  onChange={handleChange}
                  className="w-6 h-6 text-yellow-500 border-gray-300 rounded focus:ring-yellow-400"
                  id="robotCheck"
                />
                <div className="ml-3 bg-white  px-6 py-2 text-lg text-gray-700 font-semibold w-fit">
                  I'M NOT A ROBOT
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold"
                >
                  SUBMIT
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      email: "",
                      subject: "",
                      description: "",
                      file: null,
                      robotCheck: false,
                    })
                  }
                  className="border border-gray-600 px-6 py-2 rounded-full text-sm font-bold"
                >
                  CANCEL
                </button>
              </div>
            </form>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2">
            <img
              src={contactImg}
              alt="Contact"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
