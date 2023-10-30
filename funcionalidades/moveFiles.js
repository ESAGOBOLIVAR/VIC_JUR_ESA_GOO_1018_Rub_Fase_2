//funcion para mover el archivo a dicha carpeta
const moveFiles = (sourceFileId, targetFolderId) => {
    var file = DriveApp.getFileById(sourceFileId);
    var folder = DriveApp.getFolderById(targetFolderId);
    file.moveTo(folder);
  }; 