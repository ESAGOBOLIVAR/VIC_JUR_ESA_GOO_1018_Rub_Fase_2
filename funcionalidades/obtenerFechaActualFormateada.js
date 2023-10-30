//funcion para obtener la fecha actual formateada
function obtenerFechaActualFormateada() {
    const ahora = new Date();

    const dia = ahora.getDate();
    const mes = ahora.getMonth() + 1; // Sumamos 1 ya que los meses comienzan en 0 (enero) en JavaScript.
    const anio = ahora.getFullYear();
    const horas = ahora.getHours();
    const minutos = ahora.getMinutes();
    const segundos = ahora.getSeconds();

    const fechaFormateada = `${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`;

    //@return fecha Actual formateada
    return fechaFormateada;
}

