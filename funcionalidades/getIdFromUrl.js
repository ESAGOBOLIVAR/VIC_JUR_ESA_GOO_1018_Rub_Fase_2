//funcion para obtener el id de la url
const getIdFromUrl = (url) => { 
    return url.match(/[-\w]{25,}/); 
  }
  