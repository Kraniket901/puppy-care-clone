import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  function alert1(){
    alert("Sorry! This function is not available right now as this is just a home page clone")
}  

  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      console.log("ham");
      x.className += " responsive";
      x.className += " top";
      document.querySelector(".search").style.display = "flex";
      document.querySelector(".wrap").style.float = "none";
      document.querySelector(".wrap").style.width = "100%";
      document.querySelector(".wrap").style.padding = "1rem 3rem 2rem 3rem";
      document.querySelector(".searchTerm").style.width = "60%";

    } else {
      x.className = "topnav";
      document.querySelector(".search").style.display = "none";
      document.querySelector(".wrap").style.float = "right";
      document.querySelector(".wrap").style.width = "10%";
      document.querySelector(".wrap").style.padding = "0rem 5rem 0rem 5rem";
      document.querySelector(".searchTerm").style.width = "50%";
    }
  }


  window.onscroll = function () {
    scrollFunction();
  };
  
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 250 ||
      document.documentElement.scrollTop > 250
    ) {
      document.getElementById("myTopnav").style.backgroundColor = "white";
      document.querySelectorAll(".topnav .yoo").style.color = "green";
      // document.getElementById("myTopnav").setAttribute(`id`, `id1`);
      document.getElementById("myTopnav").style.boxShadow =
        "0.5px 0.5px 10px black";
        document.getElementById("myTopnav").className = "topnav";
    } else {
      document.getElementById("myTopnav").style.backgroundColor = "rgba(0,0,0,0)";
      document.getElementById("myTopnav").style.animation = "0.5s ease-out 0s 1 slideFrom21";
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
                <a className="yo0 yoo " id="logotext"><Link style={{padding:"0", pointer:"cursor", fontSize:"1.5rem"}} to="/"><i className="fas fa-dog nigg"></i>Puppy Care</Link></a>
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