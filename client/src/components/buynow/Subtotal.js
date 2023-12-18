import React, { useEffect, useState } from 'react';

const Subtotal = ({ iteam }) => {
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
        totalAmount();
    }, [iteam]);

    const totalAmount = () => {
        let subtotal = 0;
        iteam.forEach((item) => {
            subtotal += item.price.cost * item.quantity;
        });
        setSubtotal(subtotal);
    };

    return (
        <div className="sub_item">
            <h3>
                Subtotal ({iteam.reduce((acc, item) => acc + item.quantity, 0)} items):
                <strong style={{ fontWeight: "700", color: "#111" }}> {subtotal}.00</strong>
            </h3>
        </div>
    );
    


};

export default Subtotal;

