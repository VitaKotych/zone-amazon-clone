import React, { useEffect, useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router';

const Right = ({ iteam }) => {
    const [val, setVal] = useState(false);

    const history = useNavigate("");

    // Use state to keep track of subtotal
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        totalAmount();
    }, [iteam]);

    const totalAmount = () => {
        // Calculate the total cost of all items
        let price = 0;
        iteam.forEach((item) => {
            price += item.price.cost * item.quantity;
        });

        // Update the subtotal state
        setSubtotal(price);
    };

    const proceesby = () => {
        alert("Your Order is Confirmed");
        history.push("/");
    }

    return (
        <div className="right_buy">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" alt="rightimg" />
            <div className="cost_right">
                <p>Your order is eligible for FREE Delivery. <br />
                    <span style={{ color: "#565959" }}> Select this option at checkout. Details</span></p>
                <h3>Subtotal ({iteam.reduce((acc, item) => acc + item.quantity, 0)} items):
                    <strong style={{ fontWeight: "700", color: "#111" }}> {subtotal}.00</strong>
                </h3>
                <button className="rightbuy_btn" onClick={proceesby} >Proceed to Buy</button>
                <div className="emi" onClick={() => setVal(!val)}>
                    Emi available
                    {!val ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                </div>
                <span className={val ? "show" : "hide"}> Your order qualifies for EMI with valid credit cards (not available on the purchase of Gold,
                    Jewelry, Gift cards, and Amazon pay balance top-up). Learn more</span>
            </div>
        </div>
    )
}

export default Right;
