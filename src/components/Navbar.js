import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Navbar() {
  function alert1() {
    alert(
      "Sorry! This function is not available right now as this is just a home page clone"
    );
  }

  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    x.style.display = "none";
    var x = document.getElementById("myTopnav2");
    x.style.display = "block";
    document.querySelector(".search2").style.display = "flex";
    document.querySelector(".wrap2").style.float = "none";
    document.querySelector(".wrap2").style.width = "100%";
    document.querySelector(".wrap2").style.padding = "1rem 3rem 2rem 3rem";
    document.querySelector(".searchTerm2").style.width = "60%";
  };
  const myFunction2 = () => {
    var x = document.getElementById("myTopnav");
    x.style.display = "block";
    var x = document.getElementById("myTopnav2");
    x.style.display = "none";
    console.log("else");
    document.querySelector(".search2").style.display = "none";
    document.querySelector(".wrap2").style.float = "right";
    document.querySelector(".wrap2").style.width = "10%";
    document.querySelector(".wrap2").style.padding = "0rem 5rem 0rem 5rem";
    document.querySelector(".searchTerm2").style.width = "50%";
  };

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 250 ||
      document.documentElement.scrollTop > 250
    ) {
      document.getElementById("myTopnav").style.backgroundColor = "white";
      document.getElementById("myTopnav").style.boxShadow =
        "0.5px 0.5px 10px black";
      document.getElementById("myTopnav").className += " top2";
    } else {
      document.getElementById("myTopnav").style.backgroundColor =
        "rgba(0,0,0,0)";
      document.getElementById("myTopnav").style.boxShadow =
        "0px 0px 0px rgba(0, 0, 0, 0)";
      document.getElementById("myTopnav").className = "topnav";
    }
  };

  return (
    <>
      <div className="Navbar">
        <div className="topnav" id="myTopnav">
          <a className="yo0 yoo " id="logotext">
            <Link
              style={{ padding: "0", pointer: "cursor", fontSize: "1.5rem" }}
              to="/"
            >
              <i className="fas fa-dog nigg"></i>Puppy Care
            </Link>
          </a>
          <a className="yo1 yoo ">
            <Link style={{ padding: "0" }} to="/">
              Home
            </Link>
          </a>
          <a className="yo2 yoo ">
            <Link style={{ padding: "0" }} to="/about">
              About
            </Link>
          </a>
          <a className="yo3 yoo ">
            <Link style={{ padding: "0" }} to="/services">
              Services
            </Link>
          </a>
          <a className="yo4 yoo ">
            <Link style={{ padding: "0" }}>Pages</Link>
          </a>
          <a className="yo5 yoo ">
            <Link style={{ padding: "0" }} to="/contact">
              Contact
            </Link>
          </a>
          <a className="y06 yoo wrap " style={{ float: "right" }}>
            <div className="search">
              <input
                type="text"
                className="searchTerm"
                placeholder="Enter Keyword..."
              />
              <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </a>
          <a
            href="javascript:void(0)"
            style={{ fontSize: "15px", borderRadius: "20%" }}
            id="yo7"
            className="yo icon"
            onClick={myFunction}
          >
            &#9776;
          </a>
        </div>
        <div className="responsive" id="myTopnav2">
          <a className="yo0 yoo " id="logotext">
            <Link
              style={{
                float: "none",
                pointer: "cursor",
                fontSize: "1.5rem",
                width: "100%",
              }}
              to="/"
            >
              <i className="fas fa-dog nigg"></i>Puppy Care
            </Link>
          </a>
          <a className="yo1 yoo ">
            <Link style={{ padding: "0" }} to="/">
              Home
            </Link>
          </a>
          <a className="yo2 yoo ">
            <Link style={{ padding: "0" }} to="/about">
              About
            </Link>
          </a>
          <a className="yo3 yoo ">
            <Link style={{ padding: "0" }} to="/services">
              Services
            </Link>
          </a>
          <a className="yo4 yoo ">
            <Link style={{ padding: "0" }}>Pages</Link>
          </a>
          <a className="yo5 yoo ">
            <Link style={{ padding: "0" }} to="/contact">
              Contact
            </Link>
          </a>
          <a
            className="y06 yoo wrap2 "
            style={{ float: "none", padding: "0rem 15% 1rem 15%" }}
          >
            <div className="search2">
              <input
                type="text"
                className="searchTerm2"
                placeholder="Enter Keyword..."
              />
              <button type="submit" className="searchButton2">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </a>
          <a
            href="javascript:void(0)"
            style={{ fontSize: "15px", borderRadius: "20%" }}
            id="yo7"
            className="yo icon"
            onClick={myFunction2}
          >
            &#x2715;
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
