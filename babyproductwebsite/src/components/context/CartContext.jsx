// import { createContext, useContext, useState } from 'react';

// export const CartContext = createContext();

// export function useCart() {
//   return useContext(CartContext);
// }

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     const existing = cartItems.find((item) => item.id === product.id);
//     if (existing) {
//       setCartItems(
//         cartItems.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         )
//       );
//     } else {
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };

//   const updateQuantity = (productId, amount) => {
//     setCartItems((items) =>
//       items
//         .map((item) =>
//           item.id === productId ? { ...item, quantity: item.quantity + amount } : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   const subtotal = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, cartCount, subtotal }}>
//       {children}
//     </CartContext.Provider>
//   );
// }



// src/components/context/CartContext.jsx
// import React, { createContext, useContext, useReducer } from 'react';

// export const CartContext = createContext();

// const initialState = {
//   cartItems: [],
// };

// function cartReducer(state, action) {
//   switch (action.type) {
//     case 'ADD_TO_CART': {
//       const existing = state.cartItems.find(item => item.id === action.payload.id);
//       if (existing) {
//         return {
//           ...state,
//           cartItems: state.cartItems.map(item =>
//             item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
//           ),
//         };
//       } else {
//         return {
//           ...state,
//           cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
//         };
//       }
//     }
//     case 'INCREMENT_QUANTITY':
//       return {
//         ...state,
//         cartItems: state.cartItems.map(item =>
//           item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
//         ),
//       };
//     case 'DECREMENT_QUANTITY':
//       return {
//         ...state,
//         cartItems: state.cartItems
//           .map(item =>
//             item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
//           )
//           .filter(item => item.quantity > 0),
//       };
//     case 'REMOVE_FROM_CART':
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(item => item.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// }

// export function CartProvider({ children }) {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

//   const addToCart = (product) => dispatch({ type: 'ADD_TO_CART', payload: product });
//   const increment = (id) => dispatch({ type: 'INCREMENT_QUANTITY', payload: id });
//   const decrement = (id) => dispatch({ type: 'DECREMENT_QUANTITY', payload: id });
//   const remove = (id) => dispatch({ type: 'REMOVE_FROM_CART', payload: id });

//   const totalItems = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   return (
//     <CartContext.Provider value={{ cartItems: state.cartItems, addToCart, increment, decrement, remove, totalItems }}>
//       {children}
//     </CartContext.Provider>
//   );
// }

// export const useCart = () => useContext(CartContext);




import React, { createContext, useContext, useReducer } from 'react';

export const CartContext = createContext();

const initialState = {
  cartItems: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { product, quantity } = action.payload;
      const existing = state.cartItems.find(item => item.id === product.id);
      if (existing) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...product, quantity }],
        };
      }
    }
    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems
          .map(item =>
            item.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter(item => item.quantity > 0),
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product, quantity = 1) =>
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } });

  const increment = (id) => dispatch({ type: 'INCREMENT_QUANTITY', payload: id });
  const decrement = (id) => dispatch({ type: 'DECREMENT_QUANTITY', payload: id });
  const remove = (id) => dispatch({ type: 'REMOVE_FROM_CART', payload: id });

  const totalItems = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal > 1000 ? 250 : 20; // Dynamic discount logic (you can change it)
  const total = subtotal - discount;


  return (
    <CartContext.Provider
      value={{ cartItems: state.cartItems, addToCart, increment, decrement, remove, totalItems,  subtotal, discount, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
