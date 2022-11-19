import React from "react";
import "../assets/MyPayment.css";

const MyPayment = () => {
  return (
    <div className="wrapper">
      <section className="columns">
        <div className="column">
          <div className="o-head">
            <h3>PAYMENT NAVIGATION</h3>
            <button class="button button-effect">INVOICES</button>
            <br />
            <button class="button2 button2-effect">MY BANK DETAILS</button>
          </div>
        </div>
        <div className="column column2">
          <div>
            <p>Payment Date: Oct 25, 2022, 11:07 a.m Amount Paid: Rs 3150</p>
            <p>Payment Made For Project</p>
            <p>K10 Maths Test Book Solution</p>
            <p>K12 Maths Test Book Solution</p>
          </div>
        </div>
        <div className="column">
          <div>
            <p>
              Lifetime Earning
              <br /> Rs 3150
            </p>
            <p>
              This Month Earning
              <br /> Rs 0
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyPayment;
