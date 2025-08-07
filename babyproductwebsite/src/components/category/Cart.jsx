
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function Cart() {
  const { cartItems, increment, decrement, remove } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal > 200 ? 20 : 0;
  const shipping = subtotal > 300 ? 0 : 25;
  const total = subtotal - discount + shipping;

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      {/* ...breadcrumb and title stay same... */}

      {/* Breadcrumb */}
      <nav className="text-gray-500 mb-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>{" "}
        &gt; <span className="text-black">Add to Cart</span>
      </nav>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="overflow-x-auto mb-8">
         <table className="w-full table-auto border-collapse">
<thead>
  <tr className="flex border border-[#00B4D8] rounded-lg bg-white px-4 py-6 mb-4">
    <th className="w-2/5 text-left">Product</th>        {/* 40% */}
    <th className="w-1/5 text-left">Price</th>          {/* 20% */}
    <th className="w-1/5 text-left">Quantity</th>       {/* 20% */}
    <th className="w-1/5 text-left">Subtotal</th>       {/* 20% */}
  </tr>
</thead>
<tbody>
  {cartItems.map((item) => (
    <tr
      key={item.id}
      className="flex items-center border border-[#00B4D8] rounded-lg my-2 px-4 py-4"
    >
      <td className="flex items-center space-x-4 w-2/5">
        <img
          src={item.images?.[0] || "/images/default.jpg"}
          alt={item.name}
          className="w-16 h-16 object-cover rounded"
        />
        <span>{item.name}</span>
      </td>
      <td className="w-1/5">₹{item.price}</td>

      <td className="w-1/5">
        <div className="flex items-center gap-2 border border-gray-300 rounded px-2 py-1 w-fit">
          <span className="font-medium">{item.quantity}</span>
          <div className="flex flex-col">
            <button
              className="hover:bg-gray-200 rounded"
              onClick={() => increment(item.id)}
            >
              <ChevronUp size={14} />
            </button>
            <button
              className="hover:bg-gray-200 rounded"
              onClick={() =>
                item.quantity === 1 ? remove(item.id) : decrement(item.id)
              }
            >
              <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </td>

      <td className="w-1/5">₹{item.price * item.quantity}</td>
    </tr>
  ))}
</tbody>

</table>

        </div>
      )}

      {/* coupon + totals section unchanged */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Coupon Section */}
        <div className="bg-white p-6 rounded-lg">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Enter Coupon code"
              className="border p-2 rounded w-[250px] bg-[#B0E4F4]"
            />
            <button className="bg-[#B0E4F4] text-black text-lg px-4 py-4 rounded-lg hover:bg-[#00B4D8] ml-auto w-[180px]">
              Apply Coupon
            </button>
          </div>
        </div>

        {/* Cart Totals */}
        <div className="bg-white border border-[#00B4D8] p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Cart Totals</h3>
          <div className="space-y-2 text-black text-lg">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>₹{subtotal}</span>
            </div>
            <hr className="my-2 border-t-2 border-gray" />
            <div className="flex justify-between">
              <span>Discount:</span>
              <span>- ₹{discount}</span>
            </div>
            <hr className="my-2 border-t-2 border-gray" />
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>₹{shipping}</span>
            </div>
            <hr className="my-2 border-t-2 border-gray" />

            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>₹{total}</span>
            </div>
          </div>

<Link to="/checkout">
 <button className="mt-6 w-[250px] text-lg bg-[#00B4D8] text-black py-2 px-4 rounded-lg hover:bg-[#1c545f] mx-auto block">
            Proceed to Checkout
          </button>
</Link>
         

        </div>
      </div>
    </section>
  );
}
