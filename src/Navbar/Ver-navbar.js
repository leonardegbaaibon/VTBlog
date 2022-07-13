// import { FaSearch } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { BsBagCheckFill } from "react-icons/bs"
import { FaCocktail } from "react-icons/fa"
import { MdOutlinePublishedWithChanges } from "react-icons/md"
import { FaRegFileVideo} from "react-icons/fa"
import { ImHome } from "react-icons/im"
import './Vernavber.css'



const Vernavbar = () => {
    function openNav() {
      document.getElementById("mySidenav").style.width = "150px";
    }
    
    function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
    return ( 
        <div className="vertical-nav">
            <div id="mySidenav" className="project-icons2">
         <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
          <button className="homer"><ImHome className="icons" /><span>Home</span></button>
           <button  className="gamer"><IoMdFootball className="icons" /><span>Football</span></button>
          <button  className="jober"><BsBagCheckFill className="icons" /><span>Jobs</span></button>
           <button className="drinker"><FaCocktail className="icons" /><span>Cocktails</span></button>
          <button className="publisher"><MdOutlinePublishedWithChanges className="icons" /><span>Publish</span></button>
          <button  className="Videoer"><FaRegFileVideo className="icons" /><span>Short Videos</span></button>
</div>


<span className="openav" onClick={openNav}>&#9776; </span>
        </div>
        // <div>
        //  <div id="mySidenav" className="project-icons2">
        //  <a href="javascript:void(0)" className="closebtn" onclick={closeNav}>&times;</a>
        //   <button className="homer"><ImHome className="icons" /><span>Home</span></button>
        //   <button  className="gamer"><IoMdFootball className="icons" /><span>Football</span></button>
        //   <button  className="jober"><BsBagCheckFill className="icons" /><span>Jobs</span></button>
        //   <button className="drinker"><FaCocktail className="icons" /><span>Cocktails</span></button>
        //   <button className="publisher"><MdOutlinePublishedWithChanges className="icons" /><span>Publish</span></button>
        //   <button  className="Videoer"><FaRegFileVideo className="icons" /><span>Short Videos</span></button>
        // </div>
        // <span className="openbtn" onclick={openNav}>&#9776; open</span>
        // </div>
     );
}
 
export default Vernavbar;