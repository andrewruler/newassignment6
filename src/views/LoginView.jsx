import "../components/components.css";
import { useState, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Header";

function LoginView() {
  const navigate = useNavigate();
  const { updateUsername } = useContext(AppContext);  
  const [password, setPass1] = useState("");
  const [newUsername, setNewUsername] = useState("");

  function handleLogIn(event) {
    event.preventDefault();

    if (password === "password") {
      updateUsername(newUsername);
      setNewUsername(""); 
      navigate("/Home");  
    } else {
      alert("Password is incorrect!");  
    }
  }

  const handleChange = (e) => {
    setNewUsername(e.target.value);
  };

  return (
    <>
      <Nav />
      <div className="signin">
        <h1 className="signintext">Welcome back! Login!</h1>
        <form onSubmit={handleLogIn}>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email or Username"
              value={newUsername}
              onChange={handleChange}
            />
            <input
              type="password"
              name="pass1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPass1(e.target.value)}
            />
            <button
              type="submit"
              name="submit"
              className="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginView;
