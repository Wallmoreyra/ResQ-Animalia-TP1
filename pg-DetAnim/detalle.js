function redirigir() {
    window.location.href = "../pg-Nav/aniCata.html";
};




document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const animalId = urlParams.get('id');

    if (animalId !== null) {
        console.log( animalId);
        console.log('se recivio el id: ', animalId);
        fetch('../api/db.json')
            .then(response => response.json())
            .then(data => {
                const animal = data.animales.find(item => item.id == animalId);
                console.log(animal);
                if (animal) {
                    document.getElementById('nombreAnimal').textContent ='Nombre: ' + animal.nombre;
                    document.getElementById('imagenAnimal-00').src = animal.imagen[0];
                    document.getElementById('edadAnimal').textContent = 'Edad: ' + animal.edad;
                    document.getElementById('generoAnimal').textContent = 'Genero: ' + animal.genero;
                    document.getElementById('localidadAnimal').textContent = 'Localidad: ' + animal.localidad;
                    document.getElementById('razaAnimal').textContent = 'Raza: ' + animal.raza;
                    document.getElementById('especieAnimal').textContent = 'Especie: ' + animal.especie;
                    document.getElementById('vacunasAnimal').textContent = 'Vacunas: ' + animal.Vacunas;
                    document.getElementById('EstirilizadoAnimal').textContent = 'Esterilizado: ' + animal.Estirilizado;
                    document.getElementById('cuidadosEspeciales').textContent = `Cuidados especiales: ${animal.cuidadosEspeciales}`;
                    document.getElementById('descripcionAnimal').textContent = `Descripción: ${animal.descripcion}`;
                } else {
                    console.log('No se encontraron datos para la ID del animal:', animalId);
                }
            })
            .catch(error => {
                console.error('Error al cargar los datos:', error);
            });
    } else {
        console.log('No se recibió la ID del animal.');
    }
});
var img = 0;
const imgSig = document.querySelector('.sigImg');
imgSig.addEventListener('click', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const animalId = urlParams.get('id');
    fetch('../api/db.json')
            .then(response => response.json())
            .then(data => {
                const animal = data.animales.find(item => item.id == animalId);
                var numImg = animal.imagen.length;
                if(img < numImg - 1){
                    img++;
                } else {
                    img = 0;
                }
                document.getElementById('imagenAnimal-00').src = animal.imagen[img];
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
        });
});

const antImg = document.querySelector('.antImg');
antImg.addEventListener('click', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const animalId = urlParams.get('id');
    fetch('../api/db.json')
            .then(response => response.json())
            .then(data => {
                const animal = data.animales.find(item => item.id == animalId);
                var numImg1 = animal.imagen.length;
                if(img == 0){
                    img = numImg1 - 1;
                } else {
                    img--;
                }
                document.getElementById('imagenAnimal-00').src = animal.imagen[img];
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
        });
});


