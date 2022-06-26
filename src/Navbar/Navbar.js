import logo from "../Image/Logo3.png";
import { FaSearch } from "react-icons/fa";
import { useRef } from "react";

const Navbar = (props) => {
  //   console.log(props);
  function show() {
    document.getElementById("id01").style.display = "block";
  }
  function show2() {
    document.getElementById("id02").style.display = "block";
  }
  const inputEl = useRef("");

  const getSearchItem = () => {
    props.searchKeyword(inputEl.current.value);
    // console.log(inputEl.current.value)
  };
  const searchClick = () => {};

  return (
    <div class="sign-logo">
      <div className="logo-diver">
        <img src={logo} alt="" className="logo-div" />
      </div>
      <div class="search-div">
        <input
          ref={inputEl}
          type="text"
          id="search"
          required
          placeholder="Search by League...."
          value={props.items}
          onChange={getSearchItem}
        />
        <div class="icon-btn" onClick={searchClick}>
          <FaSearch />
        </div>
        </div>
        <div className="registering-div">
          <button onClick={show}>Sign in</button>
          <button onClick={show2}>Sign up</button>

        </div>
      </div>
  );
};

export default Navbar;
