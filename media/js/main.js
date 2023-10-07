//----------------------Moon ICon--------------------------------
const toggle = document.getElementById('toggledark');
const body = document.querySelector('body'); 
const header = document.querySelector('.navbar');
var pelement = document.getElementsByTagName('p');
var mainbtn = document.getElementsByClassName('main-btn');
var h5 = document.getElementsByTagName('h5');
var h3 = document.getElementsByTagName('h3');
var para = document.getElementById('p1');
var para2 = document.getElementById('p2');
var para3 = document.getElementById('p3');
var para4 = document.getElementById('p4');
var para5 = document.getElementById('p5');
var fp = document.getElementById('footer-p');
var cp = document.getElementById('copy-para');
var mainbtn = document.getElementsByClassName('main-btn');
var moon = document.getElementsByClassName('fa-moon');



toggle.addEventListener('click', function(){
    this.classList.toggle('fa-sun');
    if(this.classList.toggle('fa-moon'))
    {   
        this.style.color = "#666";
        this.style.transition = "2s"
        header.style.background = "white"
        body.style.background = "white";
        for (var i=0; i<pelement.length; i++)
        {
            pelement[i].style.color = "#333";
        }
        for(var i=0; i<mainbtn.length; i++)
        {
            mainbtn[i].style.color = "#fff";
            mainbtn[i].style.border = "2px solid #fff";
        }
        for(var i=0; i<mainbtn.length; i++)
        {
            mainbtn[i].style.color = "#333";
            mainbtn[i].style.backgroundColor = "#fff";
            mainbtn[i].style.border = "2px solid #333";
        }
        for( var i=0; i<h3.length; i++)
        {
            h3[i].style.color = "#333";
        }
        body.style.transition = '2s';
        para.style.color = "skyblue";
        para2.style.color = "skyblue";
        para3.style.color = "skyblue";
        para4.style.color = "skyblue";
        para5.style.color = "skyblue";
        fp.style.color = "#fff";
        cp.style.color = "#fff";

        for( var i=0; i<mainbtn.length; i++)
        {
            mainbtn[i].style.color = "#fff";
            mainbtn[i].style.backgroundColor = "var(--secondary-color)";
            mainbtn[i].style.border = "var(--secondary-color)";
        }
       
    }
    else
    {   
        this.style.color = "yellow";
        header.style.background = "#d5d3d3";
        body.style.background = "#333";
        for (var i=0; i<pelement.length; i++)
        {
            pelement[i].style.color = "#fff";
        }
        for(var i=0; i<mainbtn.length; i++)
        {
            mainbtn[i].style.color = "#fff";
            mainbtn[i].style.backgroundColor = "var(--red)";
            mainbtn[i].style.border = "2px solid var(--red)";
        }
        for( var i=0; i<h3.length; i++)
        {
            h3[i].style.color = "#fff";
        }
        body.style.transition = '2s';
    }
});  

//Header scroll
let nav = document.querySelector('.navbar');
window.onscroll = function()
{
    if(document.documentElement.scrollTop > 50)
    {
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}
// Nav hide
let navbar = document.querySelectorAll(".nav-link");
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click",function()
    {
        navcollapse.classList.remove("show");
    })
})

// Swiper slider
var swiper = new Swiper(".myswiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
    },
});
// Counter design
document.addEventListener("DOMContentLoaded", () =>
{
    function counter(id,start,end,duration)
    {
        let obj = document.getElementById(id),
        current =  start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end)
            {
                clearInterval(timer);
            }
        },step);
    }
    counter("count1", 0 , 1524 , 3000);
    counter("count2", 100 , 1000 , 4000);
    counter("count3", 0 , 2024 , 3000);
    counter("count4", 0 , 1200 , 2500);
});

//9. Our partner
var swiper = new Swiper('.partners', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        '1200':
        {
            slidesPerView: 5,
            spaceBetween: 95,
        },
        '991':
        {
            slidesPerView: 4,
            spaceBetween: 100,
        },
        '767': {
            slidesPerView: 4,
            spaceBetween: 10,
        },
        '300': {
            slidesPerView: 3,
            spaceBetween: 8,
        },
        '100': {
            slidesPerView: 2,
            spaceBetween: 8,
        },

    },
    




});