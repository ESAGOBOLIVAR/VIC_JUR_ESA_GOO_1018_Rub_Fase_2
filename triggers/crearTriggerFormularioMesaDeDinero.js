//funcion para crear el trigger para enviar el formulario (ejecutar una sola vez)
function crearTriggerFormularioMesaDeDinero() {
    const { GoogleForms } = parametrosGlobales();
    const { idGoogleFormsMesaDeDinero } = GoogleForms;

    let form = FormApp.openById(idGoogleFormsMesaDeDinero);
    //nombre de la funcion para crear el nuevo trigger
    ScriptApp.newTrigger("triggerMesaDeDinero")
        .forForm(form)
        .onFormSubmit()
        .create();
}

//funcion para ejecutar trigger de Juridico
function triggerMesaDeDinero(data) {
    //@param {Object} data: es el arreglo de la data del google form
    //@param {Object} subcategoria: es el nombre de la subcategoria
    formulario(data, "Mesa de Dinero");
}