const User = require('../schemas/userschema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const createToken = (_id) =>{
    return jwt.sign({_id:_id},process.env.SECRET,{expiresIn:'3d'})
}




const loginuser = async(req,res)=>{
    const{email,password}= req.body
    const exists = await User.findOne({email})
   
        if(!exists){
            return res.json('email invalid !')
        }

        const match = await bcrypt.compare(password,exists.password)
        
        if(!match){
            return res.status(400).json('password is invalid')
        }
        res.status(200).json({exists})
        
    }



const registeruser = async(req,res)=>{
    const {email,password}=req.body
    try{
        const hash = await bcrypt.hash(password,10)
        if(!email || !password){
            return res.json("required all fields")
        }
        // const token = createToken(User._id)
        const exists = await User.findOne({email})
        
        if(exists){
            return res.json('email already in use !')
        }        
        const user = await User.create({email,password:hash})
        user.save()
        res.status(200).json(user)
        
    }catch(error){
            res.status(500).json(error)
    }
               
               
    }
  

module.exports = {loginuser,registeruser}