import React from 'react';
import { Link } from 'react-router-dom';
import cutePuppies from '../assets/images/cutepuppies.jpg';

function Header(){
  return (
    <div>
      <h1>Tap Room</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Keg</Link>
      <img src={cutePuppies}/>

    </div>
  );
}

export default Header;
