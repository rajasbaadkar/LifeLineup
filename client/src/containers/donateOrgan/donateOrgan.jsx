import React,{useEffect} from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import "./donateOrgan.css"
import axios from 'axios';


export default function App() {
    useEffect(async()=>{
        const dataloc = navigator.geolocation.getCurrentPosition(showPosition)
    function showPosition(position){
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
    }
    /*const { data } = await axios.patch("http://localhost:4000/user/:_id", { "email": email, "password": password })
    if (data.success) {
      dispatch(setLogin({ user: data.user, token: data.token }));
      navigate("/home");
    }*/
    },[])   
  return (
    <section class="container">
  <h4>Donation Form</h4>
  <form class="form" action="#">
      <div class="input-box">
          <label>Medical History</label>
          <input required="" placeholder="Enter Medical History" type="text"/>
      </div>
      <div class="column">
          <div class="input-box">
            <label>Blood Type</label>
            <div class="select-box">
            <select>
              <option hidden="">Select Blood Type</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
              <option>O+</option>
              <option>O-</option>
            </select>
          </div>
          </div>
          <div class="input-box">
            <label>Birth Date</label>
            <input required="" placeholder="Enter birth date" type="date"/>
          </div>
      </div>
      <div class="input-box address">
        <label>Address</label>
        <input required="" placeholder="Enter street address" type="text"/>
        <div class="column">
          <div class="select-box">
            <select>
              <option hidden="">Organ</option>
              <option>Kidney</option>
              <option>Liver</option>
              <option>Lungs</option>
              <option>Heart</option>
              <option>Pancreas</option>
              <option>Eye</option>
              <option>Bone Marrow</option>
              <option>Skin</option>
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