const http=require('http')
const PORT=2500;
const Server=http.createServer((req,res)=>{
res.write("Welcome to NODE server")
res.end("request has been ended")
})
Server.listen(PORT,()=>{
    console.log("Server is running on"+PORT)
})