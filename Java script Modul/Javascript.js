var nav = document.querySelector(".Meny")
var hamburgarMeny = document.getElementById("HamburgarMeny")
// hamburgarMeny.addEventListener("click", displayNav);

hamburgarMeny.addEventListener("click", () => {
    console.log("dwdwa")
    nav.classList.toggle("red")

    nav.style.color = "blue"
    
    });

// function displayNav() {
    // if (nav.style.display == "flex") {
        // console.log("Hej")
        // main.style.left = "20vw"
        // nav.style.left = "0vw"
        // body.style.overflow = "hidden"
    // } 
    // else {
        // main.style.left = "0vw"
        // nav.style.left = "-20vw"
        // body.style.overflow = "unset"
    // }

// }