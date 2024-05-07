let dropdown = document.getElementById("dropdown");
let category = document.getElementById("category");


dropdown.addEventListener("mouseenter" , function(){
category.style.visibility = "visible";
})
dropdown.addEventListener("mouseleave" , function(){
    category.style.visibility = "hidden";
})

category.addEventListener("mouseenter" , function(){
    category.style.visibility = "visible";
})

category.addEventListener("mouseleave" , function(){
    category.style.visibility = "hidden";
})
