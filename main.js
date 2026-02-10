
// js code extracted from class demos from last year

$(document).ready(function () {
    const draggableIds = ["#sandwich", "#strawberries", "#shrimp", "#chocolatemilk"];

    draggableIds.forEach((id) => {
        $(id).draggable();
        enableTouchDrag(document.querySelector(id));
    });
});

function enableTouchDrag(element) {
    if (!element) return;

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let offsetX = 0;
    let offsetY = 0;
    let suppressClick = false;

    element.addEventListener(
        "touchstart",
        (event) => {
            const touch = event.touches[0];
            const rect = element.getBoundingClientRect();

            isDragging = true;
            startX = touch.clientX;
            startY = touch.clientY;
            offsetX = touch.clientX - rect.left;
            offsetY = touch.clientY - rect.top;
            suppressClick = false;
        },
        { passive: true }
    );

    element.addEventListener(
        "touchmove",
        (event) => {
            if (!isDragging) return;

            const touch = event.touches[0];
            const parentRect = element.offsetParent.getBoundingClientRect();

            const deltaX = Math.abs(touch.clientX - startX);
            const deltaY = Math.abs(touch.clientY - startY);
            if (deltaX > 6 || deltaY > 6) suppressClick = true;

            element.style.left = touch.clientX - parentRect.left - offsetX + "px";
            element.style.top = touch.clientY - parentRect.top - offsetY + "px";

            event.preventDefault();
        },
        { passive: false }
    );

    ["touchend", "touchcancel"].forEach((eventName) => {
        element.addEventListener(eventName, () => {
            isDragging = false;
        });
    });

    element.addEventListener("click", (event) => {
        if (suppressClick) {
            event.preventDefault();
            event.stopPropagation();
            suppressClick = false;
        }
    });
}



// obtained from chatgpt
const foods = document.querySelectorAll('.food img');
const basketImg = document.querySelector('#basket');

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