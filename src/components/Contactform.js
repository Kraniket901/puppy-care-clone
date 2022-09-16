import React from "react";

function Contactform() {
  function alert1(){
    // console.log("yo");
    alert("Sorry! This function is not available right now as this is just a home page clone")
}
  return (
    <>
      <div className="container4">
        <form className="contactform">
          <h2>CONTACT US</h2>
          <p type="Name:">
            <input placeholder="Write your name here.."></input>
          </p>
          <p type="Email:">
            <input placeholder="Let us know how to contact you back.."></input>
          </p>
          <p type="Message:">
            <input placeholder="What would you like to tell us.."></input>
          </p>
          <button className="btn" onClick={alert1}>Send Message</button>
        </form>
      </div>
    </>
  );
}

export default Contactform;
