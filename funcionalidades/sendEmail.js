//funcion para enviar el email
const sendEmail = (to,subject,body,archivos = []) =>{
    MailApp.sendEmail({
      to: to,
      subject: subject,
      htmlBody: body,
      attachments:archivos
    });
};