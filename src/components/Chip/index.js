import "./chip.css";
import { useVideoList } from "../../context/videoListContext";
import { CATEGORY } from "../../reducer/video/videoListConstant";

const Chip = () => {
  const {state, dispatch} = useVideoList()
  const {category} = state
  const categoryData = ["All", "Astrophysics", "Astrobiology", "Cosmic Mysteries", "Universe" ]

  return (
    <div className="chip-container flex">
      {categoryData.map((item, index) => (
      <div className={`chip font-sm ${category === item ? "active" : ""}`} onClick={() => dispatch({type: CATEGORY, payload:item})} key={index}>
        <p>{item}</p>
      </div>
      ))}
    </div>
  );
};

export default Chip;