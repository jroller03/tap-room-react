import React from 'react';
import { Link } from 'react-router-dom';
import cutePuppies from '../assets/images/cutepuppies.jpg';

function Header(){
  return (
    <div>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
      <img src={cutePuppies}/>

    </div>
  );
}

export default Header;
