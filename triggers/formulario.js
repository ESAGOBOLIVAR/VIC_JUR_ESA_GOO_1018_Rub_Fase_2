
//funcion para enviar el formulario de Almacenamiento de documentos
//@param {Object} data: es el arreglo de la data del google form
//@param {Object} subcategoria: es el nombre de la subcategoria

function formulario(data, subcategoria) {
    //desestructuracion parametros globales
    const { idDataBase, idCarpetas, nameTables } = parametrosGlobales();
    const { idSheetReponses, idSheetLogs, idSheetStatus } = idDataBase;
    const { nameSheet, nameSheetLogs, nameSheetStatus } = nameTables;
    const { idFolder } = idCarpetas;

    //desestructuracion de la data
    let { response } = data;
    //capturar datos google form
    const respuestas = response.getItemResponses();

    console.log("RESPUESTAS");
    console.log(respuestas);
    const nombreCompania = respuestas[0].getResponse();
    const nitCompaniaSolicitante = respuestas[1].getResponse();
    const identificacionCompania = respuestas[2].getResponse();
    const justificacionDeLaSolicitud = respuestas[3].getResponse();
    let acuerdoDeConfidencialidadFirmado = respuestas[4].getResponse()[0];
    //obtener consecutivo
    let consecutivo = obtenerUltimoConsecutivo(nameSheet, idSheetReponses);

    let fechaActual = obtenerFechaActualFormateada();


    console.log("Acuerdo de la solicitud url pdf", acuerdoDeConfidencialidadFirmado);


    acuerdoDeConfidencialidadFirmado = "https://drive.google.com/open?id=" + acuerdoDeConfidencialidadFirmado;


    let estado = "En espera";

    //datos
    let lastDataSheet = [fechaActual, "", nombreCompania, nitCompaniaSolicitante, identificacionCompania, justificacionDeLaSolicitud, acuerdoDeConfidencialidadFirmado, consecutivo, estado];

    //insertar en la hoja de calculo respuestas de formulario 1
    insertArray([[...lastDataSheet, subcategoria], nameSheet, idSheetReponses]);


    //insertar en la base de datos Logs tabla Gestión de solicitudes
    insertArray([[...lastDataSheet, subcategoria], nameSheetLogs, idSheetLogs]);


    //Registrar estado
    //insertar en la base de datos Estados tabla Estados solicitudes
    insertArray([[consecutivo, identificacionCompania, estado], nameSheetStatus, idSheetStatus]);

    // == Creación de carpetas ==
    const mounth = getCurrentMounth();
    const nameCompany = identificacionCompania;
    //Nombre carpeta
    const year = new Date().getFullYear();
    const nameFolder = `${year} - Gestión de solicitudes`;
    const idFolderYear = createFolder(nameFolder, idFolder);
    const idFolderMounth = createFolder(mounth, idFolderYear);
    const idFolderCompany = createFolder(nameCompany, idFolderMounth);
    console.log("nameCompany", nameCompany);
    //asignar archivo a la carpeta
    setFile(acuerdoDeConfidencialidadFirmado, idFolderCompany);
    //enviar email
    const respuesta = buildEmail([lastDataSheet]);
    console.log(respuesta);

}


