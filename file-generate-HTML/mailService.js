const nodemailer = require("nodemailer")
require("dotenv").config();

const mailSender= async(email, title, body)=>{
    try {
        let transpoter= nodemailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS
            }
        });
        let info= transpoter.sendMail({
            from:"studyNotion !! the code help- Aniket",
            to:`${email}`,
            subject:`${title}`,
            html:`${body}`
            
        });
        console.log(info);
        return info;

    } catch (error) {
        console.error(error)
    }
}

module.exports=mailSender; 