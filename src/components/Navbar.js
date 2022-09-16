import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  function alert1(){
    // console.log("yo");
    alert("Sorry! This function is not available right now as this is just a home page clone")
}  

  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
      document.querySelector(".topmargin").style.marginTop = "24rem";
      document.getElementById("myTopnav").className += " top";

    } else {
      x.className = "topnav";
      document.querySelector(".topmargin").style.marginTop = "0";
      document.getElementById("myTopnav").className = "topnav";
    }
  }


  window.onscroll = function () {
    scrollFunction();
  };
  
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 400 ||
      document.documentElement.scrollTop > 400
    ) {
      document.getElementById("myTopnav").style.backgroundColor = "white";
      document.getElementById("myTopnav").style.boxShadow =
        "0.5px 0.5px 10px black";
        document.getElementById("myTopnav").className += " top";
    } else {
      document.getElementById("myTopnav").style.backgroundColor = "rgba(0,0,0,0)";
      document.getElementById("myTopnav").style.boxShadow =
        "0px 0px 0px rgba(0, 0, 0, 0)";
        document.getElementById("myTopnav").className = "topnav";
    }
  }

  return (
    <>
        <div className="topmargin"></div>
        <div className="Navbar">
            <div className="topnav" id="myTopnav">
                <a className="yo0 yoo " ><Link style={{padding:"0", pointer:"cursor"}} to="/"><i className="fas fa-dog nigg"></i><b>Puppy</b> Care</Link></a>
                <a className="yo1 yoo " ><Link style={{padding:"0"}} to="/">Home</Link></a>
                <a className="yo2 yoo " ><Link style={{padding:"0"}} to="/about">About</Link></a>
                <a className="yo3 yoo " ><Link style={{padding:"0"}} to="/services">Services</Link></a>
                <a className="yo4 yoo " ><Link style={{padding:"0"}}>Pages</Link></a>
                <a className="yo5 yoo " ><Link style={{padding:"0"}} to="/contact">Contact</Link></a>
                <a className="y06 yoo wrap " style={{float:"right"}}>
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Enter Keyword..."/>
                        <button type="submit" className="searchButton"><i className="fa fa-search"></i></button>
                    </div>
                </a>
                <a href='javascript:void(0)' style={{fontSize:"15px", borderRadius:"20%"}} id="yo7" className="yo icon" onClick={myFunction}>&#9776;</a>
            </div>
        </div>
    </>
  );
}

export default Navbar;