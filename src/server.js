const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// server used to send emails
const app = express();
app.use(cors());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "llayse@gmail.com",
        pass: ""
    },
})

contactEmail.verify((error) => {
    if(error){
        console.log(error);
    }else{
        console.log("Ready to send");
    }
});

router.post("/contact", (req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    const message = req.body.message;
    const mail = {
        from: name,
        to: "llayse@gmail.com",
        subject: "Contact Form Submission - Portfolio",
        html: ` 
                <p>
                    <b>Name: </b>
                    ${name}
                </p>
                <p>
                    <b>Email: </b>
                    ${email}
                </p>
                <p>
                    <b>Phone: </b>
                    ${phone}
                </p>
                <p>
                    <b>Message: </b>
                    ${message}
                </p>
             `,
    };

    contactEmail.sendMail(mail, (error) => {
        if(error){
            res.json(error);
        }else{
            res.json({code: 200, status: "Message Sent"});
        }
    })

})
