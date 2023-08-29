const mongoose = require('mongoose');


const dataSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    }
});



const TODO = new mongoose.model('todos',dataSchema);
module.exports = TODO;

//todos is a collection name
