import avatar from "./Image/Avatar2.png";

  function hide(){
    var modal =   document.getElementById('id01');
    document.getElementById('id01').style.display='none'
  }


const Signin = () => {
    return ( 
        <div id="id01" className="modal">
          <form action="" className="modal-content animate">
            <div className="imgcontainer">
              <span  class="close" title="Close Modal" onClick={hide}>
                &times;
              </span>
              <img src={avatar} alt="Avatar" className="avatar" />
            </div>

            <div className="container">
              <label htmlFor="uname" for="uname"><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required />

              <label htmlFor="psw" for="psw"><b>Email</b></label>
              <input type="password" placeholder="Enter Email" name="psw" required />

              <button type="submit">Login</button>
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
 
export default Signin;