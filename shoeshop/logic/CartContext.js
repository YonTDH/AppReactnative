import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1, color, size) => {
  setCartItems((prevItems) => {
    const existingItem = prevItems.find(
      (item) => item.id === product.id && item.color === color && item.size === size
    );
    
    if (existingItem) {
      // Nếu sản phẩm với màu và size đã tồn tại, chỉ cần cập nhật số lượng
      return prevItems.map((item) =>
        item.id === product.id && item.color === color && item.size === size
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      // Thêm sản phẩm mới với color và size
      return [...prevItems, { ...product, quantity, color, size }];
    }
  });
};


const removeFromCart = (id, color, size, removeAll = false) => {
  setCartItems((prevItems) =>
    prevItems
      .map((item) =>
        item.id === id && item.color === color && item.size === size
          ? { ...item, quantity: removeAll ? 0 : item.quantity - 1 } // Giảm số lượng hoặc xóa nếu removeAll là true
          : item
      )
      .filter((item) => item.quantity > 0) // Loại bỏ sản phẩm có quantity <= 0
  );
};


  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
