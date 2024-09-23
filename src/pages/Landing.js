import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <center>
        <h2> ToDo List</h2>
        <p>
          Already have an account? <Link to="/Login ">login here</Link>
        </p>
        <p>
          Don't have an account? <Link to="/Register ">Register here</Link>
        </p>
      </center>
    </div>
  );
}

export default Landing;
