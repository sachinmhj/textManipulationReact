import { useState } from 'react';
export default function TextManipulate(props) {
    // for text manipulation
    const [txt, setTxt] = useState("");
    const [fontWeight, setfontWeight] = useState("normal");
    // for alert when text manipulated
    const [alert, setalert] = useState("Click buttons to manipulate text.");
    let changed = (event) => {
        setTxt(event.target.value);             //remember this line to make textarea work.
    }
    let ck = () => {
        setTxt(txt.toUpperCase());
        setalert("Your text is converted to uppercase.");
    }
    let low = () => {
        setTxt(txt.toLowerCase());
        setalert("Your text is converted to lowercase.");
    }
    // for bold
    let boold = () => {
        setfontWeight("bold");
        setalert("Your text is set to bold.");
    }
    // for light 
    let bld = () => {
        setfontWeight("normal");
        setalert("Your text is set to light.");
    }
    // for total words and characters
    // for total words and characters
    let num2 = txt.length;
    let num1 = (txt.match(/\S+/g) || []).length;
    return (
        <>
            <div className="text-center pop text-success" style={props.dk}>{props.mesaze}</div>
            {/* parent box */}
            <div className="container d-flex flex-column" style={props.dk}>
                {/* child box 1 */}
                <div className="container d-flex flex-column justify-content-center align-items-center" style={props.dk}>
                    {/* box for text area */}
                    <div className="w-100" style={props.dk}>
                        <h2 className="text-center">Enter your text here</h2>
                        <textarea name="textarea" className="form-control textareabox my-2" value={txt} style={Object.assign({}, {"fontWeight":fontWeight}, props.dk)} onChange={changed}></textarea>
                    </div>
                    {/* box to output total words and characters of text area */}
                    <div className="container border w-50 rounded m-2 text-dark ctgroup" style={props.dk}>
                        <p className='text-center ctpara'>Total Words({num1})</p>
                        <p className='text-center ctpara'>Total Characters({num2})</p>
                    </div>
                    {/* box for buttons */}
                    <div className="container d-flex flex-column" style={props.dk}>
                        {/* button to convert to uppercase */}
                        <button type="button" onClick={ck} className="btn btn-info w-25 m-1 mx-auto rounded btnhov" style={props.btnclr}>Uppercase</button>
                        {/* button to convert to bold */}
                        <button type="button" onClick={boold} className="btn btn-info w-25 m-1 mx-auto rounded btnhov" style={props.btnclr}>Bold</button>
                        <button type="button" onClick={bld} className="btn btn-info w-25 m-1 mx-auto rounded btnhov" style={props.btnclr}>Light</button>
                        <button type="button" onClick={low} className="btn btn-info w-25 m-1 mx-auto rounded btnhov" style={props.btnclr}>Lowercase</button>
                    </div>
                    {/* for alert */}
                    <div className="text-center ct-alert">{alert}</div>
                </div>
                {/* child box 2 */}
                <div className="container rounded ctpreview" style={props.dk}>
                    {/* box to preview the contents of text area */}
                    <h2 className='text-center m-1'>Preview Your Text</h2>
                    <div className="container text-center border border-dark rounded h-75 mb-1 cttxt w-75" style={Object.assign({}, {"fontWeight":fontWeight}, props.dk)}>   {/* understand this line yourself */}
                        {txt.length <= 0 ? "Nothing to preview" : txt}
                    </div>
                </div>
            </div>
        </>
    )
}
