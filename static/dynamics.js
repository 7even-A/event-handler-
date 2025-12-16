let btn = document.getElementById("btn");

btn.addEventListener("click", function(){
   let img = document.createElement("img")
   img.src = "https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/merrill-img-campus-preview.jpg?itok=-fE-OEFp";
    document.body.appendChild(img)
})