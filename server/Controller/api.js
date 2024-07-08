const { default: mongoose } = require('mongoose')
const data = require('../schemas/schema.js') 


//get all data
const getinfo = async(req,res) => {   
    const info = await data.find()
    res.status(200).json(info)
}

//get single data
const getsingleinfo = async(req,res)=>{
    const {id} = req.params
    const info = await data.findById(id)
    if(!info){
        return res.status(404).json({error:"No Relevant Information"})
    }
    res.status(200).json(info)
}

//update info
const updateinfo = async(req,res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No Relevant Information"})
    }
    const info = await data.findOneAndUpdate({_id:_id},{
        ...req.body
    })
    if(!info){
        return res.status(400).json({error:"No Relevant Information"})
    }
    res.status(200).json(info)
}
//Post a info
const createinfo = async(req,res)=>{
    const{e_name}=req.body
    try{
        const info = await data.create({e_name})
        res.status(200).json(info)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
}





module.exports={
    getinfo,getsingleinfo,updateinfo,createinfo
}

