import "./Ticket.css";

import React from "react";

const Ticket = () => {
  return (
    <div className="ticketContainer" id="ticket">
      <h2>GET YOUR TICKET</h2>
      <div className="ticketGroup container">
        <div className="ticketItem">
          <h3 className="ticketMember">FIABCI Members</h3>
          <h4 className="ticketTagEarly">Early Bird</h4>
          <h4 className="ticketPriceEarly">€1500</h4>
          <h4 className="ticketTagOriginal">Original</h4>
          <h4 className="ticketPriceOriginal">€1700</h4>
          <a href="#" className="ticketButton">
            Get Ticket
          </a>
        </div>
        <div className="ticketItem">
          <h3 className="ticketMember">Non-FIABCI Members</h3>
          <h4 className="ticketTagEarly">Early Bird</h4>
          <h4 className="ticketPriceEarly">€2000</h4>
          <h4 className="ticketTagOriginal">Original</h4>
          <h4 className="ticketPriceOriginal">€2300</h4>
          <a href="#" className="ticketButton">
            Get Ticket
          </a>
        </div>
        <div className="ticketItem">
          <h3 className="ticketMember">
            FIABCI Young Professionals / Students
          </h3>
          {/* <h4 className="ticketTagEarly">Early Bird</h4>
          <h4 className="ticketPriceEarly">€800 / €550</h4> */}
          <h4 className="ticketTagOriginal">Original</h4>
          <h4 className="ticketPriceOriginal">€800 / €550</h4>
          <a href="#" className="ticketButton">
            Get Ticket
          </a>
        </div>
        <div className="ticketItem">
          <h3 className="ticketMember">Accompanying Persons</h3>
          {/* <h4 className="ticketTagEarly">Early Bird</h4>
          <h4 className="ticketPriceEarly">€1500</h4> */}
          <h4 className="ticketTagOriginal">Original</h4>
          <h4 className="ticketPriceOriginal">€1000</h4>
          <a href="#" className="ticketButton">
            Get Ticket
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
