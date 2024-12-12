import "./RegisterView.css";
import "../components/components.css";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Header";
import { useUserContext } from "../contexts/UserContext";

function RegisterView() {
  const navigate = useNavigate();
  const { updateUser } = useUserContext();

  function handleSignIn(event) {
    event.preventDefault();

    const fields = ["firstName", "lastName", "username", "email", "pass1", "pass2"];
    let allFieldsFilled = true;
   
    fields.forEach((field) => {
      const value = document.querySelector(`input[name="${field}"]`)?.value;
      if (!value) {
        allFieldsFilled = false;
        alert("Please fill in all fields.");
      } else if (value.trim() === "") {
        allFieldsFilled = false;
        alert("Please fill in all fields.");
      }
    });
    
    const pass1 = document.querySelector(`input[name="${"pass1"}"]`)?.value
    const pass2 = document.querySelector(`input[name="${"pass2"}"]`)?.value

    if (pass1 !== pass2) {
      allFieldsFilled = false;
      alert("Passwords do not match!");
    }

    if (allFieldsFilled) {
      navigate('../');
    } 
  }

  const genreList = [
    { name: "Action", id: 28 },
    { name: "Horror", id: 27 },
    { name: "TV", id: 10770 },
    { name: "Crime", id: 80 },
    { name: "Adventure", id: 12 },
    { name: "Family", id: 10751 },
    { name: "Music", id: 10402 },
    { name: "Thriller", id: 53 },
    { name: "Animation", id: 16 },
    { name: "Fantasy", id: 14 },
    { name: "Mystery", id: 9648 },
    { name: "War", id: 10752 },
  ];

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

            <input type="text" name="firstName" placeholder="First Name"
            onChange = {(e) => updateUser("firstName" , e.target.value)}
            ></input>

            <input type="text" name="lastName" placeholder="Last Name"
            onChange = {(e) => updateUser("lastName" , e.target.value)}>
            </input>

            <input type="text" name="username" placeholder="Username" 
            onChange = {(e) => updateUser("username" , e.target.value)}>
            </input>

            <input type="text" name="email" placeholder="Email"
            onChange = {(e) => updateUser("email" , e.target.value)}>
            </input>

            <input type="text" name="pass1" placeholder="Password"
              onChange={(e) => updateUser("pass", e.target.value)}
            ></input>

            <input type="text" name="pass2" placeholder="Confirm Password"
            ></input>
            
            <div className="genres">
            {genreList.map((genre) => (
              <div key={genre.id} className="genre-item">
                <input type="checkbox" id={genre.id} value={genre.name} onChange = {() => updateUser("genres" , genre.name)}/>
                <label htmlFor={genre.id}>{genre.name}</label>
              </div>
            ))}
          </div>

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
