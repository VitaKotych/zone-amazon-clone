import React, { useState } from 'react';
import './PaymentProcess.css';

const PaymentProcess = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const validateCardDetails = () => {
    const errors = {};

    if (!luhnCheck(cardNumber)) {
      errors.cardNumber = 'Invalid card number.';
    }
    if (!validateExpiryDate(expiryDate)) {
      errors.expiryDate = 'Invalid expiry date.';
    }
    if (!validateCVV(cvv)) {
      errors.cvv = 'Invalid CVV.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateDeliveryDetails = () => {
    const errors = {};

    if (!city) {
      errors.city = 'Please fill in the city.';
    }
    if (!address) {
      errors.address = 'Please fill in the address.';
    }
    if (!isValidUkrainePhoneNumber(phone)) {
      errors.phone = 'Please fill in the phone number.';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  function isValidUkrainePhoneNumber(phoneNumber) {
    const ukrainePhonePattern = /^\+380\d{9}$/;
    return ukrainePhonePattern.test(phoneNumber);
  }

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    if (paymentMethod === 'credit-card') {
      if (!validateCardDetails() || !validateDeliveryDetails()) {
        return;
      }
    } else if (paymentMethod === 'payment-upon-receipt') {
      if (!validateDeliveryDetails()) {
        return;
      }
    }

    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      alert('Payment successful!');
    }, 2000);
  };

  function luhnCheck(cardNumber) {
    if (typeof cardNumber !== 'string') {
      return false;
    }

    cardNumber = cardNumber.replace(/\D/g, '');
    if (!/^\d{13,19}$/.test(cardNumber)) {
      return false;
    }

    let sum = 0;
    let doubleUp = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let curDigit = parseInt(cardNumber.charAt(i), 10);

      if (doubleUp) {
        curDigit *= 2;
        if (curDigit > 9) {
          curDigit -= 9;
        }
      }
      sum += curDigit;
      doubleUp = !doubleUp;
    }
    return sum % 10 === 0;
  }

  function validateCVV(cvv) {
    return /^\d{3,4}$/.test(cvv);
  }

  function validateExpiryDate(expiryDate) {
    const regex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!regex.test(expiryDate)) {
      return false;
    }
    const [month, year] = expiryDate.split('/');
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    return +year > currentYear || (+year === currentYear && +month >= currentMonth);
  }

  return (
    <div className="payment-container">
      <h2 className="payment-title">Payment Process Page</h2>
      <form className="payment-form" onSubmit={handlePaymentSubmit}>
        <div className="payment-method">
          <h3>Select Payment Method:</h3>
          <div className="payment-options">
            <div className="payment-option">
              <input
                type="radio"
                id="credit-card"
                value="credit-card"
                checked={paymentMethod === 'credit-card'}
                onChange={() => handlePaymentMethodChange('credit-card')}
              />
              <label htmlFor="credit-card" className="upper-label">Credit Card</label>
            </div>
            <div className="payment-option payment-upon-receipt-option">
              <input
                type="radio"
                id="payment-upon-receipt"
                value="payment-upon-receipt"
                checked={paymentMethod === 'payment-upon-receipt'}
                onChange={() => handlePaymentMethodChange('payment-upon-receipt')}
              />
              <label htmlFor="payment-upon-receipt" className="upper-label">Payment Upon Receipt</label>
            </div>
          </div>
        </div>

        {paymentMethod === 'credit-card' && (
          <div className="card-details">
            <h3>Enter Card Details:</h3>
            <div className="form-group">
              <label htmlFor="cardNumber" className="upper-label">Card Number:</label>
              {errors.cardNumber && <label className="error-label">{errors.cardNumber}</label>}
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={(e) => handleInputChange(e, setCardNumber)}
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate" className="upper-label">Expiry Date:</label>
              {errors.expiryDate && <label className="error-label">{errors.expiryDate}</label>}
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={(e) => handleInputChange(e, setExpiryDate)}
                placeholder="MM/YY"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv" className="upper-label">CVV:</label>
              {errors.cvv && <label className="error-label small red">{errors.cvv}</label>}
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={(e) => handleInputChange(e, setCvv)}
                placeholder="123"
              />
            </div>
          </div>
        )}

        <div className="delivery-details">
          <h3>Delivery Details:</h3>
          <div className="form-group">
            <label htmlFor="city" className="upper-label">City:</label>
            {errors.city && <label className="error-label">{errors.city}</label>}
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => handleInputChange(e, setCity)}
              placeholder="Enter your city"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address" className="upper-label">Address:</label>
            {errors.address && <label className="error-label">{errors.address}</label>}
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => handleInputChange(e, setAddress)}
              placeholder="Enter your address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone" className="upper-label">Phone:</label>
            {errors.phone && <label className="error-label">{errors.phone}</label>}
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={(e) => handleInputChange(e, setPhone)}
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <button type="submit" className="payment-button" disabled={processing}>
          {processing ? 'Processing...' : 'Submit Payment'}
        </button>
      </form>
    </div>
  );
};

export default PaymentProcess;