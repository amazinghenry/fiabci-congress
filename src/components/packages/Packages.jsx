import React from "react";
import "./Packages.css";

const Packages = () => {
  return (
    <div className="packageContainer" id="packages">
      <h2>GET YOUR TICKET</h2>
      <div className="packageGroup container">
        <div className="packageItem">
          <h3 className="packageTitle">Full Conference Registration</h3>
          <h4 className="packagePrice">&#8358;2,400,000</h4>
          <ul className="packageListGroup">
            <li>Welcome Reception</li>
            <li>Conference programs</li>
            <li>FIABCI Meetings and General Assembly</li>
            <li>(2) Networking Lunches and Lunch Breaks</li>
            <li>Social Tours</li>
            <li>Luxury Property Reception (limited availability)</li>
            <li>World Prix D’Excellence Awards and Dinner</li>
            <li>⁠Farewell Reception and Gala Dinner</li>
          </ul>

          <a
            href="https://paystack.com/pay/FIACBIWORLDCONGRESS2025"
            className="packageButton"
          >
            Get Ticket / Exhibit
          </a>
        </div>
        <div className="packageItem">
          <h3 className="packageTitle">Attendee</h3>
          <h4 className="packagePrice">&#8358;250,000</h4>
          <ul className="packageListGroup">
            <li>Exhibition Pass</li>
            <li>Full Conference Access (2 days)</li>
            <li>Lunch (2 days)</li>
          </ul>

          <a
            href="https://paystack.com/pay/FIACBIWORLDCONGRESS2025"
            className="packageButton"
          >
            Get Ticket
          </a>
        </div>
      </div>
      <div>
        <h2 className="exhibitPackage"> EXHIBIT AT THE EVENT</h2>
        <div className="packageGroup container">
          <div className="packageItem">
            <h3 className="packageTitle">Superior</h3>
            <h4 className="packagePrice">&#8358;3,000,000</h4>
            <ul className="packageListGroup">
              <li>3 x 3 Booth</li>
              <li>
                One complimentary ticket to all events, including the World Prix
                D'Excellence Awards
              </li>
              <li>Quarter page advert on event brochure</li>
            </ul>

            <a
              href="https://paystack.com/pay/FIACBIWORLDCONGRESS2025"
              className="packageButton"
            >
              Get Superior
            </a>
          </div>
          <div className="packageItem">
            <h3 className="packageTitle">Standard</h3>
            <h4 className="packagePrice">&#8358;2,000,000</h4>
            <ul className="packageListGroup">
              <li>3 x 3 Booth</li>
              <li>
                One complimentary ticket to all events, including the World Prix
                D'Excellence Awards
              </li>
              <li>⁠Company profile on event brochure</li>
            </ul>

            <a
              href="https://paystack.com/pay/FIACBIWORLDCONGRESS2025"
              className="packageButton"
            >
              Get Standard
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
