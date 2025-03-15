const letter = document.querySelectorAll(".letter span");

letter.forEach((letter)=>{

    letter.addEventListener("click",(e)=>{
        e.target.classList.add("active");
    }); 
});         