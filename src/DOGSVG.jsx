import "./App.css";
import layer6 from "./images/layer6.png";
import musclesJson from "./muscles.json";

function handleHover(e) {
  const found = musclesJson.find((element) => {
    return element.id === e.target.id;
  });
  console.log(found.bodyName);
  console.log(found.action);
}
function DOGSVG() {
  return (
    <svg
      version="1.1"
      viewBox="0 0 4204 3294"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <image
        className="dog-image"
        width="4204"
        height="3294"
        preserveAspectRatio="none"
        xlinkHref={layer6}
      />
      <g>
        {musclesJson.map((el) => (
          <g key={el.id} className="full-group">
            <path
              id={el.id}
              key={el.id}
              d={el.path}
              onMouseEnter={handleHover}
            />
          </g>
        ))}
      </g>
    </svg>
  );
}

export default DOGSVG;
