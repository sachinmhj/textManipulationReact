import "/Users/sachinmhj/Desktop/MyfirstReactjs/src/css/contact.css";
export default function Contact(props) {
  return (
    <form>
      <div className="container text-center w-75 m-5 mx-auto border border-dark ct-contact rounded p-3">
      <div class="my-3 w-25 mx-auto">
        <label for="naam" class="form-label">Name</label>
        <input type="text" class="form-control" id="naam"/>
      </div>
      <div class="my-3 w-25 mx-auto">
        <label for="loc" class="form-label">Location</label>
        <input type="text" class="form-control" id="loc"/>
      </div>
      <div class="my-3 w-25 mx-auto">
        <label for="Email1" class="form-label">Email</label>
        <input type="email" class="form-control" id="Email1"/>
      </div>
      <button type="button" class="btn btn-secondary my-1">Submit</button>
      </div>
    </form>

    
  )
}
