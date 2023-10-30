//funcion para obtener el nombre actual del mes
const getCurrentMounth = () => {
    const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ];

    const date = new Date();
    const numMounth = date.getMonth();
    return meses[numMounth]
};