import logo from "../Image/Logo3.png";
import { FaSearch } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { BsBagCheckFill } from "react-icons/bs";
import { FaCocktail } from "react-icons/fa";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { FaRegFileVideo} from "react-icons/fa";
import { ImHome } from "react-icons/im";
import { useRef } from "react";
import Vernavbar from "./Ver-navbar";

const Navbar = (props) => {
    console.log(props);
  const inputEl = useRef("");

  const getSearchItem = () => {
    props.searchKeyword(inputEl.current.value);
    console.log(inputEl.current.value)
  };
  const searchClick = () => {};

  return (
    <div className="top-nav">
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
          <a className="homer"><ImHome className="icons" /><span>Home</span></a>
          <a href="https://sportify3.vercel.app/" className="gamer"><IoMdFootball className="icons" /><span>Football</span></a>
          <a  className="jober"><BsBagCheckFill className="icons" /><span>Jobs</span></a>
          <a className="drinker"><FaCocktail className="icons" /><span>Cocktails</span></a>
          <a className="publisher"><MdOutlinePublishedWithChanges className="icons" /><span>Publish</span></a>
          <a  className="Videoer"><FaRegFileVideo className="icons" /><span>Short Videos</span></a>
        </div>

        
      </div>
         <Vernavbar />
      </div>
  );
};

export default Navbar;
