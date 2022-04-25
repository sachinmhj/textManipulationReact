// NOTE:
// whenever you want to use css in react always create an object, not a function.

import PropTypes from 'prop-types';
import {useState} from 'react';
function Navb(props) {
    // function clk() {
    //     var u = document.querySelectorAll(".onee");
    //     u[0].style.display = "none";
    // }
    let ck=()=>{
        if(val.color==="black"){
            setval({
                color: "white",
                backgroundColor: "black",
                borderColor: "white"
            });
            setv("disable darkmode");
        }
        else{
            setval({
                color: "black",
                backgroundColor: "white"
            });
            setv("enable darkmode");
        }        
    }
    let [val,setval]=useState({
        color: "black",
        backgroundColor: "white"
    });    
    let [v,setv]=useState("enable darkmode");
    return (
        <>
            <div className="onee" style={val}>
                <header>
                <img src="https://img.freepik.com/free-vector/bicycle-shop-logo-design-vector_53876-40626.jpg" alt="NoImg" />
                    <ul>
                        <li><a href="/" style={val}>{props.nav1}</a></li>
                        <li><a href="/" style={val}>CATEGORIES</a></li>
                        <li><a href="/" style={val}>ABOUT</a></li>
                        <li><a href="/" style={val}>CONTACT</a></li>
                    </ul>
                    <input type="text" placeholder="Search here" />
                </header>
                <div className="bod">
                    <h1>Mistry</h1>
                    <p className="par" style={val}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere reprehenderit et, ut laboriosam asperiores dicta possimus, sapiente quaerat facilis eius molestias ratione error enim velit praesentium nemo animi dolore assumenda a repudiandae. Quas, minima sapiente adipisci perferendis id cum qui laudantium velit expedita blanditiis animi!</p>
                    <button className="btn" onClick={ck}>{v}</button>
                </div>
                <div className="bt">
                    <p className="car">ADVERTISEMENT</p>
                </div>
            </div>
            {/* <button onClick={clk}>HIDE NAV</button> */}
        </>
    );
}

export default Navb;

Navb.propTypes = {
    nav1: PropTypes.string.isRequired
}

Navb.defaultProps = {
    nav1: "HOUSE"
}