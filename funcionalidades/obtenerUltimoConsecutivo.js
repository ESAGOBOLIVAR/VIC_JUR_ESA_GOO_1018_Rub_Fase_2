//funcion para obtener el ultimo consecutivo
//@param {String} nombreTabla: es el nombre de la tabla a consultar
//@param {String} idBaseDeDatos: es el identificador de la base de datos
function obtenerUltimoConsecutivo(nombreTabla, idBaseDeDatos) {

    let dataTablaRespuestasDeFormulario1 = readAllArray([nombreTabla, idBaseDeDatos]);

    //data en arreglo de arreglos
    dataTablaRespuestasDeFormulario1 = JSON.parse(dataTablaRespuestasDeFormulario1);

    //girar la data para obtener el ultimo registro
    dataTablaRespuestasDeFormulario1.reverse();

    //buscar el elemento dodne la longitud sea mayor a cero es decir que traiga consecutivo
    let busqueda = dataTablaRespuestasDeFormulario1.find(el => el[7].length > 0);

    let consecutivo = null;
    //si lo encuentra entonces 
    if (busqueda != undefined) {
        console.log(busqueda);
        let valorConsecutivo = busqueda[7];

        console.log("VALOR CONSECUTIVO -> ", valorConsecutivo);
        //funcion para obtenener el consecutivo en numero entero
        let numeroDeUltimoConsecutivo = extraerNumeroEnteroDelUltimoConsecutivo(valorConsecutivo);
        consecutivo = "SOL" + String(numeroDeUltimoConsecutivo).padStart(4, 0) + "__";
    } else { //en caso de que no lo encuentre el codigo seria SOLnull__
        consecutivo = "SOL" + consecutivo + "__";
    }


    console.log("CONSECUTIVO");
    console.log(consecutivo);
    //@return {String} consecutivo: es el consecutivo con el identificador
    return consecutivo;
}


function probar() {

    let nameSheet = "Respuestas de formulario 1";
    let idSheetReponses =
        "1bqwGoZnAtC7tmlkEARROvgcYd2ssDl8btsSVBAkVVWg"; //base de datos id

    obtenerUltimoConsecutivo(nameSheet, idSheetReponses)
}