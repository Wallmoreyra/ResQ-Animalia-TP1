function redirigir() {
    window.location.href = "../pg-Nav/aniCata.html";
}


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
                    document.getElementById('imagenAnimal-00').src = animal.imagen['00'];
                    document.getElementById('edadAnimal').textContent = 'Edad: ' + animal.edad;
                    document.getElementById('localidadAnimal').textContent = 'Localidad: ' + animal.localidad;
                    document.getElementById('razaAnimal').textContent = 'Raza: ' + animal.raza;
                    document.getElementById('tamañoHabitatAnimal').textContent = 'Tamaño de habitad: ' + animal.tamañoHabitad;
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


