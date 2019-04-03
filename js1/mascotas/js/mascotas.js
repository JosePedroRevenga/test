(function(panclaje){
function generadorMascotas(){

                            //Declaración array que almacenará los nombres
    let mascotas = [];

                            //Bucle asignación nombres array

    for(i = 0; i<1000; i++){

        mascotas[i] = 'Mascota' + (i+1);

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

        impresion += '<li>' + mascotas[i] + '</li>';
    }
                            //Impresión en pantalla de resultado bucle

    panclaje.innerHTML = impresion;
};

imprimirMascotas(panclaje);
})(document.body.children[0].children[0]);
