const http=require('http')
const fs=require('fs').promises
const PORT=3001;
const server=http.createServer(async(req,res)=>{
    // res.end("welcome to NODE Server")
    // if(req.url=='/register' && req.method=='POST'){
    //     let body=''
    //     let arr=[]
    //     req.on('data',chunk=>{
    //         body+=chunk
    //     })

    //     req.on('end',async()=>{
            
    //     })


    //     try{
    //         console.log(body)
    //         const {name,email,password}=JSON.parse(body) //convert into JSON object
    //         console.log(name)
    //         const data=await fs.readFile('student.json',{encoding:'utf-8'})
    //         const jsdata=JSON.parse(data)
    //         const status=arr.find((ele)=>ele.email==email)

    //         if(status){
    //             res.end({"message":"Email is already registered"})
    //         }
    //         else{
    //             arr.push({name,email,password})
    //             await fs.writeFile('student.json',JSON.stringify(arr))
    //             res.end(JSON.stringify({"message":"Email is already registered"}))
    //         }
    //     }
    //     catch(err){
    //         console.log("Error while writing the data in registration"+err)
    //     }
        


    //     //res.end(JSON.stringify({"message":"Successfully registered"}))

    // }

    if(req.url=='/register' && req.method=="POST"){
        let body='';
        let arr=[];
     
        req.on('data',chunk=>{
         body+=chunk;
        })
     
        req.on('end',async()=>{
         
         try{
             console.log(body);
             const {name,email,password}=JSON.parse(body);//convert into jSON object
             console.log(name);
                const data=await fs.readFile('student.json',{encoding:'utf-8'});
                 arr=JSON.parse(data);
                 const status=arr.find((ele)=>ele.email==email);
                 if(status){
                     return res.end(JSON.stringify({"message":"Email is already registerd"}));
                 }
                 else{
                     arr.push({name,email,password});
                     await fs.writeFile('student.json',JSON.stringify(arr));
                     res.end(JSON.stringify({"message":"Registration successfully completed"}))
                 }
     
     
         }catch(err){
            console.log("Error while writing the daat in registration"+err)
         }
        })
     
     
         res.end(JSON.stringify({"message":"Successfully register"}));
      }
})
server.listen(PORT,()=>{
    console.log("Server is running on:"+PORT)
})