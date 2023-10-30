
//funcion para reemplazar la informacion del email
function replaceInformationEmail(body = "", informationToReplace = [], values = []) {

    //desestructuracion parametros globales
    const { UrlWeb } = parametrosGlobales();
    const { urlAppRub } = UrlWeb;
    let newBody = body;
    newBody = newBody.replace("{url}", urlAppRub);
    informationToReplace.forEach((variablesToReplace, index) => {
        newBody = newBody.replace(variablesToReplace, values[index]);
    });

    return newBody;
};