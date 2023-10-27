
function generarCards(datos) {
    const contenedor = document.querySelector('.contenedor');
    contenedor.innerHTML = '';

    datos.animales.forEach(animal => {
        
        const card = document.createElement('div');
        card.className = 'card';
        card.setAttribute('data-id', animal.id);
    
        const nombre = document.createElement('h3');
        nombre.textContent = animal.nombre;
    
        const imagen = document.createElement('img');
        imagen.src = animal.imagen['00'];
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
            window.location.href = `../pg-DetAnim/aniDet.html?id=${animalId}`;
        })
    
        contenedor.appendChild(card);
    });

}



const botonActualizar = document.querySelector('.botonActualizar');
botonActualizar.addEventListener('click', () => {
    //alert("hola wachin!!")
    fetch('../api/db.json')
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            generarCards(datos)
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
        });
});

// function actualizarLista() {
//     console.log("hola wachin!!!")
// };


