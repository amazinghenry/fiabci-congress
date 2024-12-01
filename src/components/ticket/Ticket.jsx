import "./Ticket.css";

import React from "react";

const Ticket = () => {
  return (
    <div className="ticketContainer">
      <div className="ticketGroup">
        <h2>GET YOUR TICKET</h2>
        <div className="ticketItem">
          <div className="ticketTag">Early Bird</div>
          <h3 className="ticketPrice">€1500</h3>
          <h4 className="ticketMember">FIABCI MEMBERS</h4>
          <a href="#" className="ticketButton">
            Get Ticket
          </a>
        </div>
        <p>Early Bird Starts Dec. 1st</p>
      </div>
    </div>
  );
};

export default Ticket;
