let btn  = document.querySelector(".languages")
btn.addEventListener("click",(event) => {
    console.log(event.target)
    btn.innerHTML = `<div>HTML</div>
            <img class="btnimg" src="htmlimg.png" alt="">
            <div>CSS</div>
            <img class="btnimg" src="cssimg.png" alt="">
            <div>JavaScript</div>
            <img class="btnimg" src="jsimg.png" alt="">
            <div>React.JS</div>
            <img class="btnimg" src="reactimg.png" alt="">` 
})