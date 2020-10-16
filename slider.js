(function(){
const arrows = document.querySelectorAll('.arrow');
const imgContainer = document.querySelector('.slider-container');
let images = ["image1", "image2", "image3", "image4"]
let counter = 0;

/*call a functiomn of arrow*/
imgContainer.style.backgroundImage = `url('./imgs/${images[0]}.png')`

arrows.forEach(function (arrow){
    arrow.addEventListener('click', function(e){
e.preventDefault();
if(e.target.id === "left"){
    counter--;
if(counter < 0){
    counter = images.length-1
}
    imgContainer.style.backgroundImage = `url('./imgs/${images[counter]}.png')`

}else if(e.target.id === "right"){
    counter++;
if(counter > images.length-1){
    counter = 0
}
imgContainer.style.backgroundImage = `url('./imgs/${images[counter]}.png')`
}

    })
})
})()