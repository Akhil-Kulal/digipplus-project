import React from "react";
import "../assets/MyJob.css";

const MyOfferletter = () => {
  return (
    <div className="wrapper">
      <section className="columns">
        <div className="column">
          <div className="o-head">
            <h3>OFFERLETTERS</h3>
            <button class="button button-effect">Solution Writing</button>
          </div>
          <div className="o-head">
            <h3>FOR JOB OFFERLETTERS</h3>
            <button class="button2 button2-effect">SCREENING TASKS</button>
          </div>
          <div className="o-head">
            <h3>OFFERLETTERS STATUS</h3>
            <button class="button button-effect">OFFERLETTERS STATUS</button>
          </div>
        </div>
        <div className="column">
          <div className="shadow">
            <h3>K10 Maths Text Book Solution</h3>
            <p>Intern digipplus</p>
          </div>
        </div>
        <div className="column">
          <div className="side-section">
            <h3>Announcement</h3>
            <p>
              We are working on adding Project and Internship details. So just
              fill up the profile only.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyOfferletter;
