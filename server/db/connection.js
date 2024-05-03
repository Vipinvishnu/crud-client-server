const mongoose=require('mongoose')
const connectionString=process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log("____mongoDb atlas connected__");
}).catch((err)=>{
    console.log(`____mongodb atlas connection failed!! ${err}__`);
})