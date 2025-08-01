import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import menubg from "../../assets/images/menubg1.png";

const courses = [
  {
    title: "The Good Gut Program",
    description:
      "In just 4weeks say Goodbye to Bloating,constipation, inflammation,&acidity. Plus gain more energy & Boost Immunity",
    price: "Get 70% Off ₹1499",
    image: menubg,
  },
  {
    title: "LOOK GOOD COURSE",
    description: "In Just 30 days discover Time Tested & Science Baked Insights Remedies and Recipes.",
    price: "New Launch Offer | Get 88% Off ₹4999",
    image: menubg,
  },
  {
    title: "START YOUR FOOD BUSINESS FROM HOME",
    description: "ELarn How to Start your Food Business From Home and Run a Successful Home",
    price: "New Launch Offer | Get 70% Off ₹1499",
    image: menubg,
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const HomeFeaturedCourses = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-[#fff5e1] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-black mb-2">FEATURED COURSES</h2>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="relative w-[320px] h-[450px] rounded-xl overflow-hidden shadow-lg group"
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

            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center">
  <div className="w-[90%] max-w-[260px] text-center px-4">
    <h3 className="text-2xl font-semibold mb-3">{course.title}</h3>
    <p className="mb-3 text-md">{course.description}</p>
    <p className="mb-4 text-md font-medium">{course.price}</p>
   <Link
                  to="/featured-course"
                  className="inline-block bg-[#D57A66] text-white px-6 py-3 rounded-full text-2xl font-medium hover:bg-[#9e7165] transition"
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

export default HomeFeaturedCourses;
