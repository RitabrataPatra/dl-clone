import mongoose from "mongoose";

const Connection = async(username = "teamritabrata" , password = "ML1Ix15VQahn2T2L")=>{
    const URL = `mongodb://${username}:${password}@ac-scn7rb6-shard-00-00.txfis62.mongodb.net:27017,ac-scn7rb6-shard-00-01.txfis62.mongodb.net:27017,ac-scn7rb6-shard-00-02.txfis62.mongodb.net:27017/?replicaSet=atlas-kjl9tv-shard-0&ssl=true&authSource=admin&retryWrites=true&w=majority&appName=google-docs-clone`

    try {
        await mongoose.connect(URL , {useUnifiedTopology :true ,useNewUrlParser:true})
        console.log('DB connected')
    } catch (error) {
        console.log('Error while connecting to DB', error)
        
    }
}

export default Connection