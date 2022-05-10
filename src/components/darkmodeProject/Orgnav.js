import { NavLink } from "react-router-dom";

// import "./css/textmanipulate.css";                      //don't import css file inside other components like here. always import it in App.js file.
export default function OrgnavOrgnav(props) {
    return (
        <>
            <div className="container" style={props.dk}>
                <div className="im">
                    <img src="https://pngimg.com/uploads/circle/circle_PNG50.png" alt="no" />
                </div>
                <div className="nav" style={props.dk}>
                    <ul className="list">
                        <li><NavLink to="/" className="anchorsame" style={props.dk}>Home</NavLink></li>
                        <li><NavLink to="/about" className="anchorsame" style={props.dk}>About</NavLink></li>
                        <li><NavLink to="/contact" className="anchorsame" style={props.dk}>Contact</NavLink></li>
                    </ul>
                    <div className="mainbox">
                        <p id="unik">Enable Darkmode Of Your Choice</p>
                        <div className="boxes">
                            <button id="box1" className="samebox" onClick={props.ck1}></button>
                            <button id="box2" className="samebox" onClick={props.ck2}></button>
                            <button id="box3" className="samebox" onClick={props.ck3}></button>
                            <button id="box4" className="samebox" onClick={props.ck4}></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}