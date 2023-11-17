import "/Users/sachinmhj/Desktop/MyfirstReactjs/src/css/contact.css";
export default function Contact(props) {
  return (
    <form>
      <div className="container text-center w-75 m-5 mx-auto border border-dark ct-contact rounded p-3">
      <div className="my-3 w-25 mx-auto ct-boxes">
        <label htmlFor="naam" className="form-label">Name</label>
        <input type="text" className="form-control" id="naam"/>
      </div>
      <div className="my-3 w-25 mx-auto ct-boxes">
        <label htmlFor="loc" className="form-label">Location</label>
        <input type="text" className="form-control" id="loc"/>
      </div>
      <div className="my-3 w-25 mx-auto ct-boxes">
        <label htmlFor="Email1" className="form-label">Email</label>
        <input type="email" className="form-control" id="Email1"/>
      </div>
      <button type="button" className="btn btn-secondary my-1">Submit</button>
      </div>
    </form>

    
  )
}
