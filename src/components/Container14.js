import React from "react";

function Container14(){
    return(
        <>
        
        <div className="container-1--right ctnr1" style={{width:"100%"}}>
        <div style={{display:"flex", flexWrap: "wrap"}}>
            <div className="box boxf">
                <i style={{color: "#6168ff", fontSize: "xx-large"}} className="fas fa-map-marker-alt colorc-1"></i>
                <h2>Address info</h2>
                <p>Coffee bean, 343 cafe coffee lane, #2214 cravel street, NY.</p>
            </div>
            <div className="box boxf">
                <i style={{color:"#0abf53", fontSize: "xx-large"}} className="fas fa-clock colorc-2"></i>
                <h2>Opening hours</h2>
                <p>Monday – Friday : 9am - 6pm <br/>Saturday : 10am - 4pm </p>
            </div>
            <div className="box boxf">
                <i style={{color:"#ff4f81", fontSize: "xx-large"}} className="fas fa-envelope-open-text colorc-3"></i>
                <h2>Contact info</h2>
                <p>+1(21) 234 4567 <br/>info@support.com</p>
            </div>
        </div>
    </div>

        </>
    )
}

export default Container14;