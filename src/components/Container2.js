import React from 'react';

function Container2(){
    function alert1(){
        // console.log("yo");
        alert("Sorry! This function is not available right now as this is just a home page clone")
    }
    return(
        <>
        <div className="container-2">
            <div className="container-2--left">
                <img style={{width:"100%", borderRadius:"7px"}} src="https://demo.w3layouts.com/demos_new/template_demo/26-08-2021/puppy-care-liberty-demo_Free/1110620902/web/assets/images/video.jpg" alt=""/>
            </div>
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
                <h1>We will make them truly happy</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <ul>
                    <li><i className="fas fa-check-circle" style={{color: "#f54748"}}></i> certified groomer</li>
                    <li><i className="fas fa-check-circle" style={{color: "#f54748"}}></i> 20 years of experience</li>
                    <li><i className="fas fa-check-circle" style={{color: "#f54748"}}></i> Animal Lover</li>
                </ul>
                <button className="btn" onClick={alert1}>Learn More</button>
            </div>
        </div>
        </>
    )
}

export default Container2;