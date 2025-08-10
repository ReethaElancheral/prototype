


import Footer from "../components/footer/Footer";
import Header from "../components/home/Header";
import Signup from "../components/login/Signup";






const SignupPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Header/>
      <main className="flex-grow bg-white ">
<Signup/>
   
      </main>
<Footer/>
    </div>
  );
};

export default SignupPage;
