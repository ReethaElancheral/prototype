

import { Link } from "react-router-dom";
import sampleImage from "../../assets/images/homesampleimg.png"

const HomeImageSection = () => {
  return (
    <section className="flex justify-center items-center px-6 py-12 bg-[#fff5e1]">
      <div className="relative w-full max-w-6xl h-[500px] rounded-2xl overflow-hidden">
        <img
          src={sampleImage}
          alt="Home Visual"
          className="w-full h-full object-contain rounded-2xl"
        />
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
           <Link
                  to="/featured-course"
                  className="inline-block bg-[#af4e63] text-white px-10 py-4 rounded-full text-2xl font-medium hover:bg-[#9e7165] transition mt-10"
                >
                 Learn More
                </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeImageSection;
