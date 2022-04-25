import PropTypes from 'prop-types';
import React, {useState} from 'react';
function TrialProps(props){
    let change=(event)=>{
        setVal(event.target.value);
    }
    let clk=()=>{
        setVal(val.toUpperCase());
    }
    const [val,setVal] = useState ("");
    return (
        <div className="container">
            <div className="child">
                <h1>{props.con}</h1>
                <textarea name="text here" value={val} onChange={change} cols="30" rows="10"></textarea><br></br>
                <button onClick={clk}>uppercase</button>
            </div>
        </div>
    );
}

export default TrialProps;

TrialProps.propTypes={
    con: PropTypes.string.isRequired
};