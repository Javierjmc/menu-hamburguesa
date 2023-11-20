const iconoBurger=document.getElementById('icono-hamburguesa');
const menu=document.getElementById('menu');
const contenedorPrincipal=document.getElementById('contenedor-principal')

iconoBurger.addEventListener('click', ()=>{
    menu.classList.toggle('translate-y-[0]')
    contenedorPrincipal.classList.toggle('translate-y-[0]')
    iconoBurger.classList.toggle('invert')
}
);