import "../components/components.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Header";

function RegisterView() {
  const navigate = useNavigate();
  const [pass1, setPass1] = useState("");
  const [pass2, setPass2] = useState("");
  function handleSignIn(event) {
    event.preventDefault();
    if (pass1 === pass2) {
      navigate("/Login");
    } else {
      alert("Passwords do not match!");
    }
  }

  return (
    <>
      <Nav></Nav>
      <div className="signin">
        <h1 className="signintext">Endless movies, TV shows, and more</h1>
        <h2 className="signintext">
          Starting at $5.99. Cancel whenever you want.
        </h2>
        <p className="signintext">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
            ></input>
            <input type="text" name="lastName" placeholder="First Name"></input>
            <input type="text" name="username" placeholder="Username"></input>
            <input
              type="text"
              name="email"
              placeholder="Email or Username"
            ></input>
            <input
              type="text"
              name="pass1"
              placeholder="Password"
              value={pass1}
              onChange={(e) => setPass1(e.target.value)}
            ></input>
            <input
              type="text"
              name="pass2"
              placeholder="Confirm Password"
              value={pass2}
              onChange={(e) => setPass2(e.target.value)}
            ></input>
            <button
              type="submit"
              name="submit"
              className="submit"
              onClick={(event) => handleSignIn(event)}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterView;
