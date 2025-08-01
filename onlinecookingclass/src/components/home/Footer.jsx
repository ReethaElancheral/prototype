import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import icon1 from '../../assets/images/locationicon.PNG'
import icon2 from '../../assets/images/mailicon.PNG'
import icon3 from '../../assets/images/phoneicon.PNG'
import icon4 from '../../assets/images/instagramicon.PNG'
import icon5 from '../../assets/images/googleicon.PNG'
import icon6 from '../../assets/images/facebookicon.PNG'
import icon7 from '../../assets/images/youtubeicon.PNG'


const Footer = () => {
  return (
    <footer className="bg-[#D17966] text-white font-poppins">
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img src={logo} alt="Flavour Theory Logo" className="w-38 h-auto mb-2" />
        </div>

        {/* Home Links */}
        <div>
          <h3 className="font-semibold mb-2">HOME</h3>
          <ul className="space-y-1">
            <li><Link to="/about" className="hover:underline">ABOUT US</Link></li>
            <li><Link to="/bakery-business" className="hover:underline">PROGRAMS</Link></li>
            <li><Link to="/featured-course" className="hover:underline">COURSES</Link></li>
          </ul>
        </div>

        {/* Courses Section */}
        <div>
          <h3 className="font-semibold mb-2">COURSES</h3>
          <ul className="space-y-1 text-sm">
            <li>THE GOOD GUT PROGRAM</li>
            <li>FOOD LOOK GOOD</li>
            <li>STRAT YOUR BUSINESS FROM HOME-NON VEG& VEG</li>
            <li>STRAT YOUR FOOD BUSINESS FROM HOME-VEG ONLY</li>
            <li>IMMUNITY BOOSTER RECIPES</li>
            <li>INDIA’S FAVOURITES: RESTAURANTS AND HOME STYLE DISHES</li>
            <li>VEGETARIAN’S DELIGHT</li>
            <li>GARNISHING & PLATING</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold mb-2">CONTACT</h3>
          <div className="text-sm space-y-2">
             <p className="flex items-center leading-snug"><img src={icon1} alt="email" className="w-5 h-8 mr-4" />FLOVERTHEORY ACADAMY<br />1234, OLIVE STREET,<br />CHENNAI-021</p>
            <p className="flex items-center"><img src={icon2} alt="email" className="w-8 h-8 mr-2" /> Info@Flovertheoryacadamy.In</p>
            <p className="flex items-center"><img src={icon3} alt="phone" className="w-8 h-8 mr-2" /> 044-987 6785 5677</p>
          </div>

          <div className="mt-4">
            <p className="mb-2">FOLLOW US</p>
            <div className="flex gap-3">
              <img src={icon4} alt="Instagram" className="w-8 h-8" />
              <img src={icon5} alt="Google" className="w-8 h-8" />
              <img src={icon6} alt="Facebook" className="w-8 h-8" />
              <img src={icon7} alt="YouTube" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
