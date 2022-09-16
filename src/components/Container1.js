import React from "react";

function Container1(){
    function alert1(){
        // console.log("yo");
        alert("Sorry! This function is not available right now as this is just a home page clone")
    }
    return(
        <>
        <div className="container-1">
            <div className="container-1--left">
                <div style={{padding:"0 0 0 49%"}}>
                    <i style={{color:"#f54748", fontSize:"large", transform: "rotate(35deg)", opacity:"0.4"}} className="fas fa-paw"></i>
                </div>
                <div style={{padding:"0 0 0 45%"}}>
                    <i style={{color:"#f54748", fontSize:"x-large", transform: "rotate(35deg)", opacity:"0.6"}} className="fas fa-paw"></i>
                </div>
                <div style={{padding:"0 0 0 40%"}}>
                    <i style={{color:"#f54748", fontSize:"xx-large", transform: "rotate(35deg)"}} className="fas fa-paw"></i>
                </div>
                <h1>How we can help you properly</h1>
                <p>Aurabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac sed, lacinia est. Quisque ut
                lectus consequat, venenatis eros et, sed commodo risus. Nullam sit amet laoreet elit. Suspendisse non
                init magnaa velit efficitur, dolor eget ex fermentum.</p>
                <button className="btn" onClick={alert1}>Discover More</button>
            </div>
            <div className="container-1--right">
                <div style={{display:"flex"}}>
                    <div className="box">
                        <i style={{color: "#6168ff", fontSize: "xx-large"}} className="fab fa-medrt color-1"></i>
                        <h2>Full diagnostics</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit oluptatem.</p>
                    </div>
                    <div className="box">
                        <i style={{color: "#ff4f81", fontSize: "xx-large"}} className="fas fa-medal color-3"></i>
                        <h2>Awarded service</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit oluptatem.</p>
                    </div>
                </div>
                <div style={{display:"flex"}}>
                    <div className="box">
                        <i style={{color: "#0abf53", fontSize: "xx-large"}} className="fas fa-bone color-2"></i>
                        <h2>Dog Breeding</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit oluptatem.</p>
                    </div>
                    <div className="box">
                        <i style={{color: "#ff9933", fontSize: "xx-large"}}  className="fas fa-paw color-4"></i>
                        <h2>Dog Training</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit oluptatem.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Container1;