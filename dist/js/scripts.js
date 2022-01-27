
AOS.init();
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});
let myName = new Typewriter("#typed-name", {
    autoStart: true,
    delay: 75,
});
myName.typeString("Jason-Kyle De Lara").start();

let title = new Typewriter("#typed-title", {
    loop: true,
    delay: 85,
});

title
    .pauseFor(2100)
    .typeString("Creator")
    .pauseFor(500)
    .deleteAll()
    .typeString("Gym Rat")
    .pauseFor(500)
    .deleteAll()
    .typeString("Foodie")
    .pauseFor(500)
    .deleteAll()
    .typeString("Full Stack Web Developer")
    .pauseFor(5000)
    .start();

let about = new Typewriter("#typed-about", {
    autoStart: true,
    delay: 50,
});
about
    .pauseFor(1000)
    .typeString("Hello, I'm Jason and I like to create things. ")
    .pauseFor(1000)
    .typeString(
        "With the help of VS Code, Chrome, and a scoop of preworkout,  I help transform businesses ideas into tangible full scale application. "
    )
    .pauseFor(1000)
    .typeString("Let's build something together! ")
    .pauseFor(1000)
    .typeString("=)")
    .start();

// MODAL scripts
var modal = document.getElementById("myModal");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByClassName("modal-img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (event) {
        console.log(event.target);
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

modal.onclick = function () {
    modal.style.display = "none";
};

//contact scripts
$('form').on('submit', (e) => {
    e.preventDefault();
    const first = $('#firstName').val().trim();
    const last = $('#lastName').val().trim();
    const email = $('#emailAddress').val().trim();
    const select = $('#inquirySelect').val().trim();
    const subject = $('#subject').val().trim();
    const message = $('#messageBody').val().trim();

    const data = {
        first,
        last,
        email,
        select,
        subject,
        message
    };
    console.log(data);
    $.post('/email', data)
        .then(() => {
            window.location.href = "/email/sent";
        })
        .catch(() => {
            window.location.href = "/error";
        });


});
