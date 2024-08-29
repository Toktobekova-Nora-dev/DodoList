let start = document.querySelector(".START");
let container = document.querySelector(".container");
let header = document.querySelector(".header");
let box = document.querySelector(".box");
let btn = document.querySelector(".btn")
let ul = document.querySelector("ul");
let input = document.querySelector(".input");
let btn_ = document.querySelector(".btn_");
let btn_add = document.querySelector(".btn_add")


start.addEventListener("click",()=>{
container.style.display = "block"
header.style.display = "none"
})

btn.addEventListener("click",()=>{
    box.innerHTML +=`<li>${input.value}</li>`;
})
 


// function AddDelete(e) {
//     box.filter((el) => el.id !== e)
// }


btn_add.addEventListener("click",()=>{
    li.style.display = "none"
})

btn_.addEventListener("click",() => box.innerHTML = "")
 


