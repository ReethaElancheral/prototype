import { useEffect, useState } from "react";
import user1 from "../../assets/images/testimonial5.png";
import user2 from "../../assets/images/testimonial2.png";
import user3 from "../../assets/images/testimonial3.png";
import user4 from "../../assets/images/testimonial4.png";
import user5 from "../../assets/images/testimonial5.png";

const testimonials = [
  {
    image: user1,
    quote: "CHEF MADE IT FUN, EVEN FOR A TOTAL BEGINNER LIKE ME!",
    name: "CARLOS D.",
  },
  {
    image: user2,
    quote: "I FINALLY LEARNED, HOW TO COOK WITHOUT GOOGLING EVERY STEP!",
    name: "JASON M.",
  },
  {
    image: user3,
    quote: "Transformed my cooking skills in just weeks!",
    name: "Amit K",
  },
  {
    image: user4,
    quote: "Easy, delicious, and interactive classes!",
    name: "Lina S",
  },
  {
    image: user5,
    quote: "Best online cooking experience I’ve ever had!",
    name: "Nathan J",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { image, quote, name } = testimonials[current];

  return (
    <>
   
        <h2 className=" bg-[#fff6ed] text-4xl font-semibold uppercase text-black py-10 text-center">
          COURSE TESTIMONIALS
        </h2>
    
  
    <section className="bg-[#fff6ed] py-12 px-4 flex justify-center items-center">
      

      <div className="bg-[#ffe9c9] rounded-3xl w-full max-w-[800px] min-h-[340px] p-6 pt-20 relative shadow-md flex flex-col justify-center items-center text-center transition-all duration-700 ease-in-out">


        <img
          src={image}
          alt={name}
          className="w-38 h-38 object-cover rounded-full absolute -top-14 left-1/2 transform -translate-x-1/2 border-4 border-[#fff6ed] shadow"
        />
        <div>
          <p className="text-lg font-bold uppercase text-black px-4 leading-relaxed">
            "{quote}"
          </p>
          <p className="mt-4 text-right font-bold text-black">–{name}</p>
        </div>
      </div>
    </section>
    </>
  );
};

export default TestimonialsSection;
