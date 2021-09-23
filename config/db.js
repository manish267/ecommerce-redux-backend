const mongoose=require('mongoose')

const connectDB=()=>{

 mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true
}).then(()=>console.log("Database Connected")).catch(err=>console.log(err))
}

module.exports=connectDB