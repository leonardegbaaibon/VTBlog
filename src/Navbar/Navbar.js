import logo from "../Image/Logo3.png";
import { FaSearch } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { BsBagCheckFill } from "react-icons/bs"
import { FaCocktail } from "react-icons/fa"
import { MdOutlinePublishedWithChanges } from "react-icons/md"
import { FaRegFileVideo} from "react-icons/fa"
import { ImHome } from "react-icons/im"
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
          placeholder="Search News...."
          value={props.items}
          onChange={getSearchItem}
        />
        <div class="icon-btn" onClick={searchClick}>
          <FaSearch />
        </div>
        </div>
        <div className="project-icons">
          <button className="homer"><ImHome className="icons" /><span>Home</span></button>
          <button  className="gamer"><IoMdFootball className="icons" /><span>Football</span></button>
          <button  className="jober"><BsBagCheckFill className="icons" /><span>Jobs</span></button>
          <button className="drinker"><FaCocktail className="icons" /><span>Cocktails</span></button>
          <button className="publisher"><MdOutlinePublishedWithChanges className="icons" /><span>Publish</span></button>
          <button  className="Videoer"><FaRegFileVideo className="icons" /><span>Short Videos</span></button>
        </div>

        {/* <div className="registering-div"> */}
          {/* <button onClick={show}>Sign in</button>
          <button onClick={show2}>Sign up</button> */}

        {/* </div> */}
      </div>
  );
};

export default Navbar;
