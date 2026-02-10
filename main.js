
// js code extracted from class demos from last year


$(document).ready(function() {$("#sandwich").draggable(); })
$(document).ready(function() {$("#strawberries").draggable(); })
$(document).ready(function() {$("#shrimp").draggable(); })
$(document).ready(function() {$("#chocolatemilk").draggable(); })


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