//jshint esversion: 6

const mongoose = require('mongoose');

//Sets StrictQuert to false
mongoose.set('strictQuery', false);

main().catcj(err => console.log(err));

async function main() {
    //connects Mongoose to our MongoDB
    await mongoose.connect('mongodb://localhost:27017/tasksDB')
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

//Create new schema
const taskSchema = new mongoose.Schema ({
    name: {
        type: String,
        //Requires this field to be entered or it will provide an error
        required: [true, 'No name specified.']
    },
    task: {
        type: String,
        required: [true, 'No task specified.']
    },
    priority: {
        type: String,
        required: [true, 'No priority specified.']
    }
})