import { createTransport } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';


const EmailService = () => {

  const transporter = createTransport( {
    host: process.env.EMAIL_SERVER_HOST,
    port: process.env.EMAIL_SERVER_PORT || 587,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD
    }
  } as SMTPTransport.Options );

  const sendEmail = async ( email:string, subject:string, message:string ) => {
    try {
      await transporter.sendMail( {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: subject,
        html: message
      } );
    } catch ( e ) {
      console.log( e );
    }
  };

  return {
    sendEmail
  };
};

export default EmailService;