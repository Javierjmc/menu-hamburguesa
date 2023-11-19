const iconoBurger=document.getElementById('icono-hamburguesa');
const menu=document.getElementById('menu');

iconoBurger.addEventListener('click', ()=>{
    menu.classList.toggle('translate-y-[0]')
    iconoBurger.classList.toggle('invert')
}
);