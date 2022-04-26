// import Navb from "./components/Navb.js";
// import MyNavBar from "./components/MyNavBar.js";
// import IncreDec from "./components/IncreDec.js";
// import "./css/navbr.css";
// import TrialProps from "./components/TrialProps";
// import DarkMode from "./components/DarkMode";

import { useState } from "react";

import Orgnav from "./components/Orgnav";
import "./css/orgnav.css";

import TextManipulate from "./components/TextManipulate";
import "./css/textmanipulate.css";

function App() {
  // for darkmode
  const [bx1,setbx1]=useState({color: "black", backgroundColor: "white"});
  const [btncolor,setbtncolor]=useState({backgroundColor: "white"});
  let boxx1=()=>{
      setbx1({color: "white", backgroundColor: "black", borderColor: "green"});
      document.body.style.backgroundColor = "black";
      setbtncolor({backgroundColor: "#413838", color: "white"});
    }
    let boxx2=()=>{
      setbx1({color: "black", backgroundColor: "white", borderColor: "green"});
      document.body.style.backgroundColor = "white";
      setbtncolor({backgroundColor: "#e0fb6e"});
    }
    let boxx3=()=>{
      setbx1({color: "black", backgroundColor: "rgb(126, 1, 1)", borderColor: "green"});
      document.body.style.backgroundColor = "rgb(126, 1, 1)";
      setbtncolor({backgroundColor: "#ae2fba"});
    }
    let boxx4=()=>{
      setbx1({color: "black", backgroundColor: "yellow", borderColor: "green"});
      document.body.style.backgroundColor = "yellow";
      setbtncolor({backgroundColor: "#de3232"});
  }
  return (
    <>
      {/* <Navb nav1="mYsWEEThOME" /> */}
      {/* <MyNavBar para="hi i am from Nepal" /> */}
      {/* <IncreDec/>  */}
      {/* <TrialProps con="convert"/> */}
      {/* <DarkMode/> */}
      <Orgnav dk={bx1} ck1={boxx1} ck2={boxx2} ck3={boxx3} ck4={boxx4}/>
      <TextManipulate dk={bx1} btnclr={btncolor}/>
    </>
  );
}
export default App;



























// virtual DOM
// useeffect
// routing
// state

// usestate iscollapsed
// icons for react
// conditional rendering






