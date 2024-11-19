// import React from "react";
// import './studentstyle.css'
// function Student(data){
//     return(
//         <div className="icard">
//             {/* {
//                 JSON.stringify(data)
//             } */}
//             <table>
//                 <tbody>
//                     <tr><td colSpan={2}>{data.college}</td></tr>
//                     <tr><td colSpan={2}><img src={data.pic} height={80} width={100} alt='student pic'/></td></tr>
//                     <tr><td>Roll:</td><td>{data.Roll}</td></tr>
//                     <tr><td>Name:</td><td>{data.name}</td></tr>
//                     <tr><td>Branch:</td><td>{data.branch}</td></tr>
//                     <tr><td>Section:</td><td>{data.section}</td></tr>

//                 </tbody>
//             </table>
//         </div>
//     )

// }
// // Student.defaultProps={
// //     college:"AKGE Engineering College"
// // }
// export default Student
import React from 'react'
import './studentstyle.css'
const Student= (props) => {
  return (
    <div className='card'>
    <table>
        <tbody>
            <tr><td colSpan={2}>{props.college}</td></tr>
            <tr><td colSpan={2}>{props.pic}</td></tr>
            <tr><td>Roll:</td><td >{props.roll}</td></tr>
            <tr><td>Name:</td><td >{props.name}</td></tr>
            <tr><td>Branch:</td><td >{props.branch}</td></tr>
            <tr><td>Section:</td><td >{props.section}</td></tr>
        </tbody>
    </table>
    </div>
  )
}
export default Student