// For mobile menu, borrowed largely from web design assignment.

// Define the variables we'll be using
let container = document.querySelector('nav');
let button = document.querySelector('.hamburger');
let maxWidth = "768px";

button.addEventListener('click', () => {
   // Appear
   if (!container.classList.contains('active')) {
      
      container.classList.add('active');
      container.style.display = "flex";

   // Disappear
   } else {
      container.style.display = "none";
      container.classList.remove('active');
   };
})

container.addEventListener('click', () => {
    // Disappear
    if (container.classList.contains('active')) {

        container.style.display = "none";
        container.classList.remove('active');
    } 
})

// Create event listener on window resize
window.addEventListener('resize', checkForWindowResize);

// Clear stuff on resize
function checkForWindowResize() {
   if (window.matchMedia(`(min-width: ${maxWidth})`).matches) {
      container.style.display = "flex";
      container.classList.remove('active');
   } else {
      container.style.display = "none";
   }
}