const foods = document.querySelectorAll('.food img');
const basketImg = document.querySelector('#basket');

function aboutPage() {
    var popup = document.getElementById("aboutPage");
    popup.classList.toggle("show");
  }

$(document).ready(function () {
    const draggableIds = ["#sandwich", "#strawberries", "#shrimp", "#chocolatemilk", "#egg", "#salad", "#salad"];
    // Get the element with the id "myElement"

    draggableIds.forEach((id) => {
        $(id).draggable({
            containment: "window",

            stop: function(event, ui) {

            const mouth = document.querySelector("#mouth");

            if (isOverlapping(this, mouth)) {
                $(this).addClass("eaten");
            }
         }
        });
        enableTouchDrag(document.querySelector(id));
    });

    $("#mouth").droppable({
        accept: ".food img",   // only allow food items
        drop: function(event, ui) {
    
            // ui.draggable = the element being dragged
            $(ui.draggable).addClass("eaten");
    
        }
    // });
    // $("#mouth").click(function() {

    //     $(".food").addClass("eaten");   // hides all food at once
    
    //     $(this).css("transform", "scale(2)");
    
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

    ["touchend", "touchcancel"].forEach((eventName) => {
        element.addEventListener(eventName, () => {
            isDragging = false;
            // Check for overlap with mouth here
            const mouth = document.querySelector("#mouth");
            if (isOverlapping(element, mouth)) {
                element.classList.add("eaten");
            }
        });
    });
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


["touchend", "touchcancel"].forEach((eventName) => {
    element.addEventListener(eventName, () => {
        isDragging = false;

        const mouth = document.querySelector("#mouth");

        if (isOverlapping(element, mouth)) {
            element.classList.add("eaten");
        }
    });
});


// $(document).ready(function() {
//     $("#sandwich").hover(function(){
//     $("#sandwich").expand(); });
//     })


// $(document).ready(function() {
//     $("#bananas").click(function(){
//     $("#ufo").hide(); }); 
//     })


// $(document).ready(function() {
//     $("#ufo").hover(function(){
//     $(this).hide();
//      }); 
//     })


// $(document).ready(function()  {
//     $("#ufo").hover(function(){
//             $("#earthling").append(" we come in peach");
//             });
//     })

// $(document).ready(function()  {
//     $("#ufo").hover(function(){
//         $("#earthling").css("color", "violet");
//             });
//         })