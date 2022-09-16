import React from "react";
import wave1 from '../assets/images/2.png';

function Header(){
    function alert1(){
        // console.log("yo");
        alert("Sorry! This function is not available right now as this is just a home page clone")
    }
    function heading1() {
        document.querySelector(".head1").style.display = "none";
        document.querySelector(".head4").style.display = "none";
        document.querySelector(".head3").style.display = "none";
        document.querySelector(".head2").style.display = "block";
      }
      function heading2() {
        document.querySelector(".head3").style.display = "block";
        document.querySelector(".head2").style.display = "none";
        document.querySelector(".head4").style.display = "none";
        document.querySelector(".head1").style.display = "none";
      }
      function heading3() {
        document.querySelector(".head4").style.display = "block";
        document.querySelector(".head2").style.display = "none";
        document.querySelector(".head3").style.display = "none";
        document.querySelector(".head1").style.display = "none";
      }
      function heading4() {
        document.querySelector(".head1").style.display = "block";
        document.querySelector(".head2").style.display = "none";
        document.querySelector(".head3").style.display = "none";
        document.querySelector(".head4").style.display = "none";
      }
      
    return(
        <>
        <header style={{fontFamily:"sans-serif"}}>
            <div className="containerh head4">
                <div style={{backgroundColor:"black"}}>
                    <img src="https://demo.w3layouts.com/demos_new/template_demo/26-08-2021/puppy-care-liberty-demo_Free/1110620902/web/assets/images/b1.jpg" alt="Snow" style={{width:"100%", position:"relative", opacity:"0.5"}}/>
                </div>
                <button onClick={heading4} className="btn btntext" style={{borderRadius:"50%", fontSize:"1.5rem"}}>&#8882;</button>
                <div className="centeredhtext">
                    <h2>PETS LOVE</h2>
                    <h1>We will take care</h1>
                    <h1>of your pets</h1>
                    <button className="btn" onClick={alert1}>View More</button>
                </div>
                <div className="centeredh">
                    <img className="wavy" src={wave1} style={{position:"absolute", bottom:"0", left:"0", width:"100%"}} alt=""/>
                </div>
            </div>
            <div className="containerh head1">
                <div style={{backgroundColor:"black"}}>
                    <img src="https://demo.w3layouts.com/demos_new/template_demo/26-08-2021/puppy-care-liberty-demo_Free/1110620902/web/assets/images/b2.jpg" alt="Snow" style={{width:"100%", position:"relative", opacity:"0.5"}}/>
                </div>
                <button onClick={heading1} className="btn btntext" style={{borderRadius:"50%", fontSize:"1.5rem"}}>&#8882;</button>
                <div className="centeredhtext">
                    <h2>PETS LOVE</h2>
                    <h1>Make your dogs</h1>
                    <h1>look their best</h1>
                    <button className="btn" onClick={alert1}>View More</button>
                </div>
                <div className="centeredh">
                    <img className="wavy" src={wave1} style={{position:"absolute", bottom:"0", left:"0", width:"100%"}} alt=""/>
                </div>
            </div>
            <div className="containerh head3">
                <div style={{backgroundColor:"black"}}>
                    <img src="https://demo.w3layouts.com/demos_new/template_demo/26-08-2021/puppy-care-liberty-demo_Free/1110620902/web/assets/images/b3.jpg" alt="Snow" style={{width:"100%", position:"relative", opacity:"0.5"}}/>
                </div>
                <button onClick={heading3} className="btn btntext" style={{borderRadius:"50%", fontSize:"1.5rem"}}>&#8882;</button>
                <div className="centeredhtext">
                    <h2>PETS LOVE</h2>
                    <h1>Where being a pet is</h1>
                    <h1>just the best</h1>
                    <button className="btn" onClick={alert1}>View More</button>
                </div>
                <div className="centeredh">
                    <img className="wavy" src={wave1} style={{position:"absolute", bottom:"0", left:"0", width:"100%"}} alt=""/>
                </div>
            </div>
            <div className="containerh head2">
                <div style={{backgroundColor:"black"}}>
                    <img src="https://demo.w3layouts.com/demos_new/template_demo/26-08-2021/puppy-care-liberty-demo_Free/1110620902/web/assets/images/b4.jpg" alt="Snow" style={{width:"100%", position:"relative", opacity:"0.5"}}/>
                </div>
                <button onClick={heading2} className="btn btntext" style={{borderRadius:"50%", fontSize:"1.5rem"}}>&#8882;</button>
                <div className="centeredhtext">
                    <h2>PETS LOVE</h2>
                    <h1>Refining the world</h1>
                    <h1>one pet at a time</h1>
                    <button className="btn" onClick={alert1}>View More</button>
                </div>
                <div className="centeredh">
                    <img className="wavy" src={wave1} style={{position:"absolute", bottom:"0", left:"0", width:"100%"}} alt=""/>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;