import React from "react";

function Container6(){
    return(
        <>
            <div className="container-6">
                <div style={{padding:"0 0 0 50%"}}>
                    <i style={{color:"#f54748", fontSize:"large", transform: "rotate(35deg)", opacity:"0.4"}} className="fas fa-paw"></i>
                </div>
                <div style={{padding:"0 0 0 48.5%"}}>
                    <i style={{color:"#f54748", fontSize:"x-large", transform: "rotate(35deg)", opacity:"0.6"}} className="fas fa-paw"></i>
                </div>
                <div style={{padding:"0 0 0 46.5%"}}>
                    <i style={{color:"#f54748", fontSize:"xx-large", transform: "rotate(35deg)"}} className="fas fa-paw"></i>
                </div>
                <h1 style={{textAlign:"center", paddingBottom:"3rem"}}>Latest Blog Post</h1>
                <div style={{display:"flex", flexWrap:"wrap"}}>
                    <div className="new-card">
                        <img style={{width: "100%"}} src="https://demo.w3layouts.com/demos_new/template_demo/26-08-2021/puppy-care-liberty-demo_Free/1110620902/web/assets/images/blog1.jpg" alt=""/>
                        <div>
                            <h6><span className="fa fa-clock-o"></span> &nbsp; AUG 1, 2021</h6>
                            <h2 style={{fontSize:"1.4rem"}}>Domestic animals can save you from loneliness</h2>
                            <div style={{display:"flex", justifyContent:"space-between", padding:"0"}}>
                                <h5>Read more &nbsp; <span className="fa fa-arrow-right ms-1" style={{color:"#f54748", fontSize:"small", fontWeight: "bolder"}}></span></h5>
                                <h5>3 Comments</h5>
                            </div>
                        </div>
                    </div>
                    <div className="new-card">
                        <img style={{width: "100%"}} src="https://demo.w3layouts.com/demos_new/template_demo/26-08-2021/puppy-care-liberty-demo_Free/1110620902/web/assets/images/blog2.jpg" alt=""/>
                        <div>
                            <h6><span className="fa fa-clock-o"></span> &nbsp; AUG 2, 2021</h6>
                            <h2 style={{fontSize:"1.4rem"}}>How to bond with your new rescue pet?</h2>
                            <div style={{display:"flex", justifyContent:"space-between", padding:"0"}}>
                                <h5>Read more &nbsp; <span className="fa fa-arrow-right ms-1" style={{color:"#f54748", fontSize:"small", fontWeight: "bolder"}}></span></h5>
                                <h5>3 Comments</h5>
                            </div>
                        </div>
                    </div>
                    <div className="new-card">
                        <img style={{width: "100%"}} src="https://demo.w3layouts.com/demos_new/template_demo/26-08-2021/puppy-care-liberty-demo_Free/1110620902/web/assets/images/blog3.jpg" alt=""/>
                        <div>
                            <h6><span className="fa fa-clock-o"></span> &nbsp; AUG 3, 2021</h6>
                            <h2 style={{fontSize:"1.4rem"}}>What happens if a dog doesn’t get adopted? </h2>
                            <div style={{display:"flex", justifyContent:"space-between", padding:"0"}}>
                                <h5>Read more &nbsp; <span className="fa fa-arrow-right ms-1" style={{color:"#f54748", fontSize:"small", fontWeight: "bolder"}}></span></h5>
                                <h5>3 Comments</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Container6;