import React from "react";
import { Link } from "react-router-dom";

function BackToSetup() {
  return (
    <Link to="/">
      <button type="button" className="setup-btn"><b>Setup</b></button>
    </Link>
  );
}

export default BackToSetup;
