window.addEventListener("load", () => {
    const loader = document.querySelector("#loader");
    
    // Add the hidden class
    loader.classList.add("loader-hidden");
    
    // Optional: Remove it from the DOM entirely after the fade out
    loader.addEventListener("transitionend", () => {
      loader.remove();
    });
  });


const foods = document.querySelectorAll('.food img');
const basketImg = document.querySelector('#basket');
const mouth = document.querySelector("#mouth");

// 1. Function to check if the feast is over
function checkFeastStatus() {
    // Select all food items that DO NOT have the 'eaten' class
    const remainingFood = document.querySelectorAll('.food img:not(.eaten)');
    
    if (remainingFood.length === 0) {
        // Hide the mouth
        if (mouth) {
            mouth.style.transition = "opacity 1s ease";
            mouth.style.opacity = "0";
            setTimeout(() => mouth.style.display = "none", 500);
        }

        // Show the thanks message (or create it if it doesn't exist)
        let message = document.getElementById("feast-message");
        if (!message) {
            message = document.createElement("div");
            message.id = "feast-message";
            message.innerText = "THANKS FOR THE FEAST! ";
            console.log("Hello!");
            // message.style.cssText = "text-align:center; font-size:2rem; margin-top:20px; font-family:sans-serif; color:#333;";
            // Append it where the mouth was or to the body
            document.body.appendChild(message);
        }
    }
}

function aboutPage() {
    var popup = document.getElementById("aboutPage");
    popup.classList.toggle("show");
}

$(document).ready(function () {
    const draggableIds = ["#sandwich", "#strawberries", "#shrimp", "#chocolatemilk", "#egg", "#salad"];

    draggableIds.forEach((id) => {
        const element = document.querySelector(id);
        if (!element) return;

        $(id).draggable({
            containment: "window",
            stop: function(event, ui) {
                if (isOverlapping(this, mouth)) {
                    $(this).addClass("eaten");
                    checkFeastStatus(); // <-- Check here
                }
            }
        });
        
        enableTouchDrag(element);
    });

    $("#mouth").droppable({
        accept: ".food img",
        drop: function(event, ui) {
            $(ui.draggable).addClass("eaten");
            checkFeastStatus(); // <-- Check here
        }
    });
});





function enableTouchDrag(element) {
    if (!element) return;

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;

    element.addEventListener("touchstart", (event) => {
        const touch = event.touches[0];
        const rect = element.getBoundingClientRect();

        isDragging = true;
        // This keeps the "grab point" exactly where you touched the image
        offsetX = touch.clientX - rect.left;
        offsetY = touch.clientY - rect.top;
    }, { passive: true });

    element.addEventListener("touchmove", (event) => {
        if (!isDragging) return;

        const touch = event.touches[0];
        const parentRect = element.offsetParent.getBoundingClientRect();

        // clientX/Y is relative to the viewport
        // parentRect.left/top is the container's distance from viewport
        // offsetX/Y is the distance from the finger to the image's top-left
        const x = touch.clientX - parentRect.left - offsetX;
        const y = touch.clientY - parentRect.top - offsetY;

        element.style.left = `${x}px`;
        element.style.top = `${y}px`;

        event.preventDefault(); // Prevent scrolling while dragging
    }, { passive: false });

    // ["touchend", "touchcancel"].forEach((eventName) => {
    //     element.addEventListener(eventName, () => {
    //         isDragging = false;
    //         // Check for overlap with mouth here
    //         const mouth = document.querySelector("#mouth");
    //         if (isOverlapping(element, mouth)) {
    //             element.classList.add("eaten");
    //         }
    //     });
    // });
}






function centerRandom(min, max) {
    return Math.random() * (max - min) + min;
}

window.addEventListener('load', () => {

    const basketRect = basketImg.getBoundingClientRect();
    const parentRect = basketImg.offsetParent.getBoundingClientRect();

    foods.forEach(food => {
        food.style.position = 'absolute';
        // ⭐ random layer
        food.style.zIndex = Math.floor(Math.random() * 100);

        const maxX = basketRect.width - food.offsetWidth;
        const maxY = basketRect.height - food.offsetHeight;
        // center of basket
        const centerX = maxX / 2;
        const centerY = maxY / 2;

        const spread = 0.6; // try 0.2–0.5

        const randomX = centerX + (Math.random() - 0.5) * maxX * spread;
        const randomY = centerY + (Math.random() - 0.5) * maxY * spread;
    
        food.style.left = randomX + 'px';
        food.style.top = randomY + 'px';

    });

});


// // MOUTH DRAGGING

function isOverlapping(el1, el2) {

    const r1 = el1.getBoundingClientRect();
    const r2 = el2.getBoundingClientRect();

    return !(
        r1.right < r2.left ||
        r1.left > r2.right ||
        r1.bottom < r2.top ||
        r1.top > r2.bottom
    );
}


let infoBtn = document.querySelector("#info-btn");
let infoModal = document.querySelector("#info-modal");
let overlay = document.querySelector("#overlay");
let closeBtn = document.querySelector("#close-btn");

function toggleModal() {
    infoModal.classList.toggle("open");
    overlay.classList.toggle("open");
  }

infoBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && infoModal.classList.contains("open")) toggleModal();
});