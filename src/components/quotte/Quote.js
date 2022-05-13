export default function Quote(props) {
    return (
        <>
        <div className="outer">
            <div className="qt_main">
                <img src={props.ig} alt="nothing" className="forimage"/>
                <p className="forpara"><b>{props.qotes}</b></p>
            </div>
        </div>
        </>);
}
