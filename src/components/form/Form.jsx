import "./Form.css";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const formRef = useRef(null);
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbx9dzWgKF4l1kMtbZ1xEYQNaVfzQi5xHPlC--2SV49gvG6OdsN_AWYq61aC47N-sYuD/exec";
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [formClass, setFormClass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, SetLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(formRef.current),
    }).then((res) => {
      setMessage("Registration Successful!");
      setFormClass("success-message");
      navigate("/");
    });
  };

  return (
    <div className="form-container">
      <h2>Register Now</h2>
      <form
        name="submit-to-google-sheet"
        className="container"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <div className="form-group">
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            name="firstName"
            className="form-control"
            required
          />

          <input
            type="text"
            value={lastName}
            onChange={(e) => SetLastName(e.target.value)}
            placeholder="Last Name"
            name="lastName"
            className="form-control"
            required
          />

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            name="email"
            className="form-control"
            required
          />

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            title="Format: 123-456-7890"
            placeholder="Phone Number"
            name="phone"
            className="form-control"
            required
          />

          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Company Name"
            name="company"
            className="form-control"
            required
          />

          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Position in Company"
            name="position"
            className="form-control"
            required
          />

          <input
            type="submit"
            className="form-submit"
            value={loading ? "Registering..." : "Register"}
          />
          <p className={formClass}> {message} </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
