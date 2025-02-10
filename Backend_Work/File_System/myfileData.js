const fs=require('fs')
function myWritefile(){
    try{
        console.log("Before writing")
        fs.writeFileSync("dat.txt","Data is written by node.js")
        console.log("Error in writing the data"+err)
    }
    catch(err){
        console.log("Error in writing the data"+err)
    }
}
console.log("before writing")
const rd=fs.readFileSync("dat.txt",{encoding:'utf-8'})
console.log(rd.toString())
