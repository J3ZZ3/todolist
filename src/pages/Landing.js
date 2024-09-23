import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <center>
        <h1> ToDo List</h1>
        <access>
        <p>
          Already have an account? <Link to="/Login ">login here</Link>
        </p>
        <p>
          Don't have an account? <Link to="/Register ">Register here</Link>
        </p>
        </access>
      </center>
    </div>
  );
}

export default Landing;
