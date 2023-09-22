"use client";
import React, { useState } from "react";
import handler from "@/pages/api/email";

function Form() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/pages/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage('Failed to send OTP');
    }
  };

  return (
    <div>
      <h1>Email OTP Validation</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <button type="submit">Send OTP</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Form;
