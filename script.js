
//con esta variable digamos que guardamos la respuesta del ususario
const aceptar = document.getElementById('botones') 

aceptar.addEventListener('click',()=>{document.querySelector('.caja-principal').style.display='none';localStorage.setItem('cookiesAceptas','true')});
// esto lo que hace es recibir la orden del usuario y si  es acepar desaparece el anuncio y guarda esa informacion para que no vuelva a aparecer 

if (localStorage.getItem('cookiesAceptas') === 'true'){

document.querySelector('.caja-principal').style.display='none';

    }

    // esto lo que hace es que cuando volvmaos a abrir la paagina rebice la informacion y si ya hay un un cookiesAceptas no aparece el anuncio pero si no aparece 


const cerrar = document.getElementById('boton-cerrar')

cerrar.addEventListener('click', () =>{document.querySelector('.caja-principal').style.display='none';localStorage.setItem('cookiesAceptas','true')});

