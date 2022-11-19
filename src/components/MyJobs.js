import React from "react";
import "../assets/MyJob.css";

const MyJobs = () => {
  return (
    <div className="wrapper">
      <section className="columns">
        <div className="column">
          <div className="o-head">
            <h3>JOBS</h3>
            <button class="button button-effect">Solution Writing</button>
          </div>
          <div className="o-head">
            <h3>FOR JOB APPLICATION</h3>
            <button class="button2 button2-effect">SCREENING TASKS</button>
          </div>
          <div className="o-head">
            <h3>APPLICATION STATUS</h3>
            <button class="button button-effect">JOB APPLICATION STATUS</button>
          </div>
        </div>
        <div className="column">
          <div className="shadow">
            <h3>K10 Maths Text Book Solution</h3>
            <p>Intern digipplus</p>
          </div>
          <br />
          <br />
          <br />
          <br />
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

export default MyJobs;
