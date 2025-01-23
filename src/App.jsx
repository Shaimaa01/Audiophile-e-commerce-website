import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeadphonesPage from "./pages/HeadphonesPage";
import SpeakersPage from "./pages/SpeakersPage";
import EarphonesPage from "./pages/EarphonesPage";
import HomePage from "./pages/HomePage";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/Header";
import { useState, useEffect } from "react";

function App() {
  const [cartItems, setCartItems] = useState();
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1)); // Prevent going below 1
  };

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    console.log(storedCart);
    try {
      // Only parse if data exists
      if (storedCart) {
        const parsedCart = JSON.parse(storedCart);
        setCartItems(parsedCart); // Set the parsed data to state
      }
    } catch (error) {
      console.error("Failed to parse cartItems from localStorage:", error);
    }
  }, []);

  // Save cart items to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const productToAdd = { ...product, quantity: count }; // Add quantity field

    setCartItems((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Update quantity if product already exists
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + productToAdd.quantity }
            : item
        );
      }
      // Add new product
      return [...prevCart, productToAdd];
    });
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  return (
    <>
      <Router>
        <Header
          cartItems={cartItems}
          clearCart={clearCart}
          setCartItems={setCartItems}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/headphones" element={<HeadphonesPage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/earphones" element={<EarphonesPage />} />
          <Route
            path="/product/:id"
            element={
              <ProductDetails
                addToCart={addToCart}
                increment={increment}
                decrement={decrement}
                count={count}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
