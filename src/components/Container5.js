import React from "react";

function Container5(){
function counterrr(){
  var count1 = 100;
  const counter1 = setInterval(()=>{
    count1++;
    document.getElementById("counterr1").innerHTML=count1 + " +";
    if(count1===320){
      clearInterval(counter1);
    }
  },10)
  var count2 = 0;
  const counter2 = setInterval(()=>{
    count2++;
    document.getElementById("counterr2").innerHTML=count2 + " +";
    if(count2===80){
      clearInterval(counter2);
    }
  },30)
  var count3 = 100;
  const counter3 = setInterval(()=>{
    count3++;
    document.getElementById("counterr3").innerHTML=count3 + " +";
    if(count3===820){
      clearInterval(counter3);
    }
  },0.5)
  var count4 = 0;
  const counter4 = setInterval(()=>{
    count4++;
    document.getElementById("counterr4").innerHTML=count4 + " +";
    if(count4===90){
      clearInterval(counter4);
    }
  },20)
}
 
    // function scrollCount() {
    //     var count1 = 500;
    //     var counterr1 = setInterval(() => {
    //       count1++;
    //       document.getElementById("counterr1").dangerouslySetInnerHTML = count1 + " +";
    //       if (count1 === 630) {
    //         clearInterval(counterr1);
    //       }
    //     }, 10);
    //     var count2 = 0;
    //     var counterr2 = setInterval(() => {
    //       count2++;
    //       document.getElementById("counterr2").dangerouslySetInnerHTML = count2 + " +";
    //       if (count2 === 90) {
    //         clearInterval(counterr2);
    //       }
    //     }, 10);
    //     var count3 = 0;
    //     var counterr3 = setInterval(() => {
    //       count3++;
    //       document.getElementById("counterr3").dangerouslySetInnerHTML = count3 + " +";
    //       if (count3 === 80) {
    //         clearInterval(counterr3);
    //       }
    //     }, 10);
    //     var count4 = 700;
    //     var counterr4 = setInterval(() => {
    //       count4++;
    //       document.getElementById("counterr4").dangerouslySetInnerHTML = count4 + " +";
    //       if (count4 === 820) {
    //         clearInterval(counterr4);
    //       }
    //     }, 10);
    //   }
    return(
        <>
        <div className="container-5" onMouseEnter={counterrr}>
            <div className="container-5--left" >
                <div style={{padding:"0 0 0 49%"}}>
                    <i style={{color:"#f54748", fontSize:"large", transform: "rotate(35deg)", opacity:"0.4"}} className="fas fa-paw"></i>
                </div>
                <div style={{padding:"0 0 0 45%"}}>
                    <i style={{color:"#f54748", fontSize:"x-large", transform: "rotate(35deg)", opacity:"0.6"}} className="fas fa-paw"></i>
                </div>
                <div style={{padding:"0 0 0 40%"}}>
                    <i style={{color:"#f54748", fontSize:"xx-large", transform: "rotate(35deg)"}} className="fas fa-paw"></i>
                </div>
                <h1>Our activities & experience</h1>
                <p style={{marginBottom:"10px"}}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>
                <div style={{display:"flex"}}>
                    <div className="color-card" style={{backgroundColor:"#6168ff"}}>
                        <h1 id="counterr1">630 +</h1>
                        <p>HAPPY CLIENTS</p>
                    </div>
                    <div className="color-card" style={{backgroundColor:"#0abf53"}}>
                        <h1 id="counterr2">80 +</h1>
                        <p>PROFESSIONALS</p>
                    </div>
                </div>
                <div style={{display:"flex"}}>
                    <div className="color-card" style={{backgroundColor:"#ff4f81"}}>
                        <h1 id="counterr3">820 +</h1>
                        <p>ADOPTED PETS</p>
                    </div>
                    <div className="color-card" style={{backgroundColor:"#ff9933"}}>
                        <h1 id="counterr4">90 +</h1>
                        <p>AWARDS</p>
                    </div>
                </div>
            </div>
            <div className="container-5--right">
                <img style={{width:"100%", borderRadius:"7px"}} src="https://demo.w3layouts.com/demos_new/template_demo/26-08-2021/puppy-care-liberty-demo_Free/1110620902/web/assets/images/about1.jpg" alt=""/>
            </div>
        </div>
        </>
    )
}

export default Container5;