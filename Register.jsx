import React, { useState } from "react";
import axios from "axios";

function Register() {

    
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [phoneNumber, setPhoneNumber] = useState("");
        const [message, setMessage] = useState("");
      
        const handleSubmit = async (e) => {
          e.preventDefault();
      
          const student = { name, email, phoneNumber };
      
          try {
            const response = await axios.post("http://localhost:5000/api/students/register", student);
            setMessage("Student registered successfully!");
          } catch (err) {
            setMessage("Error registering student.");
          }
        
      
    }
    return (
        <div className="form-container">
        <h2>Register Student</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>{message}</p>
      </div>
    );
    
  }
  
  export default Register
  