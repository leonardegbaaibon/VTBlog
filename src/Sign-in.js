import avatar from "./Avatar.png";

function show() {
    document.getElementById('id01').style.display='block';
  }
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

              <label htmlFor="psw" for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />

              <button type="submit">Login</button>
              <label>
                <input type="checkbox" name="remember" /><h5>Remember me</h5>
              </label>
            </div>
            <div className="container1">
              <button type="button" onClick={hide} >
                Cancel
              </button>
              <span className="psw">Forgot <a href="#">Password</a></span>
            </div>
          </form>
        </div>
     );
}
 
export default Signin;