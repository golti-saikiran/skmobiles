import React from "react";

const Signin = () => {
  return (
    <div className="signin-container">
      <div className="signin-title">Sign in to SK Mobiles</div>
      <div className="signin-options">
        <div className="signin-form">
          <input />
          <input />
          <button>Sign In</button>
        </div>
        <div className="signin-form">
          <button>Continue with Facebook</button>
          <button>Continue with Google</button>
          <button>Continue with Github</button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
