let modeBtn = document.querySelector("#mode");  
let currMode = "light";
modeBtn.addEventListener("click",()=>{
    if(currMode==="light"){
        currMode="dark";
        modeBtn.classList.remove("ligMode");
        modeBtn.classList.add("darMode");
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.querySelector("button").style.color = "white";
    }
    else{
     currMode = "light";
     modeBtn.classList.remove("darMode");
     modeBtn.classList.add("ligMode");
     document.body.style.backgroundColor = "white";
     document.body.style.color = "black";
     document.querySelector("button").style.color = "black";
    }    
    console.log(currMode);
});