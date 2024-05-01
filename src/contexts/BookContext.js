import React, { createContext, useState } from 'react';
import { CatagoryfetchBooks } from '../googleBookservice';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [bookDetails, setBookDetails] = useState(null);
  const [catagorylist, setCatagorylist] = useState(null);

  const handleBookClick = (book) => {
    setBookDetails(book);
  };

  const handleCategoryClick = async (catName) => {
    try {
      const data = await CatagoryfetchBooks(catName);
      setCatagorylist(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <BookContext.Provider value={{ bookDetails, catagorylist, handleBookClick, handleCategoryClick }}>
      {children}
    </BookContext.Provider>
  );
};
