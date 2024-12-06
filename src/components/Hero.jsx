import {useContext} from 'react';
import { AppContext } from '../contexts/AppContext';

function Hero() {

    const { username } = useContext(AppContext);

    return (
      <>
        <h1 className="signintext">Welcome back, {username ? username : "Guest"}!</h1>
        <div className="hero">
          <h1 className="signintext">Endless movies, TV shows, and more</h1>
          <h2 className="signintext">Starting at $5.99. Cancel whenever you want.</h2>
          <p className="signintext">Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
  
        <div className="offer">
          <h1>LIMITED OFFER</h1>
          <p>Sign up and get 110% off your first month</p>
          <button>Learn more</button>
        </div>
      </>
    );
  }
  
  export default Hero;
  