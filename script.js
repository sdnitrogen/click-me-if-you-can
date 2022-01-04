const btnWidth = 150,
    btnHeight = 50;
const maxWidth = window.innerWidth - btnWidth,
    maxHeight = window.innerHeight - btnHeight;

// we use this when script is inside <head>, if it's at the end of body we don't need this
// window.addEventListener('DOMContentLoaded', () => {})

const btn = document.querySelector("#btn");

btn.onclick = () => {
    btn.classList.add("winner");
    var result = confirm("You won! Want to play again?");

    if (result) {
        // the user clicked ok
        btn.classList.remove("winner");
    }
};

// how to move the button around? set the top and left to a random value inside the parent container
btn.onmouseover = () => {
    btn.style.left = Math.floor(Math.random() * maxWidth + 1) + "px";
    btn.style.top = Math.floor(Math.random() * maxHeight + 1) + "px";
};
