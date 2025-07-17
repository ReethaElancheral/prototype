import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import priya from "../../assets/images/priya.png";
import rahul from "../../assets/images/rahul.png";

const testimonials = [
  {
    name: "Priya Patel",
    role: "Homeowner",
    image: priya,
    rating: 5,
    message:
      "The electrical panel upgrade done by ZAHIRX was seamless. Their electricians were courteous, knowledgeable, and provided excellent customer service. I'm thrilled with the results!",
  },
  {
    name: "Rahul Sharma",
    role: "Facility Manager",
    image: rahul,
    rating: 5,
    message:
      "ZAHIRX Electrical Services delivered exceptional work on our office electrical upgrade. Their team was professional, efficient, and completed the project on time. Highly recommended!",
  },
];


const Testimonials = () => {
  return (
    <section className="py-20 bg-[#f9f9fb] text-center px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-2 uppercase tracking-wide">
        Our Testimonials <span className="text-[#4B69A9]">⚡</span>
      </h2>
      <p className="text-3xl text-[#4B69A9] font-medium mb-12">
        Real People, Real Results
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="relative bg-white rounded-t-[60px] shadow-md w-full max-w-lg p-6 text-left min-h-[280px]"
          >
            {/* Profile and Rating in same row */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="bg-[#4B69A9] text-white px-4 py-1 rounded-full text-sm font-semibold leading-tight">
                  {t.name}
                  <span className="block text-xs font-normal text-gray-100">
                    {t.role}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-4xl">★</span>
                ))}
              </div>
            </div>

            {/* Testimonial message */}
            <p className="text-blue-900 text-sm md:text-base font-medium leading-relaxed mb-4 py-8">
              “{t.message}”
            </p>

            {/* Quote icon bottom right */}
            <div className="absolute bottom-4 right-6 text-2xl text-gray-700">
              <Quote className="w-6 h-6" />
            </div>

            {/* Blue shadow effect at bottom */}
            <div className="absolute bottom-0 right-4 w-full h-6 bg-blue-600 rounded-b-none -z-10"></div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-10 gap-4">
        <button className="p-2 bg-gray-200 rounded hover:bg-gray-300">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="p-2 bg-[#4B69A9] text-white rounded hover:bg-blue-800">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;

