/* Typing Animation */
var typed = new Typed('.typing', {
    strings: ['Software Developer', 'Web Designer', 'Web Developer'],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});

/* Toggle Active li class */
const liElement = document.querySelectorAll('.nav li a');
liElement.forEach((ele) => {
    ele.addEventListener('click', () => {
        liElement.forEach((el) => el.classList.remove('active'))
        ele.classList.add("active");
    })
})