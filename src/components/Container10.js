import React from "react";

function Container10() {
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
function drop4(){
    var content=document.querySelector(".content4");
    if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
}
  return (
    <>
      <div className="container-3">
        <div className="container-3--right">
          <img
            style={{width:"100%", borderRadius: "5%", paddingBottom:"2rem"}}
            src="https://demo.w3layouts.com/demos_new/template_demo/26-08-2021/puppy-care-liberty-demo_Free/1110620902/web/assets/images/about4.jpg"
            alt=""
          />
        </div>
        <div className="container-3--left">
          <button
            type="button"
            className="collapsible"
            style={{display:"flex", justifyContent:"space-between"}}  onClick={drop1}
          >
            <h3>01. Why pet is a part of our life?</h3>
            <img
              width="4%"
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
              alt=""
            />
          </button>
          <div className="content content1">
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beat vitaedicta sunt explicabo.
            </p>
          </div>
          <button
            type="button"
            className="collapsible"
            style={{display:"flex", justifyContent:"space-between"}} onClick={drop2}
          >
            <h3>02. How we take care about our pet?</h3>
            <img
              width="4%"
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
              alt=""
            />
          </button>
          <div className="content content2">
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beat vitaedicta sunt explicabo.
            </p>
          </div>
          <button
            type="button"
            className="collapsible"
            style={{display:"flex", justifyContent:"space-between"}} onClick={drop3}
          >
            <h3>03. Which pet you choose and why?</h3>
            <img
              width="4%"
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
              alt=""
            />
          </button>
          <div className="content content3">
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beat vitaedicta sunt explicabo.
            </p>
          </div>
          <button
            type="button"
            className="collapsible"
            style={{display:"flex", justifyContent:"space-between"}} onClick={drop4}
          >
            <h3>04. Why pet is a part of our life?</h3>
            <img
              width="4%"
              src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e"
              alt=""
            />
          </button>
          <div className="content content4">
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.Sed ut perspiciatis unde omnis iste natus
              error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beat vitaedicta sunt explicabo.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Container10;
