let p=document.getElementById("pId");
let input=document.getElementById("inId");
let image=document.getElementById("imgId");
let count=10;

let countdown=setInterval(function(){
    count = count-1;
    p.textContent=count;
    if(count === 0){
        image.src="bom1.jpg";
        p.textContent="BOOM!!!";
        clearInterval(countdown);
    }  
},600);

input.addEventListener("keydown",function(event){
    let inputValue=input.value;
    if(event.key === "Enter" && inputValue === "defuse" && count !== 0){
        p.textContent="You did it!";
        clearInterval(countdown);
    }

});