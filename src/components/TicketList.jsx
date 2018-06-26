import React from "react";
import Ticket from "./Ticket";

function TicketList(){
  var myStyledComponentStyles = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px'
  }
  return (
    <div style={myStyledComponentStyles}>
    <Ticket
      location="3A"
      names="Thato and Haley"
      issue="Firebase will not save record!"/>
    </div>
  );
}

export default TicketList;
