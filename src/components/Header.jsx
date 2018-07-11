import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <div className='container'>
        <div className='jumbotron' style={HeaderStyles}>
          <h1>Justins Tap Room!</h1>
          <Link to="/">Home</Link> | <Link to="/Admin">Admin</Link>
        </div>
      </div>
    </div>
  );
}
var HeaderStyles = {
  fontFamily: "Fantasy",
  textAlign: "center",
  padding: "20px",
  margin: "20px",
  color: "#FF0700",
  width: "300px",
  backgroundColor: "transparent"
};
export default Header;
