//funcion para crear el trigger para enviar el formulario (ejecutar una sola vez)
function crearTriggerFormularioInmuebles() {
    const { GoogleForms } = parametrosGlobales();
    const { idGoogleFormsInmuebles } = GoogleForms;

    let form = FormApp.openById(idGoogleFormsInmuebles);
    //nombre de la funcion para crear el nuevo trigger
    ScriptApp.newTrigger("triggerInmuebles")
        .forForm(form)
        .onFormSubmit()
        .create();
}

//funcion para ejecutar trigger de Inmuebles
function triggerInmuebles(data) {
    //@param {Object} data: es el arreglo de la data del google form
    //@param {Object} subcategoria: es el nombre de la subcategoria
    formulario(data, "Inmuebles");
}