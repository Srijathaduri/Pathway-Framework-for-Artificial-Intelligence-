import Anvesh from "../modal/aianveshak.model.js";
export const getAnvesh=async(req,res)=>{
    try{
        const anvesh=await Anvesh.find()
        res.status(200).json(anvesh)

    }catch(error){
      console.log("Error: ",error)
      res.status(500).json(anvesh)
    }
};