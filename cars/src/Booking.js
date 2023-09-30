import React, { Component } from 'react';
import ("./Booking.css")

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      phoneNumber: '',
      carModel: '',
      financingOption: 'lease', // Default to 'lease'
      purchaseDate: '',
      address: '',
      submitted: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // You can send the form data to your server here for processing
    // For now, we'll just set 'submitted' to true.
    this.setState({ submitted: true });
  };

  render() {
    const {
      fullName,
      email,
      phoneNumber,
      carModel,
      financingOption,
      purchaseDate,
      address,
      submitted,
    } = this.state;

    return (
      <div className="booking-page">
        <h1>Car Booking</h1>
        {submitted ? (
          <div className="confirmation">
            <h2>Thank you for your booking!🎉</h2>
            <p>Here are your details:</p>
            <p>Full Name: {fullName}</p>
            <p>Email: {email}</p>
            <p>Phone Number: {phoneNumber}</p>
            <p>Car Model: {carModel}</p>
            <p>Financing Option: {financingOption}</p>
            <p>Purchase Date: {purchaseDate}</p>
            <p>Address: {address}</p>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <label>
              Full Name:
              <input
                type="text"
                name="fullName"
                value={fullName}
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              Phone Number:
              <input
                type="tel"
                name="phoneNumber"
                value={phoneNumber}
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              Car Model:
              <input
                type="text"
                name="carModel"
                value={carModel}
                onChange={this.handleChange}
                required
              />
            </label>
           
            <label>
              Purchase Date:
              <input
                type="date"
                name="purchaseDate"
                value={purchaseDate}
                onChange={this.handleChange}
                required
              />
            </label>
            <label>
              Address:
              <textarea
                name="address"
                value={address}
                onChange={this.handleChange}
                required
              />
               <label>
              Financing Option:
              <select
                name="financingOption"
                value={financingOption}
                onChange={this.handleChange}
              >
                <option value="lease">Lease</option>
                <option value="cash">Cash</option>
                <option value="loan">Loan</option>
              </select>
            </label>
            </label>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    );
  }
}

export default Booking;