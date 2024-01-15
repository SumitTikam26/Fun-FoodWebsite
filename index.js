let trendFood = document.querySelectorAll(".trendFood");
let foodCard = document.querySelectorAll(".foodCard");
let count = 0;
console.log(trendFood);


// code for trend food section animation
trendFood.forEach((img, index)=>{
   img.style.left = `${index*100}%`
})

const myFun = () => {
    trendFood.forEach((currentImg)=>{
        currentImg.style.transform = `translateX(-${count * 100}%)`
    })
}
setInterval(()=>{
    count++;
    if(count == trendFood.length){
        count = 0;
    }
    myFun();
}, 4000)


// Food Card Detail
foodCard.forEach((currentCard)=>{
     currentCard.addEventListener('click', function(){
        console.log(currentCard);

        let div = document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`
        <i id="closeIcon" class="bi bi-x"></i>
        <img src="${currentCard.firstElementChild.src}" alt="">
        <h2>Food Detail</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga saepe consectetur minima nobis recusandae expedita!</p>
        `
        document.querySelector("body").appendChild(div);
        document.querySelector("#closeIcon").addEventListener("click", ()=>{
            div.remove();
        })
     })
})