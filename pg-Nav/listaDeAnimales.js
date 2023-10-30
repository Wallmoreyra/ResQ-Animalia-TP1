function filtradoPorRaza(datosAnimales, especie) {
    return datosAnimales.animales.filter(animal => animal.especie === especie);
};
function cerrar() {
    const iframe = document.getElementById('iframeContenedor');
    iframe.style.display = 'none';
    const cards = document.getElementById('cardConteiner');
    cards.style.display = 'flex';
    const botonesNav = document.getElementById('botonesPagNav');
    botonesNav.style.display = 'block';
    const botonCerrar = document.getElementById('botonCerrar');
    botonCerrar.style.display = 'none';
    const botonesFiltro = document.getElementById('botonesPagNav01');
    botonesFiltro.style.display = 'block';
};

function generarCards(datos) {
    
    const contenedor = document.querySelector('.contenedor');
    contenedor.innerHTML = '';

    datos.forEach(animal => {
        
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-id', animal.id);
    
        const nombre = document.createElement('h3');
        nombre.textContent = animal.nombre;
    
        const imagen = document.createElement('img');
        imagen.src = animal.imagen[0];
        imagen.alt = 'Imagen del animal';
    
        const racAge = document.createElement('div');
        racAge.className = 'racAge';
        const raza = document.createElement('p');
        raza.textContent = 'Raza: ' + animal.raza;
        const edad = document.createElement('p');
        edad.textContent = 'Edad: ' + animal.edad;
    
        racAge.appendChild(raza);
        racAge.appendChild(edad);
    
        card.appendChild(nombre);
        card.appendChild(imagen);
        card.appendChild(racAge);

        imagen.addEventListener('click', () => {
            const animalId = card.getAttribute('data-id');
            console.log(animalId)
            //window.location.href = `../pg-DetAnim/aniDet.html?id=${animalId}`;
            const iframe = document.getElementById('iframeContenedor');
            const cards = document.getElementById('cardConteiner');
            const botonesNav = document.getElementById('botonesPagNav');
            const botonCerrar = document.getElementById('botonCerrar');
            const botonesFiltro = document.getElementById('botonesPagNav01');
            iframe.src= `../pg-DetAnim/aniDet.html?id=${animalId}`;
            botonesNav.style.display = 'none';
            cards.style.display = 'none';
            iframe.style.display = 'block';
            botonCerrar.style.display = 'block';
            botonesFiltro.style.display = 'none';

        })
    
        contenedor.appendChild(card);
    });
    
    //console.log(datos.length);
}

//Cambiar cuando ya esten los estilos esta es la funcion permamente
function inicioDePag(){
    fetch('../api/db.json')
            .then(response => response.json())
            .then(datos => {
                //console.log(datos.animales);
                generarCards(datos.animales);
                pagActual = 0;
                verPag(pagActual);
            })
            .catch(error => {
                console.error('Error al cargar los datos:', error);
            });
}
document.addEventListener('DOMContentLoaded', function() {
    const botonActualizar = document.querySelector('.botonActualizar');
    botonActualizar.addEventListener('click', () => {
        //alert("hola wachin!!")
        fetch('../api/db.json')
            .then(response => response.json())
            .then(datos => {
                //console.log(datos.animales);
                generarCards(datos.animales);
                pagActual = 0;
                verPag(pagActual);
            })
            .catch(error => {
                console.error('Error al cargar los datos:', error);
            });
        }
    );
});

//Esta funcion esta momentanea mientras se agregan los estilos
// const botonActualizar = document.querySelector('.botonActualizar');
// botonActualizar.addEventListener('click', () => {
//     //alert("hola wachin!!")
//     fetch('../api/db.json')
//         .then(response => response.json())
//         .then(datos => {
//             //console.log(datos.animales);
//             generarCards(datos.animales);
//             pagActual = 0;
//             verPag(pagActual);
//         })
//         .catch(error => {
//             console.error('Error al cargar los datos:', error);
//         });
//     }
// );

const mostrarGatos = document.querySelector('.mostrarGatos');
mostrarGatos.addEventListener('click', () => {
    //alert("hola wachin!!")
    fetch('../api/db.json')
        .then(response => response.json())
        .then(datos => {
            console.log(filtradoPorRaza(datos, "Gato"));
            datos = filtradoPorRaza(datos, "Gato");
            generarCards(datos);
            pagActual = 0;
            verPag(pagActual);
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
        });
});
const mostrarPerros = document.querySelector('.mostrarPerros');
mostrarPerros.addEventListener('click', () => {
   
    fetch('../api/db.json')
        .then(response => response.json())
        .then(datos => {
            datos = filtradoPorRaza(datos, "Perro");
            generarCards(datos);
            pagActual = 0;
            verPag(pagActual);
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
        });
});
const mostrarOtros = document.querySelector('.mostrarOtros');
mostrarOtros.addEventListener('click', () => {
    
    fetch('../api/db.json')
        .then(response => response.json())
        .then(datos => {
            datos = filtradoPorRaza(datos, "Otro");
            generarCards(datos);
            pagActual = 0;
            verPag(pagActual);
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
        });
        
});

const cardPorPag = 6;
let pagActual = 0;
var cards = document.querySelectorAll('.card');
const pagAnterior = document.querySelector('.pagina-anterior');
const pagSiguiente = document.querySelector('.pagina-siguiente');


function verPag(page) {
    let cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        if (index >= page * cardPorPag && index < (page + 1) * cardPorPag){
        card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}


pagAnterior.addEventListener('click', () => {
    if (pagActual > 0) {
        pagActual--;
        verPag(pagActual);
    }
});

pagSiguiente.addEventListener('click', () => {
    console.log(cards.length);
    cards = document.querySelectorAll('.card');
    if (pagActual < Math.ceil(cards.length / cardPorPag) - 1) {
        pagActual++;
        verPag(pagActual);
    }
});
inicioDePag();
verPag(pagActual);

