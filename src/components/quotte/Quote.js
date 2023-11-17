import { NavLink } from "react-router-dom";
export default function Quote(props) {
    return (
        <>
            <div className="outer">
                <div className="qt_main">
                    <img src={props.ig} alt="nothing" className="forimage mx-auto" />
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <p className="forpara"><b>{props.qotes}</b></p>
                        <NavLink to="/quote" className="nav-link navboton text-center my-2" onClick={props.ap}>Read Next</NavLink>
                    </div>
                </div>
            </div>
        </>);
}
