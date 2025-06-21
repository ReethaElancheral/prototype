import { useState } from 'react';
import { useBilling } from '../components/BillingContext';
import { useNavigate } from 'react-router-dom';
import SearchBar from './Searchbar';


export default function ItemList() {
  const { billItems } = useBilling();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate(`/products?search=${searchTerm}`);
  };

  return (
    <>
    <div className='itemlistcontainer'>

    
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onAddClick={handleAddClick}
      />

      <h3>Bill Items</h3>

      {billItems.length === 0 ? (
        <p>No items added.</p>
      ) : (
        <>
          <div className="item-table-header">
            <span>ITEM DETAILS</span>
            <span>QUANTITY</span>
            <span>RATE</span>
            <span>TAX</span>
            <span>AMOUNT</span>
          </div>

          {billItems.map((item, i) => {
            const total = (item.rate + item.tax) * item.quantity;

            return (
              <div key={i} className="item-row">
                <span>{item.name}</span>
                <span>{item.quantity}</span>
                <span>{item.rate}</span>
                <span>{item.tax}</span>
                <span>{total}</span>
              </div>
            );
          })}
        </>
      )}
      </div>
    </>
  );
}
