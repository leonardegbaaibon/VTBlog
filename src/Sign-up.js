import "./App.css"


function show() {
    document.getElementById('id01').style.display='block';
  }
  function hide(){
    var modal =   document.getElementById('id02');
    document.getElementById('id02').style.display='none'
  }
const Signup = () => {
    return ( 
        <div id="id02" className="modal1">
        <form action="" className="modal-content1 animate">
          <div className="imgcontainer">
            <span  class="close" title="Close Modal" onClick={hide}>
              &times;
            </span>
            <h3>Sign up</h3>
            <p>Please fill in this form to create an account</p>
          </div>
          <hr />

          <div className="container">
          <label htmlFor="uname" for="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter your username" name="uname" required />

            <label htmlFor="uname" for="email"><b>Email</b></label>
            <input type="text" placeholder="Enter your email" name="uname" required />

            <button type="submit">Sign up</button>
            <label>
              <input type="checkbox" name="remember" /><h5>Remember me</h5>
            </label>
          </div>
          <div className="container1">
            <button type="button" onClick={hide} >
              Cancel
            </button>
            <span className="psw">By creating an account you agree to our<a href="#">Terms and Privacy</a></span>
          </div>
        </form>
      </div>
     );
}
 
export default Signup;