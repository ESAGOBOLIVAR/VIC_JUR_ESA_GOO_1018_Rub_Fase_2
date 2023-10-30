//funcion para asignar el archivo a esa carpeta
const setFile = (urlFile, idFolder) => {
    const idFile = getIdFromUrl(urlFile);
    moveFiles(idFile, idFolder);
  };