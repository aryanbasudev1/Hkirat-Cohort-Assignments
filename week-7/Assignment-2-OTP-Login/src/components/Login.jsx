import React, { useEffect, useRef, useState } from "react";
import "./Login.css";
function Login() {
  const [otp, setOtp] = useState(["","","","",""])
  const refs = useRef([])

  useEffect(() => {
    refs.current[0].focus()
  }, []);

  function handleChange(e ,index) {
    const newOtp = [...otp]
    console.log(newOtp)
    newOtp[index] = e.target.value;
    setOtp(newOtp);

    if (e.target.value && index < refs.current.length - 1) {
      refs.current[index + 1].focus();
    }
  }

  function handleKeyDown(e, index) {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      refs.current[index - 1].focus();
    }
  }

  return (
    <div>
      <h1>OTP Verification</h1>
      <p>Enter your 4 digit OTP</p>
      {otp.map((item, index) => {
        console.log(index)
        return (
          <input
            key={index}
            type="text"
            maxLength={1}
            ref={(el) => (refs.current[index] = el)}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        );
      })}
      <div>
        <button onClick={() => console.log("OTP Submitted:", otp.join(""))}>Submit</button>
      </div>
    </div>
  );
}

export default Login;
