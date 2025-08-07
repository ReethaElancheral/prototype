
import SearchResults from "../components/category/SearchResults";
import Footer from "../components/footer/Footer";
import Header from "../components/home/Header";





const SearchResultsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Header/>
      <main className="flex-grow bg-white ">
<SearchResults/>
   
      </main>
<Footer/>
    </div>
  );
};

export default SearchResultsPage;
