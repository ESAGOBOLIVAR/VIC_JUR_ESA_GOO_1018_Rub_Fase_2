//funcion para crear el trigger para enviar el formulario (ejecutar una sola vez)
function crearTriggerFormularioFinanciera() {
    const { GoogleForms } = parametrosGlobales();
    const { idGoogleFormsFinanciera } = GoogleForms;

    let form = FormApp.openById(idGoogleFormsFinanciera);
    //nombre de la funcion para crear el nuevo trigger
    ScriptApp.newTrigger("triggerFinanciera")
        .forForm(form)
        .onFormSubmit()
        .create();
}

//funcion para ejecutar trigger de Financiera
function triggerFinanciera(data) {
    //@param {Object} data: es el arreglo de la data del google form
    //@param {Object} subcategoria: es el nombre de la subcategoria
    formulario(data, "Financiera");
}








