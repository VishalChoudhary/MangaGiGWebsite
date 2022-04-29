const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true,
        minLength:3
    },
    email: {
        type: 'string',
        required: true,
        validate(value) {
            if(!validator.isEmail(value)){
                throw new Error('Invalid email');
            }
        }
    },
    phone: {
        type: 'number',
        required: true,
        min:10
    },
    message: { 
        type: 'string',
        required: true,
        minLength:3
    },
    date: {
        type: 'date',
        default: Date.now
    }
});

//collection

const User=mongoose.model('User',userSchema);

module.exports=User;