let ani = gsap.timeline();
if (window.innerWidth > 700) {
    ani.from(".img2", {
        y: -10,
        opacity: 0,
        delay: 1,
        duration: 1,
    })
    ani.from(".list", {
        y: -10,
        opacity: 0,
        stagger: 0.3,
    })
    gsap.from(".ex", {
        y: 30,
        opacity: 0,
        delay: 3.4,
    })
    gsap.from(".img3", {
        y: 270,
        opacity: 0,
        delay: 3.5,
    })
}
else {
    ani.from(".img2", {
        y: -10,
        opacity: 0,
        delay: 1,
        duration: 1,
    })
    ani.from(".ri-menu-3-line", {
        y: -30,
        opacity: 0,
    })
    gsap.from(".ex", {
        y: 30,
        opacity: 0,
        delay: 2.5,
    })
    gsap.from(".img3", {
        y: 270,
        opacity: 0,
        delay: 2.7,
    })
}
gsap.from(".grow", {
    y: 10,
    opacity: 0,
    delay: 3.2,
})
gsap.from(".title0", {
    y: 10,
    opacity: 0,
    delay: 3.5,
})
gsap.from(".lsf p", {
    y: 10,
    opacity: 0,
    delay: 3.8,
})
gsap.from(".s3 img", {
    rotate: -360,
    duration: 10,
    delay: 2
})
gsap.from(".img1", {
    rotate: 360,
    duration: 30,
    repeat: Infinity,
})
const text =  "Constellations are patterns of stars visible in the night sky, often named after mythological figures, animals, or objects. Though not actual groupings, they appear close from Earth but are separated by vast distances in space. These celestial patterns have historical significance in navigation, storytelling, and calendars. Famous examples include Orion, with Betelgeuse and Rigel, and Ursa Major, home to the Big Dipper. Zodiac constellations, like Aries and Taurus, align along the ecliptic and hold importance in astronomy and astrology. Modern astronomy uses constellations to map the sky, dividing it into 88 recognized patterns, aiding exploration through star maps, apps, and telescopes.";
const text2 = text.toUpperCase();
const outputElement = document.getElementById("typewriter");
const typingSpeed = 50;
let index = 0;
function typeWriter() {
    if (index < text2.length) {
        outputElement.textContent += text2.charAt(index); // Add the current character
        index++; // Move to the next character
        setTimeout(typeWriter, typingSpeed); // Call this function again after `typingSpeed` milliseconds
    }
}
// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Create ScrollTrigger to trigger typewriter
ScrollTrigger.create({
    trigger: "#typewriter", // Element that triggers the effect
    start: "top 80%", // When the top of the element reaches 80% of the viewport height
    onEnter: () => typeWriter(), // Trigger typeWriter function on scroll
    once: true // Ensures the animation runs only once
});
gsap.from(".color h1",{
        y: -20,
        opacity: 0,
        duration: 3,
        scrollTrigger:".color h1"
})
gsap.to(".color h1",{
    scale:1.2,
    duration: 1.5,
    scrollTrigger:".color h1"
})
gsap.from(".s4c h1",{
    y: -20,
    opacity: 0,
    duration: 3,
    scrollTrigger:".color h1"
})
gsap.to(".s4c h1",{
scale:1.2,
duration: 1.5,
scrollTrigger:".color h1"
})

const text1 =  "Comets are icy bodies originating from the outer regions of the solar system, primarily the Kuiper Belt and Oort Cloud. Often described as “dirty snowballs,” they are composed of dust, rock, and frozen gases like water, methane, and ammonia. When a comet approaches the Sun, its ice vaporizes, forming a glowing coma and a tail that points away from the Sun due to solar wind. Comets are remnants from the early solar system, offering insights into its formation. Famous comets, like Halley’s Comet, are periodic and can be observed at regular intervals, while others appear unpredictably.";
const text3 = text1.toUpperCase();
const outputElement1 = document.getElementById("typewriter1");
const typingSpeed1 = 50;
let index1 = 0;
function typeWriter1() {
    if (index1 < text3.length) {
        outputElement1.textContent += text3.charAt(index1); // Add the current character
        index1++; // Move to the next character
        setTimeout(typeWriter1, typingSpeed1); // Call this function again after `typingSpeed` milliseconds
    }
}
// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Create ScrollTrigger to trigger typewriter
ScrollTrigger.create({
    trigger: "#typewriter1", // Element that triggers the effect
    start: "top 80%", // When the top of the element reaches 80% of the viewport height
    onEnter: () => typeWriter1(), // Trigger typeWriter function on scroll
    once: true // Ensures the animation runs only once
});

const text11 =  "The Big Bang Theory explains that the universe began 13.8 billion years ago with a massive explosion, leading to the creation of space, time, and matter. Over time, stars and galaxies formed, and the universe continues to expand. Earth’s evolution started 4.5 billion years ago, forming from cosmic dust and gas. As it cooled, oceans and an atmosphere developed, providing conditions for life to emerge around 3.8 billion years ago. Through gradual changes, life evolved into the diverse forms we see today.";
const text33 = text11.toUpperCase();
const outputElement11 = document.getElementById("typewriter11");
const typingSpeed11 = 50;
let index11 = 0;
function typeWriter11() {
    if (index11 < text33.length) {
        outputElement11.textContent += text33.charAt(index11); // Add the current character
        index11++; // Move to the next character
        setTimeout(typeWriter11, typingSpeed11); // Call this function again after `typingSpeed` milliseconds
    }
}
// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Create ScrollTrigger to trigger typewriter
ScrollTrigger.create({
    trigger: "#typewriter11", // Element that triggers the effect
    start: "top 80%", // When the top of the element reaches 80% of the viewport height
    onEnter: () => typeWriter11(), // Trigger typeWriter function on scroll
    once: true // Ensures the animation runs only once
});

document.querySelectorAll('.list').forEach(link =>{
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let menulist = document.getElementById("menulist")
    menulist.style.maxHeight = "0px";

function toggleMenu(){
    if(menulist.style.maxHeight == "0px"){
        menulist.style.maxHeight = "300px";
    }
    else{
        menulist.style.maxHeight = "0px";
    }
}