import React, { useContext, useEffect, useState } from 'react';
import './cart.css';
import { Divider } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate, useParams } from 'react-router';
import { Logincontext } from '../context/Contextprovider';

const Cart = () => {
  const { account, setAccount } = useContext(Logincontext);
  const { id } = useParams('');
  const navigate = useNavigate(); // Use useNavigate directly

  const [inddata, setIndedata] = useState('');

  const getinddata = async () => {
    try {
      const res = await fetch(`/getproductsone/${id}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      const data = await res.json();

      if (res.status !== 201) {
        alert('no data available');
      } else {
        setIndedata(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setTimeout(getinddata, 1000);
  }, [id]);

  const addtocart = async (id) => {
    try{
    console.log(id);

      const check = await fetch(`/addcart/${id}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inddata,
        }),
        credentials: 'include',
      });

      const data1 = await check.json();

      if (check.status !== 201) {
        alert('no data available');
      } else {
        setAccount(data1);
       // navigate('/buynow'); // Use navigate instead of history.push
      }
    } catch (error) {
      console.error(error);
    }
  };

    return (

        <div className="cart_section">
            {inddata && Object.keys(inddata).length &&
                <div className="cart_container">
                    <div className="left_cart">
                        <img src={inddata.detailUrl} alt="cart" />
                        <div className="cart_btn">
                            <button className="cart_btn1" onClick={() => addtocart(inddata.id)}>Add to Cart</button>
                            <button className="cart_btn2">Buy Now</button>
                        </div>

                    </div>
                    <div className="right_cart">
                        <h3>{inddata.title.shortTitle}</h3>
                        <h4>{inddata.title.longTitle}</h4>
                        <Divider />
                        <p className="mrp"> <del>{inddata.price.mrp}</del></p>
                        <p>Deal of the Day : <span style={{ color: "#B12704" }}>{inddata.price.cost}.00</span></p>
                        <p>You save : <span style={{ color: "#B12704" }}> {inddata.price.mrp - inddata.price.cost} ({inddata.price.discount}) </span></p>

                        <div className="discount_box">
                            <h5 >Discount : <span style={{ color: "#111" }}>{inddata.discount}</span> </h5>
                            <h4>FREE Delivery : <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Details</h4>
                            <p style={{ color: "#111" }}>Fastest delivery: <span style={{ color: "#111", fontWeight: "600" }}> Tomorrow 11AM</span></p>
                        </div>
                        <p className="description">About the Iteam : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>{inddata.description}</span></p>
                    </div>
                </div>
            }



            {!inddata ? <div className="circle">
                <CircularProgress />
                <h2> Loading....</h2>
            </div> : ""}
        </div>
    )
}

export default Cart
