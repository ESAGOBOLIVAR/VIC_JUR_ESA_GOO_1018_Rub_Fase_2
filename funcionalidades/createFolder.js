//funcion para crear la carpeta
function createFolder(nameFolder, idFolderMain) {
    let folderId = "";
    try {
        folderId = DriveApp.getFolderById(idFolderMain).getFoldersByName(nameFolder).next().getId();
    } catch {
        folderId = DriveApp.getFolderById(idFolderMain).createFolder(nameFolder).getId();
    };
    return folderId;
};