const menu = document.getElementById("navLinks");
const button = document.getElementById("menuToggle");
const overlay = document.getElementById("overlay");
const icon = button.querySelector("i");

function toggleMenu(){

    menu.classList.toggle("active");
    overlay.classList.toggle("active");

    if(menu.classList.contains("active")){

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
        button.setAttribute(
            "aria-expanded",
            menu.classList.contains("active")
        );

        document.body.style.overflow="hidden";

    }else{

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

        document.body.style.overflow="";

    }

}

button.addEventListener("click",toggleMenu);

overlay.addEventListener("click",toggleMenu);

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        menu.classList.remove("active");
        overlay.classList.remove("active");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

        document.body.style.overflow="";

    });

});