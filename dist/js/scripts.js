let name = new Typewriter("#typed-name", {
    autoStart: true,
    delay: 75,
});
name.typeString("Jason-Kyle De Lara").start();

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
    .typeString("Let's Build Something together! =)")
    .start();
