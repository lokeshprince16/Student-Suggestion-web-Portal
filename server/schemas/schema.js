const mongoose =require('mongoose')
const Schema=mongoose.Schema

const ExamSchema= new Schema ({
    e_name:{
        type:String,
        // required:true
    },
    minimum_age:{
        type:String,
        // required:true
    },
    eligible_edu:{
        type:String,
        // required:true
    },
    recruit_for:{
        type:String,
        // required:true
    },
    physique:{
        type:String,
        //required:true
    },
    e_details:{
        type:String,
        //required:true
    },
    e_syllabus:{
        type:String,
        //required:true
    },
    application_fee:{
        type:String,
        //required:true
    },
    doc_required:{
        type:String,
        //required:true
    },
    selection_process:{
        type:String,
        //required:true
    },
    salary:{
        type:String,
        //required:true
    }

})
module.exports = mongoose.model("Info",ExamSchema)