import "./chip.css";
import { useVideoList } from "../../context/videoListContext";
import { CATEGORY } from "../../reducer/videoListConstant";

const Chip = () => {
  const {state, dispatch} = useVideoList()
  const {category} = state
  return (
    <div className="chip-container flex">
      <div className={`chip font-sm ${category === "All" ? "active" : ""}`} onClick={() => dispatch({type: CATEGORY, payload:"All"})}>
        <p>All</p>
      </div>
      <div className={`chip font-sm ${category === "Astrophysics" ? "active" : ""}`} onClick={() => dispatch({type: CATEGORY, payload:"Astrophysics"})}>
        <p>Astrophysics</p>
      </div>
      <div className={`chip font-sm ${category === "Astrobiology" ? "active" : ""}`} onClick={() => dispatch({type: CATEGORY, payload:"Astrobiology"})}>
        <p>Astrobiology</p>
      </div>
      <div className={`chip font-sm ${category === "Cosmic Mysteries" ? "active" : ""}`} onClick={() => dispatch({type: CATEGORY, payload:"Cosmic Mysteries"})}>
        <p>Cosmic Mysteries</p>
      </div>
      <div className={`chip font-sm ${category === "Universe" ? "active" : ""}`} onClick={() => dispatch({type: CATEGORY, payload:"Universe"})}>
        <p>Universe</p>
      </div>
    </div>
  );
};

export default Chip;
