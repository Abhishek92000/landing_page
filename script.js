 let navbar = document.querySelector('.header .navbar')
 document.querySelector('#menu').onClick =() =>{
    navbar.classList.add('active');
 }

 document.querySelector('#close').onClick =() =>{
    navbar.classList.remove('active');
 }
 
 
 
 document.addEventListener('mousemove',move);
function move(e){
    this.querySelectorAll('.move').forEach(layer=>{
        const speed = layer.getAttribute('data-speed')
        const x= (window.innerWidth - e.pageX*speed)/120
        const y= (window.innerWidth - e.pageY*speed)/120

        layer.style.transform='translateX(${x}px) translateX(${y}px)'
    })
}


// gsap.from('.logo',{opacity:0,duration:1,delay:2,y:10})
// gsap.from('.navbar,.nav-item',{opacity:0,duration:1,delay:2.1,y:30,stagger:0.2})
// gsap.from('.title',{opacity:0,duration:1,delay:1.6,y:10})
// gsap.from('.description',{opacity:0,duration:1.8,delay:2.1,y:30})
// gsap.from('.btn',{opacity:0,duration:1,delay:2.1,y:30})
// gsap.from('.image',{opacity:0,duration:1,delay:2.6,y:30})



const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#fdf2f8",
  "#fdf2f8",
  "#fce7f3",
  "#fce7f3",
  "#fbcfe8",
  "#fbcfe8",
  "#f9a8d4",
  "#f9a8d4",
  "#f472b6",
  "#f472b6",
  "#ec4899",
  "#ec4899",
  "#db2777",
  "#db2777",
  "#be185d",
  "#be185d",
  "#9d174d",
  "#9d174d",
  "#831843",
  "#831843",
  
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();
