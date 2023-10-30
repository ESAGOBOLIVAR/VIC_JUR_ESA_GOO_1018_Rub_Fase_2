//funcion para crear el trigger para enviar el formulario (ejecutar una sola vez)
function crearTriggerFormularioJuridico() {
    const { GoogleForms } = parametrosGlobales();
    const { idGoogleFormsJuridico } = GoogleForms;

    let form = FormApp.openById(idGoogleFormsJuridico);
    //nombre de la funcion para crear el nuevo trigger
    ScriptApp.newTrigger("triggerJuridico")
        .forForm(form)
        .onFormSubmit()
        .create();
}

//funcion para ejecutar trigger de Juridico
function triggerJuridico(data) {
    //@param {Object} data: es el arreglo de la data del google form
    //@param {Object} subcategoria: es el nombre de la subcategoria
    formulario(data, "Jurídico");
}