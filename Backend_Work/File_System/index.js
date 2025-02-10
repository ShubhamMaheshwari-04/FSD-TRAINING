const fs=require('fs')
console.log("Data1")
fs.writeFileSync("dat.txt","Data is written by node.js")
console.log("Data Written successfully")

console.log("Before reading")
const rd=fs.readFileSync("dat.txt",{encoding:'utf-8'})
console.log(rd.toString())
console.log("After reading")
console.log("Before append")
fs.appendFileSync("dat.txt","Appended data by fs module");
console.log("After Append")

fs.unlinkSync("dat.txt")
console.log("file deleted")

