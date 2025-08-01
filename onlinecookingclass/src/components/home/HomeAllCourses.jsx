import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import coursebg from "../../assets/images/courses.png";

const courses = [
  {
    title: "IMMUNITY BOOSTER RECIPE'S",
    description:
      "In just 4weeks say Goodbye to Bloating,constipation, inflammation,&acidity. Plus gain more energy & Boost Immunity",
    price: "Get 70% Off ₹1499",
    image: coursebg,
  },
  {
    title: "GARNISING & PLATING COURSE",
    description: "In Just 30 days discover Time Tested & Science Baked Insights Remedies and Recipes.",
    price: "New Launch Offer | Get 88% Off ₹4999",
    image: coursebg,
  },
  {
    title: "COOKING AT HOME RESTAURANT STYLE & HOME STYLE",
    description: "ELarn How to Start your Food Business From Home and Run a Successful Home",
    price: "New Launch Offer | Get 70% Off ₹1499",
    image: coursebg,
  },
  {
    title: "VEGETARIAN'S DELIGHT",
    description: "ELarn How to Start your Food Business From Home and Run a Successful Home",
    price: "New Launch Offer | Get 70% Off ₹1499",
    image: coursebg,
  },
  {
    title: "BASIC COOKING FOR SINGLES",
    description: "ELarn How to Start your Food Business From Home and Run a Successful Home",
    price: "New Launch Offer | Get 70% Off ₹1499",
    image: coursebg,
  },
  {
    title: "INDIA'S FAVOURITES: RESTAURANT AND HOME STYLE DISHES",
    description: "ELarn How to Start your Food Business From Home and Run a Successful Home",
    price: "New Launch Offer | Get 70% Off ₹1499",
    image: coursebg,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HomeAllCourses = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#fff5e1] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-black mb-2">ALL COURSES</h2>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="relative w-[350px] h-[520px] rounded-xl overflow-hidden shadow-lg group"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={course.image}
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
              />

            <div className="absolute inset-0 bg-opacity-50 text-black flex justify-center items-center">
  <div className="w-[90%] max-w-[260px] text-center px-4">
    <h3 className="text-xl font-bold mb-3 text-white">{course.title}</h3>
     <div className="w-[90%] max-w-[260px] text-center px-4 my-16">
    <p className="mb-3 text-md">{course.description}</p>
    <p className="mb-4 text-md font-medium">{course.price}</p>
    </div>
    
   <Link
                  to="/homestyle-dishes"
                  className="inline-block bg-[#D57A66] text-white px-6 py-3 rounded-full text-2xl font-medium hover:bg-[#9e7165] transition mt-10"
                >
                 Learn More
                </Link>
  </div>
</div>


            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAllCourses;
