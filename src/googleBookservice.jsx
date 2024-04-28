// googleBooksService.js
import axios from 'axios';

const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

const fetchBooks = async (searchTerm) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${API_KEY}`
    );
    return response.data.items;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

export default fetchBooks;
