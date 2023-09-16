import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import "./donateOrgan.css"

export default function App() {
  return (
    <section class="container">
  <header>Registration Form</header>
  <form class="form" action="#">
      <div class="input-box">
          <label>Full Name</label>
          <input required="" placeholder="Enter full name" type="text"/>
      </div>
      <div class="column">
          <div class="input-box">
            <label>Phone Number</label>
            <input required="" placeholder="Enter phone number" type="telephone"/>
          </div>
          <div class="input-box">
            <label>Birth Date</label>
            <input required="" placeholder="Enter birth date" type="date"/>
          </div>
      </div>
      <div class="gender-box">
        <label>Gender</label>
        <div class="gender-option">
          <div class="gender">
            <input checked="" name="gender" id="check-male" type="radio"/>
            <label for="check-male">Male</label>
          </div>
          <div class="gender">
            <input name="gender" id="check-female" type="radio"/>
            <label for="check-female">Female</label>
          </div>
          <div class="gender">
            <input name="gender" id="check-other" type="radio"/>
            <label for="check-other">Prefer not to say</label>
          </div>
        </div>
      </div>
      <div class="input-box address">
        <label>Address</label>
        <input required="" placeholder="Enter street address" type="text"/>
        <div class="column">
          <div class="select-box">
            <select>
              <option hidden="">Country</option>
              <option>USA</option>
              <option>UK</option>
              <option>Germany</option>
              <option>Japan</option>
            </select>
          </div>
        <input required="" placeholder="Enter your city" type="text"/>
        </div>
      </div>
      <button>Submit</button>
  </form>
</section>
  );
}