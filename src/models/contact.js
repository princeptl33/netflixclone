import mongoose from "mongoose";

const Contactschema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    }
},{
timestamp: true
})

const Contact =  mongoose.model('contact', Contactschema)

export default Contact;
