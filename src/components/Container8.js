import React from 'react';

function Container8(){
    function alert1(){
        // console.log("yo");
        alert("Sorry! This function is not available right now as this is just a home page clone")
    }
    return(
        <>
        <div className="container-2">
        <div className="container-2--right">
            <div style={{padding:"0 0 0 49%"}}>
                    <i style={{color:"#f54748", fontSize:"large", transform: "rotate(35deg)", opacity:"0.4"}} className="fas fa-paw"></i>
                </div>
                <div style={{padding:"0 0 0 45%"}}>
                    <i style={{color:"#f54748", fontSize:"x-large", transform: "rotate(35deg)", opacity:"0.6"}} className="fas fa-paw"></i>
                </div>
                <div style={{padding:"0 0 0 40%"}}>
                    <i style={{color:"#f54748", fontSize:"xx-large", transform: "rotate(35deg)"}} className="fas fa-paw"></i>
                </div>
            <h1>Who we are and what we do</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <ul>
                <li><i className="fas fa-check-circle" style={{color: "#f54748"}}></i> Ut enim ad minim</li>
                <li><i className="fas fa-check-circle" style={{color: "#f54748"}}></i> Quis nostrud exerc ulla</li>
                <li><i className="fas fa-check-circle" style={{color: "#f54748"}}></i> Nisi ut aliquip ex eas</li>
            </ul>
            <button className="btn" onClick={alert1}>Learn More</button>
        </div>
        <div className="container-2--left ctnl2">
            <img style={{width:"100%", borderRadius: "3%"}}
                src="https://demo.w3layouts.com/demos_new/template_demo/26-08-2021/puppy-care-liberty-demo_Free/1110620902/web/assets/images/about3.jpg"
                alt=""/>
        </div>
        </div>
        </>
    )
}

export default Container8;