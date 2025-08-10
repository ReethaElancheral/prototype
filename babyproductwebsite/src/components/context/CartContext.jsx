

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

    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product, quantity = 1) =>
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } });

   const clearCart = () => dispatch({ type: 'CLEAR_CART' });


  const increment = (id) => dispatch({ type: 'INCREMENT_QUANTITY', payload: id });
  const decrement = (id) => dispatch({ type: 'DECREMENT_QUANTITY', payload: id });
  const remove = (id) => dispatch({ type: 'REMOVE_FROM_CART', payload: id });

  const totalItems = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal > 1000 ? 250 : 20; // Dynamic discount logic (you can change it)
  const total = subtotal - discount;


  return (
    <CartContext.Provider
      value={{ cartItems: state.cartItems, addToCart, increment, decrement, remove, clearCart, totalItems,  subtotal, discount, total }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
