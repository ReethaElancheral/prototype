// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import logo from "../../assets/images/logo.png";

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [programsOpen, setProgramsOpen] = useState(false);
//   const [coursesOpen, setCoursesOpen] = useState(false);

//   const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

//   return (
//     <nav className="bg-[#fff5e1] text-[#4a403a] font-poppins font-medium text-2xl h-40 relative z-50">
//       <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <img src={logo} alt="Logo" className="h-22 rounded-full" />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-8">
//           <Link to="/" className="hover:text-amber-500">
//             HOME
//           </Link>
//           <Link to="/about" className="hover:text-amber-500">
//             ABOUT
//           </Link>

//           {/* Programs Dropdown */}
//          <div className="relative">
//   <button
//     onClick={() => {
//       setProgramsOpen(!programsOpen);
//       setCoursesOpen(false); // close other dropdown if open
//     }}
//     className="hover:text-amber-500 flex items-center"
//   >
//     PROGRAMS <span className="ml-1">▼</span>
//   </button>

//   {programsOpen && (
//     <div
//       onMouseLeave={() => setProgramsOpen(false)}
//       className="absolute top-full left-0 z-50 bg-white shadow-md mt-2 rounded p-2 min-w-max"
//     >
//       <Link
//         to="/bakery-business"
//         className="block px-4 py-1 hover:bg-amber-100 text-base"
//         onClick={() => setProgramsOpen(false)}
//       >
//         BAKERY BUSINESS
//       </Link>
//       <Link
//         to="/accelerator-program"
//         className="block px-4 py-1 hover:bg-amber-100 text-base"
//         onClick={() => setProgramsOpen(false)}
//       >
//         ACCELERATOR PROGRAM
//       </Link>
//       <Link
//         to="/cloud-kitchen"
//         className="block px-4 py-1 hover:bg-amber-100 text-base"
//         onClick={() => setProgramsOpen(false)}
//       >
//         CLOUD KITCHEN
//       </Link>
//       <Link
//         to="/accelerator"
//         className="block px-4 py-1 hover:bg-amber-100 text-base"
//         onClick={() => setProgramsOpen(false)}
//       >
//         ACCELERATOR
//       </Link>
//     </div>
//   )}
// </div>

//           {/* Courses Dropdown */}
//           <div className="relative">
//   <button
//     onClick={() => {
//       setCoursesOpen(!coursesOpen);
//       setProgramsOpen(false); // close other dropdown if open
//     }}
//     className="hover:text-amber-500 flex items-center"
//   >
//     COURSES <span className="ml-1">▼</span>
//   </button>

//   {coursesOpen && (
//     <div
//       onMouseLeave={() => setCoursesOpen(false)}
//       className="absolute top-full left-0 z-50 bg-white shadow-md mt-2 rounded p-2 min-w-max"
//     >
//       <Link
//         to="/courses/1-month"
//         className="block px-4 py-1 hover:bg-amber-100 text-base"
//         onClick={() => setCoursesOpen(false)}
//       >
//         THE GOOD GUT PROGRAM
//       </Link>
//       <Link
//         to="/courses/healthy-meals"
//         className="block px-4 py-1 hover:bg-amber-100 text-base"
//         onClick={() => setCoursesOpen(false)}
//       >
//         FOOD LOOK GOOD
//       </Link>
//       <Link
//         to="/courses/indian-cuisine"
//         className="block px-4 py-1 hover:bg-amber-100 text-base"
//         onClick={() => setCoursesOpen(false)}
//       >
//         GARNISHING AND PLATING
//       </Link>
//       <Link
//         to="/homestyle-dishes"
//         className="block px-4 py-1 hover:bg-amber-100 text-base"
//         onClick={() => setCoursesOpen(false)}
//       >
//         INDIA'S FAVOURITE: RESTAURANT'S <br/> AND HOME STYLE DISHES
//       </Link>
//       <Link
//         to="/courses/world-flavors"
//         className="block px-4 py-1 hover:bg-amber-100 text-base"
//         onClick={() => setCoursesOpen(false)}
//       >
//         VEGETARIAN'S DELIGHT
//       </Link>
//     </div>
//   )}
// </div>

//           <Link to="/contact" className="hover:text-amber-500">
//             CONTACT
//           </Link>

