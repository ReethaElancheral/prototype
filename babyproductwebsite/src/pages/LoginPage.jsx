


import Footer from "../components/footer/Footer";
import Header from "../components/home/Header";
import Login from "../components/login/Login";





const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Header/>
      <main className="flex-grow bg-white ">
<Login/>
   
      </main>
<Footer/>
    </div>
  );
};

export default LoginPage;
