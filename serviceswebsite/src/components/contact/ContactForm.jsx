import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import modalimg from '../../assets/images/modalcheck.png'
import learnIcon from "../../assets/images/learnarrow.png";


export default function ContactForm() {
  const initial = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    agree: false,
  };

  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("bookingForm");
    if (saved) setForm(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("bookingForm", JSON.stringify(form));
  }, [form]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const validate = () => {
    const errs = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const phoneRegex = /^\d{10}$/;
    const today = new Date().toISOString().split("T")[0];

    if (!form.firstName.trim()) {
      errs.firstName = "First name is required";
    } else if (!nameRegex.test(form.firstName.trim())) {
      errs.firstName = "Only letters and spaces allowed";
    }

    if (!form.lastName.trim()) {
      errs.lastName = "Last name is required";
    } else if (!nameRegex.test(form.lastName.trim())) {
      errs.lastName = "Only letters and spaces allowed";
    }

    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Invalid email format";
    }

    if (!form.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!phoneRegex.test(form.phone)) {
      errs.phone = "Must be exactly 10 digits";
    }

    if (!form.date) {
      errs.date = "Select a date";
    } else if (form.date < today) {
      errs.date = "Date cannot be in the past";
    }

    if (!form.time) {
      errs.time = "Select a time";
    }

    if (!form.agree) {
      errs.agree = "You must agree to terms";
    }

    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    localStorage.removeItem("bookingForm");
    setForm(initial);
    setErrors({});
    setShowModal(true);
  };

  return (
    <section className="py-20 px-4 sm:px-8 lg:px-28 bg-white">
       <h2 className="text-3xl font-bold text-center text-black">Get In Touch With Us</h2>
        <p className="text-gray-600 text-center mb-8">
         For More Information About Our Services
        </p>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#4B69A9]">Booking Your Service Today! ⚡</h2>
        <p className="text-gray-600 text-center mb-8">
          Whether you’re planning a new project or need emergency support, we’re here for you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["firstName", "lastName", "email", "phone"].map((field) => {
              const labels = {
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email",
                phone: "Phone",
              };
              const types = {
                email: "email",
                phone: "tel",
              };
              return (
                <div key={field}>
                  <label className="block text-[#4B69A9] font-medium text-2xl mb-4">{labels[field]}</label>
                  <input
                    name={field}
                    type={types[field] || "text"}
                    value={form[field]}
                    onChange={handleChange}
                    className={`w-full border ${
                      errors[field] ? "border-red-500" : "border-[#4B69A9]"
                    } rounded px-4 py-8 focus:outline-none focus:ring-2 focus:ring-[#4B69A9]`}
                    placeholder={`e.g. ${labels[field]}`}
                  />
                  {errors[field] && (
                    <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#4B69A9] font-medium text-2xl mb-4">Pick the Date</label>
              <input
                name="date"
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={form.date}
                onChange={handleChange}
                className={`w-full border ${
                  errors.date ? "border-red-500" : "border-[#4B69A9]"
                } rounded px-4 py-8 focus:outline-none focus:ring-2 focus:ring-[#4B69A9]`}
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">{errors.date}</p>
              )}
            </div>
            <div>
              <label className="block text-[#4B69A9] font-medium mb-4 text-2xl">Choose Your Time</label>
              <input
                name="time"
                type="time"
                value={form.time}
                onChange={handleChange}
                className={`w-full border ${
                  errors.time ? "border-red-500" : "border-[#4B69A9]"
                } rounded px-4 py-8 focus:outline-none focus:ring-2 focus:ring-[#4B69A9]`}
              />
              {errors.time && (
                <p className="text-red-500 text-sm mt-1">{errors.time}</p>
              )}
            </div>
          </div>

          <div className="flex items-start mb-4">
            <input
              name="agree"
              type="checkbox"
              checked={form.agree}
              onChange={handleChange}
              className="mt-1 h-5 w-5 text-[#4B69A9] border-gray-300 rounded focus:ring-[#4B69A9]"
            />
            <label className="ml-2 text-gray-700">
              I agree to the{" "}
              <a className="text-[#4B69A9] underline" href="/terms">
                Terms
              </a>{" "}
              and{" "}
              <a className="text-[#4B69A9] underline" href="/privacy">
                Privacy Policy
              </a>.
            </label>
          </div>
          {errors.agree && (
            <p className="text-red-500 text-sm mb-4">{errors.agree}</p>
          )}

          <div className="text-center">
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#4B69A9] text-white px-8 py-3 rounded shadow hover:bg-opacity-90 transition"
            >
             <img src={learnIcon} alt="Learn Icon" className="w-5 h-5" />
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-lg p-10 rounded-xl text-center shadow-2xl">
      
             <div className="flex justify-center mb-4">
                   <img src={modalimg}/>
                  </div>
            <p className="text-black mb-6 font-semibold text-xl">
              "We've received your inquiry. Our team will contact you soon."
            </p>
            <div className="flex justify-center gap-4">
             
              <button
                onClick={() => navigate("/")}
                className="bg-[#4B69A9] text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Go Back Home
              </button>
               <button
                onClick={() => setShowModal(false)}
                className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
