(function(panclaje){

                                            //Array con varios nombres como valor para su uso en generadorNombres()

        const nombres = ['missy', 'rex', 'dog', 'bob', 'luna', 'max', 'sebes', 'ginna', 'balto', 'taxi'];

    function generadorNombres(){

                                            //variable nmascota adopta valor aleatorio del array nombres

        let nmascota = nombres[Math.floor(Math.random() * nombres.length)];

        return nmascota;
    }
    function generadorMascotas(){

                            //Declaración array que almacenará los objetos mascota
    let mascotas = [];
                            //Bucle asignación valores array

    for(i = 1; i<=1000; i++){

        mascotas[i] = {id:i,nombre: generadorNombres()+ ' ' + generadorNombres(),edad:i,precio:i};

    }
                            //Return de array con propiedades asignadas
    return mascotas;
};

function imprimirMascotas(panclaje){

                            //String para almacenar el contenido de mascotas para posterior impresión en pantalla

    let impresion = '';
                            //Almacenamos el resultado de generadorMascotas(), ya que si no no se nos imprimirá en el bucle

    let mascotas = generadorMascotas();

                            //Bucle creación <li></li>
    for(i in mascotas){

        impresion += `
        <li>
            <p>Identificador: ${mascotas[i].id}</p>
            <p>Nombre: ${mascotas[i].nombre}</p>
            <p>Edad: ${mascotas[i].edad}</p>
            <p>Tasa de adopción: ${mascotas[i].precio}€</p>
            <span><button class='btn-comprar' data-id="${mascotas[i].id}">¡Adoptar!</button></span>
        </li>
        `;
        //'<li>Identificador mascota: ' + mascotas[i].id + ', nombre: ' + mascotas[i].nombre +', edad: ' + mascotas[i].edad + ', tasa de adopción: ' + mascotas[i].precio + '€</li><br />';
    }
                            //Impresión en pantalla de resultado bucle

    panclaje.innerHTML = impresion;

    document.querySelectorAll('.btn-comprar').forEach(function(btn){
        const id = btn.dataset.id;
        btn.onclick = function(){alert('Añadido ' + id + ' al proceso de adopción.')};


    });
};
                            //Llamada a función al abrir ventana
imprimirMascotas(panclaje);
})(document.body.children[0].children[0]);
