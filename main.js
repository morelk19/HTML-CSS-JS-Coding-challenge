let displayCounter= document.querySelector("#displayCounter");
let increase= document.querySelector("#increase");
let decrease= document.querySelector("#decrease");
let stars= document.querySelector("#stars");
let starCount = document.querySelector("#starCount");
let count = document.querySelector("#count");


let counter = 0;

increase.addEventListener("click",() =>{

    let count = document.querySelector("#count");
    displayCounter.removeChild(count);
    counter ++;
    let newCount = document.createElement('h1');
    let newStar = document.createElement('img');

    newCount.id = "count"
    newStar.id = "starCount"

    newCount.innerHTML = counter
    newStar.src = './images/NicePng_golden-stars-png_1668068.png'
    
    displayCounter.appendChild(newCount);
    stars.appendChild(newStar);
 
})

decrease.addEventListener("click",() =>{
    let count = document.querySelector("#count");
    displayCounter.removeChild(count);
    if(counter< 1){
        counter = 0;
    }else{
        let starCount = document.querySelector("#starCount")
        stars.removeChild(starCount);
        counter --;
        
    }   
    let newCount = document.createElement('h1');
    newCount.id = "count"
    newCount.innerHTML = counter
    displayCounter.appendChild(newCount);

})