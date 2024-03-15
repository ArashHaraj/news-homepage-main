let menu = document.getElementById('mobile-menu')
let openMenu = document.getElementById('open-menu-btn')
let closeMenu = document.getElementById('close-menu-btn')


let id = null
let menuAnimation = (firstValue , secondValue) => {
    let left = firstValue;
    clearInterval(id)
    id = setInterval( frame , 5);
    function frame() {
        if(left == secondValue) { 
            clearInterval(id) 
            if(secondValue > firstValue) {menu.style.display = 'none'}
        }
        else{
            if(secondValue > firstValue){
                left++
                menu.style.left = left + '%';
            }else{
                left--
                menu.style.left = left + '%';
            }
        }    
    }
} 

function openButton() {
    menu.style.setProperty('display' , 'block')
    menuAnimation(100 , 0)
}
function closeButton() {
    menuAnimation(0, 100)
}

openMenu.addEventListener("click" ,() => openButton())
closeMenu.addEventListener("click" ,() => closeButton())