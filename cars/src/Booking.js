import React, { Component } from 'react';
import './Booking.css';
import { Nav } from 'react-bootstrap';

class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      carModel: '',
      financingOption: 'cash',
      purchaseDate: '',
      address: '',
      bookingConfirmed: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle the form submission, e.g., sending data to a server.

    // Simulate a submission delay with setTimeout.
    setTimeout(() => {
      this.setState({ bookingConfirmed: true });
    }, 1000); // Simulate a 1-second delay
  };

  render() {
    const {
      name,
      email,
      phone,
      carModel,
      financingOption,
      purchaseDate,
      address,
      bookingConfirmed,
    } = this.state;

    return (
     
      <div className="car-booking-form">
        <h2 >Booking Form</h2>
        {!bookingConfirmed ? (
        
          <form onSubmit={this.handleSubmit}>
          <div className="form-group1">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group1">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group1">
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group1">
            <label>Car Model:</label>
            <input
              type="text"
              name="carModel"
              value={this.state.carModel}
              onChange={this.handleChange}
              required
            />
          </div>

          <div className="form-group1">
            <label>Purchase Date:</label>
            <input
              type="date"
              name="purchaseDate"
              value={this.state.purchaseDate}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group1">
            <label>Customer Address:</label>
            <textarea
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group1">
            <label>Financing Option:</label>
            <select
              name="financingOption"
              value={this.state.financingOption}
              onChange={this.handleChange}
            >
              <option value="cash">Cash</option>
              <option value="loan">Loan</option>
              <option value="lease">Lease</option>
            </select>
          </div>
            <div className="form-group1">
              <button type="submit">Purchase Car</button>
            </div>
          </form>
        ) : (
          <div className="confirmation-message">
            <p className='para'>Congratulations Booking Confirm 🎉</p>
          </div>
        )}
      </div>
    );
  }
}

export default Booking;
