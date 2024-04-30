import axios from 'axios';

const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;
const MAX_RESULTS = 9;
const REQUEST_DELAY = 1000; // 1000ms = 1 second

const fetchBooks = async (query) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?${query}&maxResults=${MAX_RESULTS}&key=${API_KEY}`
    );
    return response.data.items || [];
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};

const fetchBookDetails = async (bookId) => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${bookId}?key=${API_KEY}`
    );
    return response.data || null;
  } catch (error) {
    console.error('Error fetching book details:', error);
    return null;
  }
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export { fetchBooks, fetchBookDetails, REQUEST_DELAY };