//           <Link to="/loginsignup">
//             <button className="bg-[#c84b4b] text-white px-4 py-1 rounded-full hover:bg-red-600">
//               LOGIN
//             </button>
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
//             {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Backdrop overlay */}
//       {mobileMenuOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-30 z-40"
//           onClick={() => setMobileMenuOpen(false)}
//           aria-hidden="true"
//         />
//       )}

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden fixed top-40 left-0 right-0 z-50 px-4 pb-4 space-y-2 bg-[#fff5e1] overflow-auto max-h-[calc(100vh-10rem)]">
//           <Link
//             to="/"
//             className="block"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             HOME
//           </Link>
//           <Link
//             to="/about"
//             className="block"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             ABOUT
//           </Link>

//           {/* Programs Dropdown */}
//           <div>
//             <button
//               onClick={() => setProgramsOpen(!programsOpen)}
//               className="w-full text-left flex justify-between"
//             >
//               PROGRAMS <span>{programsOpen ? "▲" : "▼"}</span>
//             </button>
//             <div
//               className={`ml-4 mt-1 space-y-1 overflow-hidden transition-max-height duration-300 ease-in-out ${
//                 programsOpen ? "max-h-96" : "max-h-0"
//               }`}
//             >
//               <Link
//                 to="/programs/beginner"
//                 className="block"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Beginner Program
//               </Link>
//               <Link
//                 to="/programs/advanced-cooking"
//                 className="block"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Advanced Cooking
//               </Link>
//               <Link
//                 to="/programs/kids-special"
//                 className="block"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Kids Special
//               </Link>
//               <Link
//                 to="/programs/baking-essentials"
//                 className="block"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Baking Essentials
//               </Link>
//             </div>
//           </div>

//           {/* Courses Dropdown */}
//           <div>
//             <button
//               onClick={() => setCoursesOpen(!coursesOpen)}
//               className="w-full text-left flex justify-between"
//             >
//               COURSES <span>{coursesOpen ? "▲" : "▼"}</span>
//             </button>
//             <div
//               className={`ml-4 mt-1 space-y-1 overflow-hidden transition-max-height duration-300 ease-in-out ${
//                 coursesOpen ? "max-h-96" : "max-h-0"
//               }`}
//             >
//               <Link
//                 to="/courses/1-month"
//                 className="block"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 1-Month Course
//               </Link>
//               <Link
//                 to="/courses/healthy-meals"
//                 className="block"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Healthy Meals
//               </Link>
//               <Link
//                 to="/courses/indian-cuisine"
//                 className="block"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Indian Cuisine
//               </Link>
//               <Link
//                 to="/courses/world-flavors"
//                 className="block"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 World Flavors
//               </Link>
//             </div>
//           </div>

//           <Link
//             to="/contact"
//             className="block"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             CONTACT
//           </Link>
//           <button
//             className="bg-[#c84b4b] text-white px-4 py-1 rounded-full w-full mt-2"
//             onClick={() => setMobileMenuOpen(false)}
//           >
//             LOGIN
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../../assets/images/logo.png";

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [programsOpen, setProgramsOpen] = useState(false);
//   const [coursesOpen, setCoursesOpen] = useState(false);
//   const { pathname } = useLocation();

//   const onAuthPage = ["/login", "/signup"].includes(pathname);
//   const onEnrollPage = pathname === "/enroll";

//   const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

//   return (
//     <nav className="bg-[#fff5e1] text-[#4a403a] font-poppins font-medium text-2xl h-40 relative z-50">
//       <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <img src={logo} alt="Logo" className="h-22 rounded-full" />
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-8">
//           <Link to="/" className="hover:text-amber-500">HOME</Link>

//           {onAuthPage && (
//             <>
//               <Link to="/login" className="hover:text-amber-500">LOGIN</Link>
//               <Link to="/signup" className="hover:text-amber-500">SIGN UP</Link>
//             </>
//           )}

//           {!onAuthPage && !onEnrollPage && (
//             <>
//               <Link to="/about" className="hover:text-amber-500">ABOUT</Link>

//               {/* Programs Dropdown */}
//          <div className="relative">
//   <button
//     onClick={() => {
//       setProgramsOpen(!programsOpen);
//       setCoursesOpen(false); // close other dropdown if open
//     }}
//     className="hover:text-amber-500 flex items-center"
//   >
//     PROGRAMS <span className="ml-1">▼</span>
//   </button>

//   {programsOpen && (
//     <div
//       onMouseLeave={() => setProgramsOpen(false)}
//       className="absolute top-full left-0 z-50 bg-white shadow-md mt-2 rounded p-2 min-w-max"
//     >
//       <Link
//         to="/bakery-business"
//         className="block px-4 py-1 hover:bg-amber-100 text-base"
//         onClick={() => setProgramsOpen(false)}
//       >
//         BAKERY BUSINESS
//       </Link>
//       <Link
//         to="/accelerator-program"
//         className="block px-4 py-1 hover:bg-amber-100 text-base"
//         onClick={() => setProgramsOpen(false)}
//       >
//         ACCELERATOR PROGRAM
//       </Link>
//       <Link
//         to="/cloud-kitchen"
//         className="block px-4 py-1 hover:bg-amber-100 text-base"
//         onClick={() => setProgramsOpen(false)}
//       >
//         CLOUD KITCHEN
//       </Link>
//       <Link
//         to="/accelerator"
//         className="block px-4 py-1 hover:bg-amber-100 text-base"
//         onClick={() => setProgramsOpen(false)}
//       >
//         ACCELERATOR
//       </Link>
//     </div>
//   )}
// </div>

//  {/* Courses Dropdown */}
//           <div className="relative">
//   <button
//     onClick={() => {
//       setCoursesOpen(!coursesOpen);
//       setProgramsOpen(false); // close other dropdown if open
//     }}
//     className="hover:text-amber-500 flex items-center"
//   >
//     COURSES <span className="ml-1">▼</span>
//   </button>

//   {coursesOpen && (
//     <div
//       onMouseLeave={() => setCoursesOpen(false)}
//       className="absolute top-full left-0 z-50 bg-white shadow-md mt-2 rounded p-2 min-w-max"
//     >
//       <Link
//         to="/courses/1-month"
//         className="block px-4 py-1 hover:bg-amber-100 text-base"
//         onClick={() => setCoursesOpen(false)}
//       >
//         THE GOOD GUT PROGRAM
//       </Link>
//       <Link
//         to="/courses/healthy-meals"
//         className="block px-4 py-1 hover:bg-amber-100 text-base"
//         onClick={() => setCoursesOpen(false)}
//       >
//         FOOD LOOK GOOD
//       </Link>
//       <Link
//         to="/courses/indian-cuisine"
//         className="block px-4 py-1 hover:bg-amber-100 text-base"
//         onClick={() => setCoursesOpen(false)}
//       >
//         GARNISHING AND PLATING
//       </Link>
//       <Link
//         to="/homestyle-dishes"
//         className="block px-4 py-1 hover:bg-amber-100 text-base"
//         onClick={() => setCoursesOpen(false)}
//       >
//         INDIA'S FAVOURITE: RESTAURANT'S <br/> AND HOME STYLE DISHES
//       </Link>
//       <Link
//         to="/courses/world-flavors"
//         className="block px-4 py-1 hover:bg-amber-100 text-base"
//         onClick={() => setCoursesOpen(false)}
//       >
//         VEGETARIAN'S DELIGHT
//       </Link>
//     </div>
//   )}
// </div>

//               <Link to="/contact" className="hover:text-amber-500">CONTACT</Link>
//               <Link to="/loginsignup">
//                 <button className="bg-[#c84b4b] text-white px-4 py-1 rounded-full hover:bg-red-600">
//                   LOGIN
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
//             {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Backdrop */}
//       {mobileMenuOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={() => setMobileMenuOpen(false)} />
//       )}

//       {/* Mobile Menu */}
//       {mobileMenuOpen && (
//         <div className="md:hidden fixed top-40 left-0 right-0 z-50 px-4 pb-4 space-y-2 bg-[#fff5e1] overflow-auto max-h-[calc(100vh-10rem)]">
//           <Link to="/" className="block" onClick={() => setMobileMenuOpen(false)}>HOME</Link>

//           {onAuthPage && (
//             <>
//               <Link to="/login" className="block" onClick={() => setMobileMenuOpen(false)}>LOGIN</Link>
//               <Link to="/signup" className="block" onClick={() => setMobileMenuOpen(false)}>SIGN UP</Link>
//             </>
//           )}

//           {!onAuthPage && !onEnrollPage && (
//             <>
//               <Link to="/about" className="block" onClick={() => setMobileMenuOpen(false)}>ABOUT</Link>

//  {/* Programs Dropdown */}
//           <div>
//             <button
//               onClick={() => setProgramsOpen(!programsOpen)}
//               className="w-full text-left flex justify-between"
//             >
//               PROGRAMS <span>{programsOpen ? "▲" : "▼"}</span>
//             </button>
//             <div
//               className={`ml-4 mt-1 space-y-1 overflow-hidden transition-max-height duration-300 ease-in-out ${
//                 programsOpen ? "max-h-96" : "max-h-0"
//               }`}
//             >
//               <Link
//                 to="/programs/beginner"
//                 className="block"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Beginner Program
//               </Link>
//               <Link
//                 to="/programs/advanced-cooking"
//                 className="block"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Advanced Cooking
//               </Link>
//               <Link
//                 to="/programs/kids-special"
//                 className="block"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Kids Special
//               </Link>
//               <Link
//                 to="/programs/baking-essentials"
//                 className="block"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Baking Essentials
//               </Link>
//             </div>
//           </div>

//           {/* Courses Dropdown */}
//           <div>
//             <button
//               onClick={() => setCoursesOpen(!coursesOpen)}
//               className="w-full text-left flex justify-between"
//             >
//               COURSES <span>{coursesOpen ? "▲" : "▼"}</span>
//             </button>
//             <div
//               className={`ml-4 mt-1 space-y-1 overflow-hidden transition-max-height duration-300 ease-in-out ${
//                 coursesOpen ? "max-h-96" : "max-h-0"
//               }`}
//             >
//               <Link
//                 to="/courses/1-month"
//                 className="block"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 1-Month Course
//               </Link>
//               <Link
//                 to="/courses/healthy-meals"
//                 className="block"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Healthy Meals
//               </Link>
//               <Link
//                 to="/courses/indian-cuisine"
//                 className="block"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 Indian Cuisine
//               </Link>
//               <Link
//                 to="/courses/world-flavors"
//                 className="block"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 World Flavors
//               </Link>
//             </div>
//           </div>

//               <Link to="/contact" className="block" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
//               <Link to="/loginsignup">
//                 <button
//                   className="bg-[#c84b4b] text-white px-4 py-1 rounded-full w-full mt-2"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   LOGIN
//                 </button>
//               </Link>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const { pathname } = useLocation();

  const onAuthPage = pathname === "/loginsignup";
  const onEnrollPage = pathname === "/enroll";

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <nav className="bg-[#fff5e1] text-[#4a403a] font-poppins text-2xl h-40 relative z-50 from-neutral-600">
      <div className="max-w-7xl mx-auto px-4 h-full flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-22 rounded-full" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="hover:text-amber-500">
            HOME
          </Link>

          {onAuthPage && (
            <>
              <Link to="/loginsignup?mode=login">LOGIN</Link>
              <Link to="/loginsignup?mode=signup">SIGN UP</Link>
            </>
          )}

          {!onAuthPage && !onEnrollPage && (
            <>
              <Link to="/about" className="hover:text-amber-500">
                ABOUT
              </Link>
              {/* Programs Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setProgramsOpen(!programsOpen);
                    setCoursesOpen(false); // close other dropdown if open
                  }}
                  className="hover:text-amber-500 flex items-center"
                >
                  PROGRAMS <span className="ml-1">▼</span>
                </button>

                {programsOpen && (
                  <div
                    onMouseLeave={() => setProgramsOpen(false)}
                    className="absolute top-full left-0 z-50 bg-white shadow-md mt-2 rounded p-2 min-w-max"
                  >
                    <Link
                      to="/bakery-business"
                      className="block px-4 py-1 hover:bg-amber-100 text-base"
                      onClick={() => setProgramsOpen(false)}
                    >
                      BAKERY BUSINESS <br/>ACCELERATOR PROGRAM
                    </Link>
                   
                    <Link
                      to="/cloud-kitchen"
                      className="block px-4 py-1 hover:bg-amber-100 text-base"
                      onClick={() => setProgramsOpen(false)}
                    >
                      CLOUD KITCHEN <br/> ACCELERATOR
                    </Link>
                  
                  </div>
                )}
              </div>

              {/* Courses Dropdown */}
              <div className="relative">
                <button
                  onClick={() => {
                    setCoursesOpen(!coursesOpen);
                    setProgramsOpen(false); // close other dropdown if open
                  }}
                  className="hover:text-amber-500 flex items-center"
                >
                  COURSES <span className="ml-1">▼</span>
                </button>

                {coursesOpen && (
                  <div
                    onMouseLeave={() => setCoursesOpen(false)}
                    className="absolute top-full left-0 z-50 bg-white shadow-md mt-2 rounded p-2 min-w-max"
                  >
                    <Link
                      to="/featured-course"
                      className="block px-4 py-1 hover:bg-amber-100 text-base"
                      onClick={() => setCoursesOpen(false)}
                    >
                      THE GOOD GUT PROGRAM
                    </Link>
                    <Link
                      to="/homestyle-dishes"
                      className="block px-4 py-1 hover:bg-amber-100 text-base"
                      onClick={() => setCoursesOpen(false)}
                    >
                      FOOD LOOK GOOD
                    </Link>
                    <Link
                      to="/homestyle-dishes"
                      className="block px-4 py-1 hover:bg-amber-100 text-base"
                      onClick={() => setCoursesOpen(false)}
                    >
                      GARNISHING AND PLATING
                    </Link>
                    <Link
                      to="/homestyle-dishes"
                      className="block px-4 py-1 hover:bg-amber-100 text-base"
                      onClick={() => setCoursesOpen(false)}
                    >
                      INDIA'S FAVOURITE: RESTAURANT'S <br /> AND HOME STYLE
                      DISHES
                    </Link>
                    <Link
                      to="/homestyle-dishes"
                      className="block px-4 py-1 hover:bg-amber-100 text-base"
                      onClick={() => setCoursesOpen(false)}
                    >
                      VEGETARIAN'S DELIGHT
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/contact" className="hover:text-amber-500">
                CONTACT
              </Link>
              <Link to="/loginsignup">
                <button className="bg-[#c84b4b] text-white px-4 py-1 rounded-full hover:bg-red-600">
                  LOGIN
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-40 left-0 right-0 z-50 px-4 pb-4 space-y-2 bg-[#fff5e1] overflow-auto max-h-[calc(100vh-10rem)]">
          <Link
            to="/"
            className="block"
            onClick={() => setMobileMenuOpen(false)}
          >
            HOME
          </Link>

          {onAuthPage && (
            <>
              <Link
                to="/login"
                className="block"
                onClick={() => setMobileMenuOpen(false)}
              >
                LOGIN
              </Link>
              <Link
                to="/signup"
                className="block"
                onClick={() => setMobileMenuOpen(false)}
              >
                SIGN UP
              </Link>
            </>
          )}

          {!onAuthPage && !onEnrollPage && (
            <>
              <Link
                to="/about"
                className="block"
                onClick={() => setMobileMenuOpen(false)}
              >
                ABOUT
              </Link>

              {/* Programs Dropdown */}
              <div>
                <button
                  onClick={() => setProgramsOpen(!programsOpen)}
                  className="w-full text-left flex justify-between"
                >
                  PROGRAMS <span>{programsOpen ? "▲" : "▼"}</span>
                </button>
                <div
                  className={`ml-4 mt-1 space-y-1 overflow-hidden transition-max-height duration-300 ease-in-out ${
                    programsOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <Link
                    to="/bakery-business"
                    className="block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    BAKERY BUSINESS
                  </Link>
                  <Link
                    to="/cloud-kitchen"
                    className="block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    CLOUD KITCHEN
                  </Link>
                 
                </div>
              </div>

              {/* Courses Dropdown */}
              <div>
                <button
                  onClick={() => setCoursesOpen(!coursesOpen)}
                  className="w-full text-left flex justify-between"
                >
                  COURSES <span>{coursesOpen ? "▲" : "▼"}</span>
                </button>
                <div
                  className={`ml-4 mt-1 space-y-1 overflow-hidden transition-max-height duration-300 ease-in-out ${
                    coursesOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <Link
                    to="/featured-course"
                    className="block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                   THE GOOD GUT PROGRAM
                  </Link>
                  <Link
                    to="/featured-course"
                    className="block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    FOOD LOOK GOOD
                  </Link>
                  <Link
                    to="/homestyle-dishes"
                    className="block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    INDIAN RESTAURANT
                  </Link>
                  <Link
                    to="/homestyle-dishes"
                    className="block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    GARNISHING PLATING
                  </Link>
                </div>
              </div>

              <Link
                to="/contact"
                className="block"
                onClick={() => setMobileMenuOpen(false)}
              >
                CONTACT
              </Link>
              <Link to="/loginsignup">
                <button
                  className="bg-[#c84b4b] text-white px-4 py-1 rounded-full w-full mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  LOGIN
                </button>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
