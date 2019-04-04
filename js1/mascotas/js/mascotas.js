(function(panclaje){
                            //Constante carrito
    const carrito=[];
                    

    function generadorNombres(){

                             //Array con varios nombres como valor para su uso en generadorNombres()

         const nombres = ['missy', 'rex', 'dog', 'bob', 'luna', 'max', 'sebes', 'ginna', 'balto', 'taxi'];

                                            //variable nmascota adopta valor aleatorio del array nombres

        let nmascota = nombres[Math.floor(Math.random() * nombres.length)];

        return nmascota;
    };
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
            <p class='mid' data-mid="${mascotas[i].id}">Identificador: ${mascotas[i].id}</p>
            <p class='mnombre' data-mnombre="${mascotas[i].nombre}">Nombre: ${mascotas[i].nombre}</p>
            <p>Edad: ${mascotas[i].edad}</p>
            <p class='mprecio' data-mprecio="${mascotas[i].precio}">Tasa de adopción: ${mascotas[i].precio}€</p>
            <span><button class='btn-comprar' data-id="${mascotas[i].id}">¡Adoptar!</button></span>
        </li>
        `;
        //'<li>Identificador mascota: ' + mascotas[i].id + ', nombre: ' + mascotas[i].nombre +', edad: ' + mascotas[i].edad + ', tasa de adopción: ' + mascotas[i].precio + '€</li><br />';
    }
                            //Impresión en pantalla de resultado bucle

    panclaje.innerHTML = impresion;

    document.querySelectorAll('.btn-comprar').forEach(function(btn){
        btn.onclick = function(){
            comprarMascota(this.parentElement.parentElement);
        }
        
    });
    };

    function comprarMascota(mascotaElement){

                                                //Comprobación mascota no ya seleccionada (comparando la id de la mascota)

        const mid = mascotaElement.querySelector('.mid').dataset.mid;
        const yaselected = carrito.includes(mid);

        if(!yaselected){
                                                        //Declaración constantes a usar

            const mnombre = mascotaElement.querySelector('.mnombre').dataset.mnombre;
            const mprecio = mascotaElement.querySelector('.mprecio').dataset.mprecio;
            
            const boton = mascotaElement.querySelector('.btn-comprar');

            carrito.push(mid);

                                                    //Creación elementos de la lista carrito

            const mascotaSeleccionada = document.querySelector('#carrito>ol').appendChild(document.createElement('li'));

                                                    //Estilos botón y mascotaSeleccionada

            mascotaElement.setAttribute('class', 'mascota-seleccionada');

                                                    //Seguridad botón
            // boton.disabled = true;
            // boton.onclick = "";

                                                    //Impresión en pantalla del contenido del carrito

            mascotaSeleccionada.innerHTML = mnombre + ' ' + mprecio + '€';

        }else{
        
            console.log('Carrito: ya añadido ', mid);
            
        }

    };

                            //Llamada a función al abrir ventana
imprimirMascotas(panclaje);


})(document.body.children[1].children[0]);



