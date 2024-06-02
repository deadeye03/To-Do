const mongoose=require('mongoose');
const { type } = require('os');
const database="mongodb+srv://sourabh_database:uDKXcoKvhfDFBQzG@cluster0.liillx1.mongodb.net/toApp"
console.log(database);
async function main(){
    try {
        await mongoose.connect(database)

        
    } catch (error) {
        console.log('unable to connect to database '+error);
    }
}
main();

const todoSchema=mongoose.Schema({
    'name':{
        type:String,
        unique:true,
        required:true
    },
    'completed':{
        type:Boolean,
        default:false
    }

})
const dateSchema=mongoose.Schema({
    'date':Number
})

exports.task=mongoose.model('task',todoSchema);
exports.date=mongoose.model('date',dateSchema);
