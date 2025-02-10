function sum(num1,num2){
    return num1+num2;
}
// const result=sum(23,10);
// console.log("Sum"+result);
const multiplication=(num1,num2)=>{
    return num1*num2;
}
const obj={
    sum:sum,
    multiplication:multiplication
};
module.exports=obj;