import React from "react";
import './userprofile.css';
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import LayoutDrawer from "containers/LayoutDrawer";

function App() {
  const {userId} = useParams();
  const [user, setUser] = useState({});
  const token = useSelector((state)=>state.token);
  
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

  return (
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
}

export default App;