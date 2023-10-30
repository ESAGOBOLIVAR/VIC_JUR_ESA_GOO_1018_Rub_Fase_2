//funcion para extraer el consecutivo del numero
//@param {String} consecutivo: es el ultimo consecutivo encontrado de la respuesta de solicitudes
function extraerNumeroEnteroDelUltimoConsecutivo(consecutivo) {

    // console.log("CONSECUTIVO EXTRARER");
    // console.log(consecutivo);

    let numeroEntero = consecutivo.match(/\d+/);


    if (numeroEntero !== null) {
        numeroEntero = parseInt(numeroEntero[0], 10);

        //aumentar en 1 el consecutivo
        numeroEntero=numeroEntero+1;

        //@return {String} numeroEntero: es el numero entero
        return numeroEntero;

    } else {
        return 1;
    }
}