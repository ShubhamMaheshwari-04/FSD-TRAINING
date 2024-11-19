// import React from 'react'
// import Student from './student';
// import logo from './wes-hicks-4-EeTnaC1S4-unsplash.jpg'
// function App() {
//   // let a = 20;

//   // let mystyle = {
//   //   backgroundColor: "cyan",
//   //   color: "red"
//   // };
//   const studentdata={
//     college:"ABES Engineering College",
//     pic:"https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png",
//     Roll:"123456",
//     name:"Shubham",
//     branch:"CSE AIML",
//     section:"B"
//   }
//   return (
//     <div style={{marginLeft:"300px" }}>
//       <Student data={studentdata}/>
//       {/* <Student 
//       pic={<img src={logo} height={80} width={100} />}
//       college="ABES Engineering College" roll="123454" name="Shubham" branch="CSE AIML" section="B"/>
//       <Student 
//       pic={<img src={logo} height={80} width={100} />}
//        roll="123455" name="Sarthak" branch="CSE AIML" section="B"/>
//       <Student 
//       pic={<img src={logo} height={80} width={100} />}
//       college="ABES Engineering College" roll="123456" name="Vivek" branch="CSE AIML" section="B"/> */}

//     </div> 
   
//   )
// }

// export default App;
import React from "react";
import Student from "./student";
import logo from "./wes-hicks-4-EeTnaC1S4-unsplash.jpg"

const App = () => {
  let a=20;
  let mystyle={
    backgroundColor:"cyan",
    color:"red"
  }
  return (
  <div style={{color:"red"}}>
    <h2>ABES ENGINEERING COLLEGE</h2>
  <Student pic={<img src={logo} width="80px" height="50px" ></img>} name="Shubham" branch="CSE AIML" college="ABES ENGINEERING COLLEGE" roll="123456" section="B" />
  </div>
  )
};

export default App;