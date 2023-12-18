// PaymentProcess.js
import React, { useState } from 'react';
import './PaymentProcess.css'; // Import the CSS file

const PaymentProcess = () => {
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [processing, setProcessing] = useState(false);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
  };

  const handleDeliveryDateChange = (e) => {
    setDeliveryDate(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const validateCardDetails = () => {
    if (!cardNumber || !expiryDate || !cvv) {
      setError('Please fill in all card details.');
      return false;
    }

    // Implement more thorough validation as needed (e.g., Luhn algorithm for card number)
    setError('');

    return true;
  };

  const validateDeliveryDetails = () => {
    if (!deliveryDate || !city || !address || !phone) {
      setError('Please fill in all delivery details.');
      return false;
    }

    setError('');

    return true;
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    // Validate payment details
    if (!validateCardDetails() || !validateDeliveryDetails()) {
      return;
    }

    // Simulate payment processing
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      alert('Payment successful!');
      // Redirect or perform any necessary actions after successful payment
    }, 2000);
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">Payment Process Page</h2>
      <form className="payment-form" onSubmit={handlePaymentSubmit}>
        <div className="payment-method">
          <h3>Select Payment Method:</h3>
          <div className="payment-radio">
            <input
              type="radio"
              id="credit-card"
              value="credit-card"
              checked={paymentMethod === 'credit-card'}
              onChange={() => handlePaymentMethodChange('credit-card')}
            />
            <label htmlFor="credit-card">Credit Card</label>
          </div>
          {/* Add more payment methods as needed */}
        </div>

        {paymentMethod === 'credit-card' && (
          <div className="card-details">
            <h3>Enter Card Details:</h3>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number:</label>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={handleCardNumberChange}
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date:</label>
              <input
                type="text"
                id="expiryDate"
                value={expiryDate}
                onChange={handleExpiryDateChange}
                placeholder="MM/YY"
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input
                type="text"
                id="cvv"
                value={cvv}
                onChange={handleCvvChange}
                placeholder="123"
              />
            </div>
          </div>
        )}

        <div className="delivery-details">
          <h3>Delivery Details:</h3>
          <div className="form-group">
          </div>
          <div className="form-group">
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={handleCityChange}
              placeholder="Enter your city"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={handleAddressChange}
              placeholder="Enter your address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="payment-button" disabled={processing}>
          {processing ? 'Processing...' : 'Submit Payment'}
        </button>
      </form>
    </div>
  );
};

export default PaymentProcess;
