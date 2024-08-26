import mongoose from "mongoose";




const Bio = mongoose.models.Bio ||
mongoose.model("Bio",{
    Name : String,
    Description : String,
    imageUrl : String,
    
    
    
    
    
    
    
    })
    
    
    
export default Bio;