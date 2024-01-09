let palabrita;
let cant_errores = 0; //cuantas veces me equivoqué
let cant_aciertos = 0; //cuantas letras acerté
let comodinActivado= false;

const palabras = ['ESCALAFON'];
const btn = id('jugar');
const imagen = id( 'imagen' );
const comodin = id('comodin');

const btn_letras = document.querySelectorAll( "#letras button" );

const cant_letras = 0;
/* click en iniciar juego */
btn.addEventListener('click', iniciar );



function iniciar(event){
    imagen.src = '../data/img/img0.png';
    btn.disabled = true;
    cant_errores = 0;
    cant_aciertos = 0;
    


    const parrafo = id( 'palabradivinar' );
    parrafo.innerHTML = ''; 

    id('resultado').innerHTML= '';

    const cant_palabras = palabras.length;
    const valor_al_azar = obtener_random( 0, cant_palabras );

    palabrita = palabras[ valor_al_azar ];
    console.log( palabrita );
    const cant_letras = palabrita.length;


    for( let i = 0; i < btn_letras.length ; i++ ){
        btn_letras[ i ].disabled = false;
    }

    for( let i = 0; i < cant_letras; i++ ){
        const span = document.createElement( 'span' );
        parrafo.appendChild( span );
    }

}

/* click de adivinar letra */
for( let i = 0; i < btn_letras.length ; i++ ){
    btn_letras[ i ].addEventListener( 'click', click_letras );
}


function click_letras(event){
    

    const spans = document.querySelectorAll( '#palabradivinar span' );
    const button = event.target; //cuál de todas las letras, llamó a la función.
    button.disabled = true;


    const letra = button.innerHTML.toLowerCase( );
    const palabra = palabrita.toLowerCase( ); // .toUpperCase( )

    let acerto = false;
    for( let i = 0; i < palabra.length;  i++ ){
        if( letra == palabra[i] ){
            //la variable i es la posición de la letra en la palabra.
            //que coincide con el span al que tenemos que mostarle esta letra...
            spans[i].innerHTML = letra;
            cant_aciertos++;
            acerto = true;
        }
    }

    if( acerto == false ){
        cant_errores++;
        const source = `../data/img/img${cant_errores}.png` ;
        imagen.src = source;
    }

    if( cant_errores == 6 ){
       mostrarPopup('ganaste') + palabrita;
        game_over( );
    }else if( cant_aciertos == palabrita.length ){
        mostrarPopup('ganaste');
        game_over( );
        }
    console.log( "la letra " + letra + " en la palabra " + palabra + " ¿existe?: " + acerto );

   
}

comodin.addEventListener('click', activarComodin);


function activarComodin() {

    comodinActivado= true;
    comodin.disabled=true;
    const palabra = palabrita.toLowerCase();
    
    if (palabra.length >= 2) {
        const primeraLetra = palabra.charAt(0);
        const ultimaLetra = palabra.charAt(palabra.length - 1);

        // Busca los botones correspondientes a la primera y última letra
        const botonPrimeraLetra = document.querySelector(`button[data-letra="${primeraLetra}"]`);
        const botonUltimaLetra = document.querySelector(`button[data-letra="${ultimaLetra}"]`);

        // Simula los clics en los botones
        if (botonPrimeraLetra) {
            botonPrimeraLetra.click();
        }
        if (botonUltimaLetra) {
            botonUltimaLetra.click();
        }
    }
    
}

function mostrar(){
    document.getElementById('comodin').style.display = 'inline-block';
}

function mostrarPopup(resultado) {
    const popup = document.getElementById('popup');
    const popupPalabra = document.getElementById('popup-palabra');
    const popupImage = document.getElementById('popup-image');
    const cerrarButton = document.getElementById('cerrar-popup');
    const siguienteButton = document.querySelector('.siguiente-button');

    if (resultado === 'ganaste') {
        popupImage.src = '../data/img/GANASTE.png';
        popupPalabra.textContent = ' '; // Deja el contenido del párrafo vacío si ganaste.
        siguienteButton.classList.add('ganaste-button');

    } else if (resultado === 'perdiste') {
        popupImage.src = '../data/img/PERDISTE.png';
        popupPalabra.textContent = palabrita; // Muestra la palabra directamente.
        siguienteButton.classList.add('perdiste-button');
    }

    popup.style.display = 'inline-block';

    // Configura el evento de clic para cerrar el popup
    cerrarButton.onclick = function () {
        cerrarPopup();
    };
}

/* fin del juego */
function game_over() {
    for (let i = 0; i < btn_letras.length; i++) {
        btn_letras[i].disabled = true;
    }

    btn.disabled = false;

    if (cant_errores === 6) {
        mostrarPopup('perdiste');
        const parrafo = id('palabradivinar');
        parrafo.classList.add('encima-imagen'); // Agrega la clase encima-imagen
    } else if (cant_aciertos === palabras.length) {
        mostrarPopup('ganaste');
    }
}

game_over( );
