import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../ProductContext';
import Header from '../components/Header';
import bannerImage from '../assets/images/banner.jpeg'
import '../assets/styles/style.css';
import Footer from '../components/Footer';
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const[books,setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading,setLoading]=useState(false)
  const navigate = useNavigate()
  const { updateSelectedProduct } = useProductContext();

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://gutendex.com/books');
        setBooks(response.data.results.slice(0, 6)); // Slice the array to get the first 10 books
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     setLoading(true)
  //     try {
  //       const response = await axios.get('https://fakestoreapi.com/products');
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }finally{
  //       setLoading(false)
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
    
  );
const handleNavigation=(product)=>{
  console.log(product)
  navigate('/details');
  updateSelectedProduct(product)
}

if(loading)
{
  return(
    <div>
      <h1>Loading.........</h1>
    </div>
  )
}
  return (
    <div>
      <Header/>

      <div className="bg-image d-flex align-items-center justify-content-center">
      <div className="text-center text-white banner-content">
        <p>Choose Your Book!</p>
        <h1>Find Books For All Ages</h1>
        <button className="custom-button">DISCOVER YOUR NEXT BOOK</button>
      </div>
      </div>
      <section className="book-section">
      <div className="container">
      <h2 className='text-center mb-4'>Discover Your Next Book</h2>
      <div className="book-list row justify-content-center">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {/* <div className="product-list col-md-4 col-lg-3 mb-4">
        {filteredProducts.map((product) => (
          <div onClick={()=>handleNavigation(product)} key={product.id} className="product">
            <img src={product.image} alt={product.title} style={{height:112,width:130}}/>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div> */}
       <div className="product-list">
       {books.map(book => (
              <div key={book.id} className="">
                <img src={book.formats['image/jpeg']} alt={book.title} className="img-fluid" />
                <h3>{book.title}</h3>
                <p>{book.authors.join(', ')}</p>
              </div>
            ))}
       </div>
       </div>
      </div>
    </section>
    
      <Footer />
    </div>
  );
};

export default ProductList;
