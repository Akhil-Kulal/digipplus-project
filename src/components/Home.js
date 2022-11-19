import React from "react";
import "../assets/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="digilogo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQHATcOUS_OgS7uVj4GazjOVjCdAc46EyK7A&usqp=CAU"
          alt="digipplus logo"
        ></img>
      </div>
      <div className="greet">
        <h2>Welcome to Digipplus</h2>
      </div>
      <div className="announ">
        <h5>Announcements</h5>
      </div>
      <div className="desc-div">
        <p className="desc">
          We are working on project and internship details. So just fill up
          profile only
        </p>
      </div>
      <div className="o-head">
        <h3>Work Action</h3>
        <button class="button button-effect">View Intern Data</button>
      </div>
      <div className="o-head">
        <h3>Internships</h3>
        <textarea class="button button-effect">Solution Writing</textarea>
      </div>
    </div>
  );
};

export default Home;
