//funcion para enviar el email y construir el email
//@param {Array of Array} lastDateSheet: es es el arreglo de los datos
const buildEmail = (lastDateSheet) => {


    let posicionInicial = 2;
    if (lastDateSheet[0][4] == "830025448-5 - GRUPO BOLÍVAR S.A") {
        posicionInicial = 5;
    } else if (lastDateSheet[0][4] == "860076173-2 - FUNDACIÓN BOLÍVAR DAVIVIENDA" ||
        lastDateSheet[0][4] == "901186943-7 - FUNDACIÓN CULTIVA EL ARTE Y LA CULTURA") {
        posicionInicial = 9;
    } else if (lastDateSheet[0][4] == "830078991-0 - FUNDACIÓN OSITO PARDO - FUNDACIÓN HOGAR INFANTIL BOLÍVAR") {
        posicionInicial = 13;
    }


    //desestructuracion parametros globales
    const { idDataBase, nameTables, UrlWeb } = parametrosGlobales();
    const { urlAppRub } = UrlWeb;
    const { idSheetParameters, } = idDataBase;
    const { nameSheetEmail, } = nameTables;

    //acceder a la Base de Datos Parametros tabla Gestiones de Solicitudes
    const informationEmail = getDataSheet(idSheetParameters, nameSheetEmail);

    console.log("informationEmail", JSON.stringify(informationEmail));


    let body = replaceInformationEmail(informationEmail[posicionInicial][1],
        ["{NombreEmpresasolicitante}", "{empresa}", "{url}"],
        [lastDateSheet[0][2], lastDateSheet[0][4]], urlAppRub);

    console.log("body: " + body)
    let subject = informationEmail[posicionInicial][0];

    //reemplazar el asunto en la empresa
    subject = subject.replace("{empresa}", lastDateSheet[0][4]);
    const email = informationEmail[posicionInicial][3];

    console.log("lastDateSheet " + lastDateSheet, "posicionInicial " + posicionInicial, `${informationEmail[posicionInicial][3]}`, informationEmail[posicionInicial][3])

    sendEmail(email, subject, body);
    return {
        ok: true,
        msg: "operación finalizada con exito"
    }
};