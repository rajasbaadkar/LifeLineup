import React from 'react';
import "./donateOrgan.css"
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';

const DonateOrgan = () =>{
  return (
    <form >
      <MDBInput className='mb-4' type='email' id='form1Example1' label='Email address' />
      <MDBInput className='mb-4' type='password' id='form1Example2' label='Password' />

      <MDBRow className='mb-4'>
        <MDBCol className='d-flex justify-content-center'>
          <MDBCheckbox id='form1Example3' label='Remember me' defaultChecked />
        </MDBCol>
        <MDBCol>
          <a href='#!'>Forgot password?</a>
        </MDBCol>
      </MDBRow>

      <MDBBtn type='submit' block>
        Submit
      </MDBBtn>
    </form>
  );
}

export default DonateOrgan;