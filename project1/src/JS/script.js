
function menu() {
    const Burger = document.querySelector('.burger');
    const Menu = document.querySelector('.nav-menu');
    if(Burger.classList.contains('clicked-burger') == false){
        Burger.classList.add('clicked-burger')
        Menu.classList.remove('hidden')
    }else{
        Burger.classList.remove('clicked-burger')
        Menu.classList.add('hidden')
    }
}