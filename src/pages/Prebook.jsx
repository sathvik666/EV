import React from 'react'
import './prebook.css'

const Prebook = () => {
  return (
    <div className="bg">
    
      <div className='paymentbox'>
      <h4>PREBOOK NOW</h4>
      <form action="/submit-form" method="POST">
        <div className="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>
        </div>
        <div className="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>
        </div>
        <div className="form-group">
            <label for="phone">Phone Number:</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required/>
        </div>
        <div className="form-group">
            <label for="address">Address:</label>
            <input id="address" name="address" rows="3" required/>
        </div>
        
        <div className="form-group">
            <label for="city">City:</label>
            <input type="text" id="city" name="city" required/>
        </div>
        <div className="form-group">
            <label for="state">State:</label>
            <input type="text" id="state" name="state" required/>
        </div>
        <div className="form-group">
            <label for="model">Model
            <select className="form-select form-select-sm" aria-label="Small select example">
  <option selected>model</option>
  <option value="1">SE03 Lite</option>
  <option value="2">SE03</option>
  <option value="3">SE03 Max</option>
</select>
</label>
        </div>
        <div className="form-group">
            <label for="colour">Colour   </label>     
            </div>
            
   <div className="circle blue"></div>
 <div className="circle black"></div>
  <div className="circle red"></div>

  <form className="payment-form">
        <h2>Card Payment</h2>
        <div className="form-group">
            <label for="cardholder-name">Cardholder Name</label>
            <input type="text" id="cardholder-name" name="cardholder-name" required/>
        </div>
        <div className="form-group">
            <label for="card-number">Card Number</label>
            <input type="text" id="card-number" name="card-number" required/>
        </div>
        <div className="form-group">
            <label for="expiry-date">Expiration Date</label>
            <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required/>
        </div>
        <div className="form-group">
            <label for="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" required/>
        </div>
        <button type="submit" className="submit-btn">Pay Now</button>
    </form>      
        
    </form>
    </div>
    </div>
    
    
  )
}

export default Prebook
