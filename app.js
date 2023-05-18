let menu = document.querySelector('#menu-bar'); 
let navbar = document.querySelector('.links')

    menu.addEventListener('click', () => {
        menu.classList.toggle('active'); 
         navbar.classList.toggle('active'); 

     })

let cross = document.querySelector('.fa-times'); 

     cross.addEventListener('click', () =>{
        navbar.classList.remove('active'); 
        
     })