// import Navb from "./components/darkmodeProject/Navb.js";
// import MyNavBar from "./components/darkmodeProject/MyNavBar.js";
// import IncreDec from "./components/darkmodeProject/IncreDec.js";
// import "./css/navbr.css";
// import TrialProps from "./components/darkmodeProject/TrialProps";
// import DarkMode from "./components/darkmodeProject/DarkMode";

import { useState } from "react";

import Orgnav from "./components/darkmodeProject/Orgnav";
import "./css/cssForDarkmodeProject/orgnav.css";

import TextManipulate from "./components/darkmodeProject/TextManipulate";
import "./css/cssForDarkmodeProject/textmanipulate.css";

function App() {
  // for darkmode
  const [bx1,setbx1]=useState({color: "black", backgroundColor: "white"});
  const [btncolor,setbtncolor]=useState({backgroundColor: "white"});
  const [msg,setmsg]=useState(null);
  let boxx1=()=>{
      setbx1({color: "white", backgroundColor: "black", borderColor: "green"});
      document.body.style.backgroundColor = "black";
      setbtncolor({backgroundColor: "#413838", color: "white"});
      setmsg("Congrats!!! you have enabled mode");
      setmsg("Congrats!!! you have enabled Darkmode");
      setTimeout(() => {
        setmsg(null);
      }, 1500);
      document.title="React.Darkmode";
    }
    let boxx2=()=>{
      setbx1({color: "black", backgroundColor: "white", borderColor: "green"});
      document.body.style.backgroundColor = "white";
      setbtncolor({backgroundColor: "#e0fb6e"});
      setmsg("Congrats!!! you selected color mode as white");
      setTimeout(() => {
        setmsg(null);
      }, 1500);
    }
    let boxx3=()=>{
      setbx1({color: "black", backgroundColor: "rgb(126, 1, 1)", borderColor: "green"});
      document.body.style.backgroundColor = "rgb(126, 1, 1)";
      setbtncolor({backgroundColor: "#ae2fba"});
      setmsg("Congrats!!! you selected color mode as darkred");
      setTimeout(() => {
        setmsg(null);
      }, 1500);
    }
    let boxx4=()=>{
      setbx1({color: "black", backgroundColor: "yellow", borderColor: "green"});
      document.body.style.backgroundColor = "yellow";
      setbtncolor({backgroundColor: "#de3232"});
      setmsg("Congrats!!! you selected color mode as yellow");
      setTimeout(() => {
        setmsg(null);
      }, 1500);
    }
  return (
    <>
      {/* <Navb nav1="mYsWEEThOME" /> */}
      {/* <MyNavBar para="hi i am from Nepal" /> */}
      {/* <IncreDec/>  */}
      {/* <TrialProps con="convert"/> */}
      {/* <DarkMode/> */}
      <Orgnav dk={bx1} ck1={boxx1} ck2={boxx2} ck3={boxx3} ck4={boxx4}/>
      <TextManipulate dk={bx1} btnclr={btncolor} mesaze={msg}/>
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






