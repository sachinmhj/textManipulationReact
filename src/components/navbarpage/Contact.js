import "/Users/sachinmhj/Desktop/MyfirstReactjs/src/css/contact.css";
export default function Contact(props) {
  return (
    <form action="" className="main">
      <div className="mnbox">
        <div className="cld" style={props.dk}>
          <div className="sib">
            <label htmlFor="nam">Name</label><br />
            <input style={props.dk} type="text" name="nam" id="nam" placeholder="Enter your name" />
          </div>
          <div className="sib">
            <label htmlFor="age">Age</label><br />
            <input style={props.dk} type="number" name="age" id="age" placeholder="Enter your age" />
          </div>
          <div className="sib">
            <label htmlFor="locate">Location</label><br />
            <input style={props.dk} type="text" name="locate" id="locate" placeholder="Enter your location" />
          </div>
          <div className="sib">
            <label htmlFor="eml">Email</label><br />
            <input style={props.dk} type="text" name="eml" id="eml" placeholder="Enter your Email address" />
          </div>
          <div className="sib">
            <button onClick={() => {}} style={{"color":"white","background":"black","cursor":"pointer"}}>Submit</button>
          </div>
        </div>
      </div>
    </form>
  )
}
