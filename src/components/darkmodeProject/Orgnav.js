import { NavLink } from "react-router-dom";

// import "./css/textmanipulate.css";                      //don't import css file inside other components like here. always import it in App.js file.
export default function OrgnavOrgnav(props) {
    return (
        <>
            <div className="container" style={props.dk}>
                <img className="navbar-brand d-block rounded-circle" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ZWw3Va703XcxKLulQJTcnTalXO4-kQe41A&usqp=CAU" style={{"width":"6rem","margin":"1rem auto"}}></img>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark bord" style={props.dk}>
                    <div className="container-fluid">
                        <button className="navbar-toggler bg-light rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link navbutton text-center mx-2" style={props.dk}>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/quote" className="nav-link navbutton text-center mx-2" style={props.dk} onClick={props.ap}>Read Quotes</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/contact" className="nav-link navbutton text-center mx-2" style={props.dk}>Contact Us</NavLink>
                                </li>
                            </ul>
                            <div className="d-flex justify-content-center w-15">
                                <button type="button" className="btn btn-light border border-secondary mx-1" onClick={props.ck2}></button>
                                <button type="button" className="btn btn-dark border border-secondary mx-1" onClick={props.ck1}></button>
                                <button type="button" className="btn btn-warning border border-secondary mx-1" onClick={props.ck4}></button>
                                <button type="button" className="btn border border-secondary mx-1" style={{"background":"#66d6ff"}} onClick={props.ck3}></button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

