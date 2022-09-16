import React from "react";

function Container7(){
        const currentSlide1 = () => {
            document.querySelector(".mySlides1").style.display = "block";
            document.querySelector(".mySlides2").style.display = "none";
            document.querySelector(".mySlides3").style.display = "none";
            document.querySelector(".mySlides4").style.display = "none";
        }
        const currentSlide2 = () => {
            document.querySelector(".mySlides1").style.display = "none";
            document.querySelector(".mySlides2").style.display = "block";
            document.querySelector(".mySlides3").style.display = "none";
            document.querySelector(".mySlides4").style.display = "none";
        }
        const currentSlide3 = () => {
            document.querySelector(".mySlides1").style.display = "none";
            document.querySelector(".mySlides2").style.display = "none";
            document.querySelector(".mySlides3").style.display = "block";
            document.querySelector(".mySlides4").style.display = "none";
        }
        const currentSlide4 = () => {
            document.querySelector(".mySlides1").style.display = "none";
            document.querySelector(".mySlides2").style.display = "none";
            document.querySelector(".mySlides3").style.display = "none";
            document.querySelector(".mySlides4").style.display = "block";
        }
    // let slideIndex = 1;
    // showSlides(slideIndex);
    
    // function plusSlides(n) {
    //   showSlides((slideIndex += n));
    // }
    
    // function currentSlide(n) {
    //   showSlides((slideIndex = n));
    // }
    
    // function showSlides(n) {
    //   let j;
    //   let slides = document.getElementsByClassName("mySlides");
    //   let dots = document.getElementsByClassName("dot");
    //   if (n > slides.length) {
    //     slideIndex = 1;
    //   }
    //   if (n < 1) {
    //     slideIndex = slides.length;
    //   }
    //   for (j = 0; j < slides.length; j++) {
    //     slides[j].style.display = "none";
    //   }
    //   for (j = 0; j < dots.length; j++) {
    //     dots[j].className = dots[j].className.replace(" active", "");
    //   }
    //   slides[slideIndex - 1].style.display = "block";
    //   dots[slideIndex - 1].className += " active";
    // }
    return(
        <>
        <div className="container-7">
            <div className="container-7--left">
                <div style={{padding:"0 0 0 49%"}}>
                    <i style={{color:"#f54748", fontSize:"large", transform: "rotate(35deg)", opacity:"0.4"}} className="fas fa-paw"></i>
                </div>
                <div style={{padding:"0 0 0 45%"}}>
                    <i style={{color:"#f54748", fontSize:"x-large", transform: "rotate(35deg)", opacity:"0.6"}} className="fas fa-paw"></i>
                </div>
                <div style={{padding:"0 0 0 40%"}}>
                    <i style={{color:"#f54748", fontSize:"xx-large", transform: "rotate(35deg)"}} className="fas fa-paw"></i>
                </div>
                <h1>What our clients think about us</h1>
                <div className="slideshow-container">
                    <div className="mySlides mySlides1 fade">
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae laudantium voluptate rem
                        ullam dolore nisi voluptatibus esse quasi, doloribus tempora. Dolores molestias adipisci dolor
                        sit amet! by the Desire to achieve Success."</p>
                        <div style={{display:"flex", margin:"1rem 0"}}>
                            <img className="pfp" src="https://demo.w3layouts.com/demos_new/template_demo/26-08-2021/puppy-care-liberty-demo_Free/1110620902/web/assets/images/testi1.jpg" alt=""/>
                            <div style={{padding:"2rem"}}>
                                <h2 style={{margin:"0%", padding:"0%"}}>John wilson</h2>
                                <h3 style={{fontWeight:"lighter", margin:"0%", padding:"0%"}}>Subtitle goes here</h3>
                            </div>
                        </div>
                    </div>
                    <div className="mySlides mySlides2 fade">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae laudantium voluptate rem
                        ullam dolore nisi voluptatibus esse quasi, doloribus tempora. Dolores molestias adipisci dolor
                        sit amet! by the Desire to achieve Success.</p>
                        <div style={{display:"flex", margin:"1rem 0"}}>
                            <img className="pfp" src="https://demo.w3layouts.com/demos_new/template_demo/26-08-2021/puppy-care-liberty-demo_Free/1110620902/web/assets/images/testi2.jpg" alt=""/>
                            <div style={{padding: "2rem"}}>
                                <h2 style={{margin:"0%", padding:"0%"}}>Julia sakura</h2>
                                <h3 style={{fontWeight:"lighter", margin:"0%", padding:"0%"}}>Subtitle goes here</h3>
                            </div>
                        </div>
                    </div>
                    <div className="mySlides mySlides3 fade">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae laudantium voluptate rem
                        ullam dolore nisi voluptatibus esse quasi, doloribus tempora. Dolores molestias adipisci dolor
                        sit amet! by the Desire to achieve Success.</p>
                        <div style={{display:"flex", margin:"1rem 0"}}>
                            <img className="pfp" src="https://demo.w3layouts.com/demos_new/template_demo/26-08-2021/puppy-care-liberty-demo_Free/1110620902/web/assets/images/testi3.jpg" alt=""/>
                            <div style={{padding: "2rem"}}>
                                <h2 style={{margin:"0%", padding:"0%"}}>Roy Mmdson</h2>
                                <h3 style={{fontWeight:"lighter", margin:"0%", padding:"0%"}}>Subtitle goes here</h3>
                            </div>
                        </div>
                    </div>
                    <div className="mySlides mySlides4 fade">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae laudantium voluptate rem
                        ullam dolore nisi voluptatibus esse quasi, doloribus tempora. Dolores molestias adipisci dolor
                        sit amet! by the Desire to achieve Success.</p>
                        <div style={{display:"flex", margin:"1rem 0"}}>
                            <img className="pfp" src="https://demo.w3layouts.com/demos_new/template_demo/26-08-2021/puppy-care-liberty-demo_Free/1110620902/web/assets/images/testi2.jpg" alt=""/>
                            <div style={{padding: "2rem"}}>
                                <h2 style={{margin:"0%", padding:"0%"}}>Myke Thyson</h2>
                                <h3 style={{fontWeight:"lighter", margin:"0%", padding:"0%"}}>Subtitle goes here</h3>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div style={{textAlign:"center"}}>
                        <span className="dot" onClick={currentSlide1}></span>
                        <span className="dot" onClick={currentSlide2}></span>
                        <span className="dot" onClick={currentSlide3}></span>
                        <span className="dot" onClick={currentSlide4}></span>
                    </div>
                </div>
            </div>
            <div className="container-7--right">
                <img width="100%" style={{borderRadius: "7px"}} src="https://demo.w3layouts.com/demos_new/template_demo/26-08-2021/puppy-care-liberty-demo_Free/1110620902/web/assets/images/about2.jpg" alt=""/>
            </div>
        </div>
        </>
    )
}

export default Container7;