//funcion para obtener la informacion de una tabla
function getDataSheet( idSheet , sheetNameParameter ){
    let sheetName = getSheet( idSheet , sheetNameParameter)
    let lastRow =    sheetName.getLastRow();
    let lastColumn =  sheetName.getLastColumn()
    let dataList = sheetName.getRange(1,1,lastRow,lastColumn).getDisplayValues();
    return dataList
  }

