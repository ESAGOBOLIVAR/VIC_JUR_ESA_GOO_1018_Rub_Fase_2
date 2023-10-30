//parametros globales de los ids
//Implementado por mauricio.araujo@servinformacion.com
function parametrosGlobales() {
    parametros = {
        //ids de las base a utilizar
        idDataBase: {
            idSheetReponses:
                "1bqwGoZnAtC7tmlkEARROvgcYd2ssDl8btsSVBAkVVWg", //base de datos id respuestas
            idSheetStatus: "16oaAbb0-qelzIBJLlHmdEwuucOT4DEbOg8w8PTueZ-w", //base de datos id estados
            idSheetLogs: "1kq_NX1Go33_zzcAya2Ma7rjsYTt4NHfAFEMHe6nRM8E",  //base de datos id logs
            idSheetParameters: "1-PI4uE44RY4dJRBoXOMRP_u_xH3isnGg9OIc-ZvHOOY",  //base de datos id parametros

        },

        GoogleForms: {
            idGoogleFormsFinanciera: "1BRfFgghzjs_ayD_QBObBlrMpgigbi82Ayvjjo9NrQ_U",
            idGoogleFormsInmuebles: "1OCU7XFm-OaXp2ikYLsqCd3Sh5tPsJ0PIZ3A-0NHY-NM",
            idGoogleFormsJuridico: "1nz8q_zFRe9t-vmIKQ1CGwQRkG8kh7aKV_4EqB-7U-eM",
            idGoogleFormsMesaDeDinero: "1e7zDyX7oy749tHXtEUEa7DlQvh95_aoI6cDjNakviqY"
        },
        idCarpetas: {
            idFolder: "15KNCMpJF4L7yKvAGKATi5x7_Tj0OV-1L", //id carpeta de almacenamiento de pdfs donde se mueven
        },
        //nombre de las tablas utilizar
        nameTables: {
            nameSheet: "Respuestas de formulario 1",
            nameSheetStatus: "Estados solicitudes",
            nameSheetLogs: "Gestión de solicitudes",
            nameSheetEmail: "Gestión de solicitudes",
        },
        UrlWeb: {
            urlAppRub: "https://script.google.com/a/macros/segurosbolivar.com/s/AKfycbwqSQfuKityPX9XP-GyNiu6fasTpRbBummIsKLKKEfRvOC272uAnTExBhzlc3jSCAjaKg/exec"
        }

    };

    return parametros;
}



//conexion a la base de datos
function conexionBaseDeDatos(idBaseDeDatos) {
    //const { idBaseDeDatos } = parametrosGlobales();
    //se abre la conexion de la base de datos
    const BD = SpreadsheetApp.openById(idBaseDeDatos);
    //@return {object} BD: se retorna la base de datos
    return { BD };
}

//asignar nombre
//@param {String} nombreSheet: es el nombre de la hoja de calculo
function asignarNombreHojaDeCalculo(nombreSheet = "", idBaseDeDatos = "") {
    //se obtiene la base de datos
    const { BD } = conexionBaseDeDatos(idBaseDeDatos);
    //se obtiene el nombre de la base de datos
    const sheetHoja = BD.getSheetByName(nombreSheet);
    //@return {Array} sheetHoja: hoja de la base de datos
    return [sheetHoja];
}

//funcion para obtener la primera fila de cada tabla
function obtenerPrimeraRegistroCalculo(nombreSheet, idBaseDeDatos) {
    //obtener la hoja de calculo
    const [sheetHoja] = asignarNombreHojaDeCalculo(nombreSheet, idBaseDeDatos);

    //arreglo de rango de datos
    const dataSheetHoja = sheetHoja.getDataRange().getValues();

    const dataSheetHojaFirstData = dataSheetHoja.shift();

    //@return [Array] dataSheetHojaFirstData: es el arreglo de la primera fila nombres de las columnas
    return [dataSheetHojaFirstData];
}

