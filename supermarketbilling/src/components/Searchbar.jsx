import { FaSearch, FaBarcode, FaMicrophone } from 'react-icons/fa';

export default function SearchBar({ searchTerm, setSearchTerm, onAddClick }) {
  return (
    <div className="searchbar-wrapper">
      <div className="search-input-container">
        <FaSearch className="search-icon-left" />
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="search-icons-right">
          <FaBarcode />
          <FaMicrophone />
        </div>
      </div>

      <button className="add-btn" onClick={onAddClick}>+ Add Item</button>
    </div>
  );
}
