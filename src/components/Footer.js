import React from "react";
import wave2 from '../assets/images/3.png';

function Footer(){
    function alert1(){
        // console.log("yo");
        alert("Sorry! This function is not available right now as this is just a home page clone")
    }
    return(
        <>
        <footer className="footer" style={{position:"relative"}}>
        <div className="">
            <img src={wave2} style={{position:"absolute", top:"0", left:"0", width:"100%"}} alt=""/>
        </div>
        <div className="container-footer" style={{marginTop:"10%"}}>
            <div className="row">
                <div className="footer-col">
                    <h4>About</h4>
                    <ul>
                        <li style={{color:"#bbbbbb", fontWeight:"lighter"}}>Nam libero tempore, cum soluta nobis est
                            eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.</li>
                    </ul>
                    <div className="social-links">
                        <a href="#" onClick={alert1}><i className="fab fa-facebook-f"></i></a>
                        <a href="#" onClick={alert1}><i className="fab fa-twitter"></i></a>
                        <a href="#" onClick={alert1}><i className="fab fa-instagram"></i></a>
                        <a href="#" onClick={alert1}><i className="fab fa-google-plus"></i></a>
                        <a href="#" onClick={alert1}><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" onClick={alert1}><i className="fab fa-github"></i></a>
                    </div>
                </div>
                <div className="footer-col fcol-2">
                    <h4>Quick Link</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Clients</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Blog Posts</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-col fcol-3">
                    <h4>Contact Info</h4>
                    <ul>
                        <li><a href="#">10001, 5th Avenue, #32841 block, USA</a></li>
                        <li><a href="#">+1223 456 790</a></li>
                        <li><a href="#">info@example.com</a></li>
                        <li><a href="#">www.example.com</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Newsletter</h4>
                    <ul>
                        <div className="search" style={{width:"70%"}}>
                            <input type="text" className="searchTerm" style={{padding:"0.5rem 0.8rem"}}
                                placeholder="Enter Keyword..."/>
                            <button type="submit" style={{height:"2.59rem", width: "3.5rem"}} className="searchButton" onClick={alert1}>
                                <span className="fa fa-paper-plane" style={{fontSize:"larger"}} aria-hidden="true"></span>
                            </button>
                        </div>
                        <li style={{color:"#bbbbbb", fontWeight:"lighter", paddingTop:"10px"}}>Subscribe to our mailing list
                            and get updates to your email inbox.</li>
                    </ul>
                </div>
            </div>
        </div>
        <ul style={{marginBottom:"0"}}>
            <li
                style={{color:"#bbbbbb", fontWeight:"lighter", fontSize:"smaller", paddingTop:"10px", paddingBottom:"10px", textAlign:"center", marginBottom: "0"}}>
                © 2021 Puppy Care. All rights reserved. Design by W3Layouts</li>
        </ul>
        </footer>
        </>
    )
}

export default Footer;