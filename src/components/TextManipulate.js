import {useState} from 'react';
export default function TextManipulate(props) {
    const [txt,setTxt] = useState ("");
    const [colr,setColr] = useState ({fontWeight: "light"});
    let changed=(event)=>{    
        setTxt(event.target.value);             //remember this line to make textarea work.
    }
    let ck=()=>{
        setTxt(txt.toUpperCase());
    }
    let low=()=>{
        setTxt(txt.toLowerCase());
    } 
    // for bold
    let boold=()=>{
        let b={
            fontWeight: "bold"
        };
        setColr(b);
    }
    // for light 
    let bld=()=>{
        setColr({fontWeight: "normal"});
    }
    // for total words and characters
    let num2 = txt.length;
    let num1 = (txt.split(" ")).length-1;
  return (
      <>
      {/* parent box */}
      <div className="txtparent" style={props.dk}>
          {/* child box 1 */}
          <div className="txtchild child1" style={props.dk}>
            {/* box for text area */}
            <div className="txtarea" style={props.dk}>
                <h2 className="txtareaheading">Enter your text here</h2>
                <textarea name="textarea" className="textareabox" value={txt}  style={props.dk} onChange={changed} cols="30" rows="10"></textarea>
            </div>
            {/* box to output total words and characters of text area */}
            <div className="textoutput" style={props.dk}>
                    <p>Total Words({num1})</p>
                    <p>Total Characters({num2})</p>
            </div>
            {/* box for buttons */}
            <div className="mainbutton" style={props.dk}>
                {/* button to convert to uppercase */}
                <div className="btn btn1">
                    <button onClick={ck} className="botn">Uppercase</button>
                </div>
                {/* button to convert to bold */}
                <div className="btn btn2">
                    <button onClick={boold} className="botn">Bold</button>
                </div>
                <div className="btn btn3">
                    <button onClick={bld} className="botn">Light</button>
                </div>
                <div className="btn btn4">
                    <button onClick={low} className="botn">Lowercase</button>
                </div>
            </div>
          </div>
          {/* child box 2 */}
          <div className="txtchild child2" style={props.dk}>
              {/* box to preview the contents of text area */}
              <h2 id="headingpreview">Play With Words</h2>
              <div className="txtpreview" style={Object.assign({}, colr, props.dk)}>   {/* understand this line yourself */}
                  {txt}
              </div>
          </div>
          {/* child box 3 */}
          <div className="rightsidetxt">
              <p className="para">P</p>
              <p className="para">L</p>
              <p className="para">A</p>
              <p className="para">Y</p>
              <p className="para"> </p>
              <p className="para">W</p>
              <p className="para">I</p>
              <p className="para">T</p>
              <p className="para">H</p>
              <p className="para"> </p>
              <p className="para">W</p>
              <p className="para">O</p>
              <p className="para">R</p>
              <p className="para">D</p>
              <p className="para">S</p>
          </div>
      </div>
      </>
  )
}
