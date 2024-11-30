import mongoose from "mongoose";
const anveshakSchema=mongoose.Schema({
    name:String,
    title:String,
    image:String,
    category:String,
    description:String,
    link:String,
    certificate:String
})
const Anvesh=mongoose.model("Anvesh",anveshakSchema)

export default Anvesh;