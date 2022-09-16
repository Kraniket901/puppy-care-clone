import React from "react";

function Container3(){

function drop1(){
    var content=document.querySelector(".content1");
    if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
}
function drop2(){
    var content=document.querySelector(".content2");
    if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
}
function drop3(){
    var content=document.querySelector(".content3");
    if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
}
    // var coll = document.getElementsByClassName("collapsible");
    // var i;

    // for (i = 0; i < coll.length; i++) {
    // coll[i].addEventListener("click", function () {
    // this.classList.toggle("active");
    // var content = this.nextElementSibling;
    // if (content.style.display === "block") {
    //   content.style.display = "none";
    // } else {
    //   content.style.display = "block";
    // }
    // });}
    return(
        <>
        <div className="container-3">
            <div className="container-3--left">
                <button type="button" className="collapsible" style={{display:"flex", justifyContent:"space-between"}} onClick={drop1}>
                <h3>01. Why pet is a part of our life?</h3>
                <img width="4%" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt=""/>
                </button>
                <div className="content1 content">
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beat vitaedicta sunt explicabo.</p>
                </div>
                <button type="button" className="collapsible" style={{display:"flex", justifyContent:"space-between"}} onClick={drop2}>
                <h3>02. How we take care about our pet?</h3>
                <img width="4%" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt=""/>
                </button>
                <div className="content2 content">
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beat vitaedicta sunt explicabo.</p>
                </div>
                <button type="button" className="collapsible" style={{display:"flex", justifyContent:"space-between"}} onClick={drop3}>
                <h3>03. Which pet you choose and why?</h3>
                <img width="4%" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e" alt=""/>
                </button>
                <div className="content3 content">
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                    anim id est laborum.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                    architecto beat vitaedicta sunt explicabo.</p>
                </div>
            </div>
            <div className="container-3--right">
                <div style={{padding:"0 0 0 49%"}}>
                    <i style={{color:"#f54748", fontSize:"large", transform: "rotate(35deg)", opacity:"0.4"}} className="fas fa-paw"></i>
                </div>
                <div style={{padding:"0 0 0 45%"}}>
                    <i style={{color:"#f54748", fontSize:"x-large", transform: "rotate(35deg)", opacity:"0.6"}} className="fas fa-paw"></i>
                </div>
                <div style={{padding:"0 0 0 40%"}}>
                    <i style={{color:"#f54748", fontSize:"xx-large", transform: "rotate(35deg)"}} className="fas fa-paw"></i>
                </div>
                <h1>We are working for the community</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                <h2 style={{marginTop:"3rem"}}><i style={{color: "#f54748", fontSize:"larger", fontWeight: "bolder"}} className="fas fa-phone-volume me-2"></i> +(21) 255 999 8888</h2>
            </div>
        </div>
        </>
    )
}

export default Container3;