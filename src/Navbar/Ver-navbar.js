// import { FaSearch } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { BsBagCheckFill } from "react-icons/bs"
import { FaCocktail } from "react-icons/fa"
import { MdOutlinePublishedWithChanges } from "react-icons/md"
import { FaRegFileVideo} from "react-icons/fa"
import { ImHome } from "react-icons/im"




const Vernavbar = () => {
    return ( 
        <div>
         <div className="project-icons2">
          <button className="homer"><ImHome className="icons" /><span>Home</span></button>
          <button  className="gamer"><IoMdFootball className="icons" /><span>Football</span></button>
          <button  className="jober"><BsBagCheckFill className="icons" /><span>Jobs</span></button>
          <button className="drinker"><FaCocktail className="icons" /><span>Cocktails</span></button>
          <button className="publisher"><MdOutlinePublishedWithChanges className="icons" /><span>Publish</span></button>
          <button  className="Videoer"><FaRegFileVideo className="icons" /><span>Short Videos</span></button>
        </div>
        </div>
     );
}
 
export default Vernavbar;