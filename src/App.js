import Signin from "./Sign-in";
import Signup from "./Sign-up";
import "./App.css";
import logo from "./logo4.png";
function show() {
  document.getElementById('id01').style.display='block';
}
function show2() {
  document.getElementById('id02').style.display='block';
}
function App() {
  return (
    <div className="App">
      <div className="sign-logo">
        <div>
          <img src={logo} alt="" />
        </div>
        <button onClick={show}>Sign in</button>
        <button onClick={show2}>Sign up</button>
      </div>
      <header className="App-header">
        <div class="triangle">
          <div class="triangle-up1"></div>
          <div class="triangle-up2"></div>
        </div>
        <div class="triangle2">
          <div class="triangle-up3"></div>
          <div class="triangle-up4"></div>
        </div>
        <div>Vlog</div>
        <Signin />
        <Signup />
      </header>
    </div>
  );
}

export default App;
