// import Navb from "./components/extra/Navb.js";
// import MyNavBar from "./components/extra/MyNavBar.js";
// import IncreDec from "./components/extra/IncreDec.js";
// import "./css/navbr.css";
// import TrialProps from "./components/extra/TrialProps";
// import DarkMode from "./components/extra/DarkMode";


import { useState } from "react";

import Orgnav from "./components/darkmodeProject/Orgnav";
import "./css/orgnav.css";

import TextManipulate from "./components/darkmodeProject/TextManipulate";
import "./css/textmanipulate.css";

// for api
import axios from "axios";

// for image for quote
import "/Users/sachinmhj/Desktop/MyfirstReactjs/src/css/quote.css";

// for routing
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quote from "./components/quotte/Quote";
import Contact from "./components/navbarpage/Contact";
import ErrorPage from "./components/navbarpage/ErrorPage";

function App() {
  // for darkmode
  const [bx1, setbx1] = useState({ color: "black", backgroundColor: "white" });
  const [btncolor, setbtncolor] = useState({ backgroundColor: "#c7aeff" });
  const [msg, setmsg] = useState(null);
  let boxx1 = () => {
    setbx1({ color: "black", backgroundColor: "grey", borderColor: "green" });
    document.body.style.backgroundColor = "grey";
    setbtncolor({ backgroundColor: "#413838", color: "white" });
    setmsg("You have enabled Darkmode");
    setTimeout(() => {
      setmsg(null);
    }, 1500);
    document.title = "React Darkmode";
  }
  let boxx2 = () => {
    setbx1({ color: "black", backgroundColor: "white", borderColor: "green" });
    document.body.style.backgroundColor = "white";
    setbtncolor({ backgroundColor: "rgb(164 205 249)" });
    setmsg("You have enabled Lightmode");
    setTimeout(() => {
      setmsg(null);
    }, 1500);
  }
  let boxx3 = () => {
    setbx1({ color: "black", backgroundColor: "#66d6ff", borderColor: "green" });
    document.body.style.backgroundColor = "#66d6ff";
    setbtncolor({ backgroundColor: "rgb(141 143 202)" });
    setmsg("You selected color mode as darkBlue");
    setTimeout(() => {
      setmsg(null);
    }, 1500);
  }
  let boxx4 = () => {
    setbx1({ color: "black", backgroundColor: "yellow", borderColor: "green" });
    document.body.style.backgroundColor = "yellow";
    setbtncolor({ backgroundColor: "rgb(206 163 81)" });
    setmsg("You selected color mode as yellow");
    setTimeout(() => {
      setmsg(null);
    }, 1500);
  }

  // for api  and random image
  let [daeta, setdaeta] = useState([]);
  let piclink = ["https://cdn.pixabay.com/photo/2022/01/25/08/26/animal-6965596__340.jpg", "https://cdn.pixabay.com/photo/2021/03/22/01/58/monk-6113501__340.png", "https://cdn.pixabay.com/photo/2022/04/25/05/48/rain-7155121__340.jpg", "https://cdn.pixabay.com/photo/2022/02/13/12/07/seagull-7011013__340.jpg", "https://media.istockphoto.com/photos/back-view-of-a-carefree-woman-on-rain-by-the-river-picture-id1304173435?b=1&k=20&m=1304173435&s=170667a&w=0&h=5p4fWTAHH5PK6PYWia3Lc4zlVMUEwLIDmSAf-s9whwA=", "https://images.unsplash.com/photo-1495231916356-a86217efff12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80", "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60", "https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aW5zdHJ1bWVudG8lMjBtdXNpY2FsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"];
  var number = Math.floor(Math.random() * piclink.length);

  let [imag, setImag] = useState("https://cdn.pixabay.com/photo/2016/04/02/04/57/comic-1302162__340.png");
  function apee() {
    axios.request('https://type.fit/api/quotes').then((resp) => {
      let a = resp.data
      let rand = Math.floor(Math.random() * a.length);
      let item = a[rand];
      // console.log(item)
      setdaeta(item.text);
    }).catch(function (error) {
      console.error(error);
    });
    setImag(piclink[number]);
  }
  return (
    <>
      {/* <Navb nav1="mYsWEEThOME" /> */}
      {/* <MyNavBar para="hi i am from Nepal" /> */}
      {/* <IncreDec/>  */}
      {/* <TrialProps con="convert"/> */}
      {/* <DarkMode/> */}
      <BrowserRouter>
        <Orgnav dk={bx1} ck1={boxx1} ck2={boxx2} ck3={boxx3} ck4={boxx4} ap={apee} />
        <Routes>
          <Route path="/" element={<TextManipulate dk={bx1} btnclr={btncolor} mesaze={msg} />} />
          <Route path="/quote" element={<Quote qotes={daeta} ig={imag} />} />
          <Route path="/contact" element={<Contact dk={bx1} />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;




































