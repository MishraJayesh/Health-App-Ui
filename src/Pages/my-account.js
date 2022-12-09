import React from "react";
import email from './assets/email.png';
import jay from './assets/jay.jpg';
import './styling/my-account.css';

const MyAccount = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">My Profile</h5>
          <p className="card-text">
            <img src={jay} alt="profile-pic" />
            <br></br>
            <br></br>
            <i><b>JAYESH MISHRA</b></i>
          </p>
          <div className="contact-grid">
            <a href="https://www.linkedin.com/in/jayesh-mishra-27771b165/">
              <img src="https://p.kindpng.com/picc/s/32-326233_linkedin-thompson-electric-company-linkedin-logo-bw-png.png" alt="linkedin" />
            </a>
            <a href="https://github.com/MishraJayesh">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" />
            </a>
            <a href="mailto:jkl2050jkl@gmail.com">
              <img src={email} alt="email" />
            </a>
            <a href="https://www.facebook.com/jkl2050jkl">
              <img src="https://www.citypng.com/public/uploads/preview/-11595348475afojr7xq7i.png" alt="facebook" />
            </a>
            <a href="https://www.instagram.com/jayeshmishra562/?hl=en">
              <img src="https://img.icons8.com/material-rounded/384/instagram-new.png" alt="instagram" />
            </a>
          </div>
        </div>
        <div className="card-footer"></div>
      </div>
    </div>
  )
};

export default MyAccount;
