import CustomerDetails from '../components/CustomerDetails';
import ItemList from '../components/ItemList';
import { useNavigate } from 'react-router-dom';

const Home = () => {
   const navigate = useNavigate();

  const handleNextClick = () => {
    navigate('/billingsummary');
  };
  return (
    <>
    <div className="products-wrapper">
          <CustomerDetails />
          <ItemList />
          <div className="next-btn-container">
           <button className="next-btn" onClick={handleNextClick}>
          Next
        </button>
          </div>
        </div>
    </>
  )
}

export default Home;