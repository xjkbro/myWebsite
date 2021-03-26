function hideAll() {
    var ci = document.getElementById("content-home");
    ci.style.display = "none"; // <-- Set it to block
    var ca = document.getElementById("content-about");
    ca.style.display = "none"; // <-- Set it to block
    var cp = document.getElementById("content-projects");
    cp.style.display = "none"; // <-- Set it to block
    var ce = document.getElementById("content-experience");
    ce.style.display = "none"; // <-- Set it to block
    var cc = document.getElementById("content-connect");
    cc.style.display = "none"; // <-- Set it to block
}

var btnAbout = document.getElementById("showAbout");
// function showAbout() {
btnAbout.addEventListener("click", function () {
    console.log("hello");
    hideAll();
    var contentAbout = document.getElementById("content-about");
    contentAbout.style.display = "block"; // <-- Set it to block
    window.setTimeout(function () {
        contentHome.style.opacity = 1;
        contentHome.style.transform = "scale(1)";
    }, 0);
});

// // hideAll();
// var contentHome = document.getElementById("content-home");
// var contentAbout = document.getElementById("content-about");
// var btnHome = document.getElementById("showHome");
// var btnAbout = document.getElementById("showAbout");

// btnHome.addEventListener("click", function () {
//     var ctr = 1;
//     contentHome.className = contentHome.className !== "show" ? "show" : "hide";
//     if (contentHome.className === "show") {
//         contentHome.style.display = "block";
//         window.setTimeout(function () {
//             contentHome.style.opacity = 1;
//             contentHome.style.transform = "scale(1)";
//         }, 0);
//     }
//     if (contentHome.className === "hide") {
//         contentHome.style.opacity = 0;
//         contentHome.style.transform = "scale(0)";
//         contentHome.setTimeout(function () {
//             contentHome.style.display = "none";
//         }, 700); // timed to match animation-duration
//     }
// });

// btnAbout.addEventListener("click", function () {
//     var ctr = 1;
//     contentAbout.className = contentAbout.className !== "show" ? "show" : "hide";
//     if (contentAbout.className === "show") {
//         contentAbout.style.display = "block";
//         window.setTimeout(function () {
//             contentAbout.style.opacity = 1;
//             contentAbout.style.transform = "scale(1)";
//         }, 0);
//     }
//     if (contentAbout.className === "hide") {
//         contentAbout.style.opacity = 0;
//         contentAbout.style.transform = "scale(0)";
//         contentAbout.setTimeout(function () {
//             contentAbout.style.display = "none";
//         }, 700); // timed to match animation-duration
//     }
// });
