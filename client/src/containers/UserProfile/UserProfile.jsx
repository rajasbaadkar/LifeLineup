import React from "react";
import './userprofile.css';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import LayoutDrawer from "containers/LayoutDrawer";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

function App() {
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const token = useSelector((state) => state.token);

  const getUser = async () => {
    const response = await fetch(`http://localhost:4000/user/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` }
    })
    const data = await response.json();
    setUser(data);
  }


  useEffect(() => {
    getUser();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  // const user = {
  //   firstName: data.firstName,
  //   lastName: "Baddy",
  //   email: "baburaoganpatrao@gmail.com",
  //   bloodType: "A+",
  //   age: 30,
  //   gender: "Male",
  //   pictureUrl: {
  //     url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg",
  //   },
  // };

  /*return (
    <>
    <LayoutDrawer/>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-8">
            <div className="user-profile">
              <h1 className="profile-heading">User Profile</h1>

              <div className="user-info">
                <div className="user-avatar">
                  <img
                    src={user?.pictureUrl?.url}
                    alt="Profile"
                    className="profile-image"
                  />
                </div>

                <div className="user-details">
                  <div className="user-info-section">
                    <h2>Personal Information</h2>
                    <p>
                      <strong>First Name:</strong> {user?.firstName}
                    </p>
                    <p>
                      <strong>Last Name:</strong> {user?.lastName}
                    </p>
                    <p>
                      <strong>Age:</strong> {user?.age}
                    </p>
                    <p>
                      <strong>Gender:</strong> {user?.gender}
                    </p>
                  </div>

                  <div className="user-info-section">
                    <h2>Contact Information</h2>
                    <p>
                      <strong>Email:</strong> {user?.email}
                    </p>
                  </div>

                  <div className="user-info-section">
                    <h2>Health Information</h2>
                    <p>
                      <strong>Blood Type:</strong> {user?.bloodType}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}*/

  return (
    <section style={{ backgroundColor: '#f4f5f7' }}>
      <MDBContainer className="py-12 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="10" className="mb-4 mb-lg-0">
            <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
              <MDBRow className="g-10">
                <MDBCol md="4" className="gradient-custom text-center text-white"
                  style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                  <MDBCardImage src={user?.pictureUrl?.url}
                    alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                  <MDBTypography tag="h5">{`${user?.firstName} ${user?.lastName}`}</MDBTypography>
                  <MDBCardText>{user?.isDonor ? "Donor" : "Recipient"}</MDBCardText>
                  <MDBIcon far icon="edit mb-5" />
                </MDBCol>
                <MDBCol md="8">
                  <MDBCardBody className="p-4">
                    <MDBTypography tag="h6">Information</MDBTypography>
                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Email</MDBTypography>
                        <MDBCardText className="text-muted">{user?.email}</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Blood Group</MDBTypography>
                        <MDBCardText className="text-muted">{user?.bloodType}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <hr className="mt-0 mb-4" />
                    <MDBRow className="pt-1">
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Age</MDBTypography>
                        <MDBCardText className="text-muted">{user?.age} years</MDBCardText>
                      </MDBCol>
                      <MDBCol size="6" className="mb-3">
                        <MDBTypography tag="h6">Medical History</MDBTypography>
                        <MDBCardText className="text-muted">{user?.medicalHistory}</MDBCardText>
                      </MDBCol>
                    </MDBRow>

                    <div className="d-flex justify-content-start">
                      <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                      <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                    </div>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}

export default App;