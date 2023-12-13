import './App.css';
import Navbaar from './components/header/Navbaar.js';
import Newnav from './components/newnavbaar/Newnav.js';
import Maincomp from "./components/home/Maincomp.js";
import Footer from './components/footer/Footer.js';
import SignIn from './components/signup_signin/SignIn.js';
import SignUp from './components/signup_signin/SignUp.js';
import Cart from "./components/cart/Cart.js";
import Buynow from './components/buynow/Buynow.js';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, [])

  return (
    <>
      {data ? (
        <>
          <Navbaar />
          <Newnav />
          <Routes>
            <Route path="/" element={<Maincomp />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/getproductsone/:id" element={<Cart />} />
            <Route path="/buynow" element={<Buynow />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <div className="circle">
          <CircularProgress />
          <h2>Loading....</h2>
        </div>
      )}
    </>
  );
}

export default App;
