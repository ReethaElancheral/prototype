
import { useState, useEffect} from 'react';
import { Link, NavLink,useNavigate } from 'react-router-dom';
import { FiSearch, FiShoppingBag, FiUser, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import logo from '../../assets/images/logoimg.PNG';
import { useCart } from '../context/CartContext';


import { getCurrentUser, clearCurrentUser } from '../utils/auth';


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
    const { totalItems } = useCart();

      const [query, setQuery] = useState('');
  const navigate = useNavigate();
    const [user, setUser] = useState(null);

   const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery('');
    }
  };



  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

 

  const handleLogout = () => {
    clearCurrentUser();
    setUser(null);
    navigate('/');
  };


  const productCategories = [
    { name: 'Pampers', path: '/products/pampers' },
    { name: "Boy's Fashion", path: '/products/boys-fashion' },
    { name: "Girl's Fashion", path: '/products/girls-fashion' },
    { name: 'Soap', path: '/products/soap' },
    { name: 'Stroller', path: '/products/stroller' },
    { name: 'Bottle', path: '/products/bottle' },
  ];

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products' },
    { name: 'Offers', path: '/offers' },
    { name: 'About', path: '/about' },
    { name: 'Contacts', path: '/contacts' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 min-h-[80px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-14 h-14 object-cover" />
          <span className="font-bold text-xl">EarthBubs</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 relative text-xl">
          {navItems.map((item) =>
            item.name === 'Products' ? (
              <div key="products" className="relative group">
                <button className="flex items-center gap-1 font-medium text-black hover:text-blue-500">
                  Products <FiChevronDown className="mt-[1px]" />
                </button>
                <div className="absolute left-0 top-full mt-2 bg-white border rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50 min-w-[180px]">
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      to={cat.path}
                      className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-100"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'bg-blue-100 text-black px-2 py-1 rounded-md font-medium'
                    : 'text-black hover:text-blue-500 font-medium'
                }
              >
                {item.name}
              </NavLink>
            )
          )}
        </nav>

        {/* Search & Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">

          {/* <div className="flex border border-blue-400 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 outline-none text-sm"
            />
            <button className="px-2 text-blue-500">
              <FiSearch />
            </button>
          </div> */}

          <form
      onSubmit={handleSearch}
      className="flex gap-2 mt-3 items-center border border-blue-400 rounded-md overflow-hidden"
    >
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-3 py-1 w-full outline-none text-sm"
      />
      <button type="submit" className="px-2 text-blue-500">
        <FiSearch />
      </button>
    </form>

<Link to="/cart" className="relative text-xl hover:text-blue-500">
  <FiShoppingBag />
  {totalItems > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
      {totalItems}
    </span>
  )}
</Link>


   {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">Hi, {user.name.split(' ')[0]}</span>
              <button onClick={handleLogout} className="text-sm bg-red-500 text-white px-3 py-1 rounded">Logout</button>
            </div>
          ) : (
            <Link to="/login" className="text-xl hover:text-blue-500">
              <FiUser />
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-2xl text-black"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) =>
              item.name === 'Products' ? (
                <div key="products-mobile" className="flex flex-col">
                  <button
                    onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                    className="flex items-center justify-between font-medium text-black"
                  >
                    Products <FiChevronDown />
                  </button>
                  {productsDropdownOpen && (
                    <div className="pl-4 mt-2 flex flex-col gap-2">
                      {productCategories.map((cat) => (
                        <Link
                          key={cat.name}
                          to={cat.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm text-gray-800 hover:text-blue-500"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? 'bg-blue-100 text-black px-2 py-1 rounded-md font-medium'
                      : 'text-black hover:text-blue-500 font-medium'
                  }
                >
                  {item.name}
                </NavLink>
              )
            )}
            <div className="flex gap-2 mt-3 items-center border border-blue-400 rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-1 w-full outline-none text-sm"
              />
              <button className="px-2 text-blue-500">
                <FiSearch />
              </button>
            </div>
            <div className="flex gap-4 mt-3 text-xl">
              <Link to="/cart" className="hover:text-blue-500">
                <FiShoppingBag />
              </Link>
              <Link to="/profile" className="hover:text-blue-500">
                <FiUser />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
