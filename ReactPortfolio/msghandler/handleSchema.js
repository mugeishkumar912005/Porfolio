const M=require('mongoose');
const Mod=new M.Schema({
    name:String,
    Ph:Number,
    Text:String
},{timestamps:true})
module.exports={Mod};