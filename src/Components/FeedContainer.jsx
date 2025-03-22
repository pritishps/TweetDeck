import { useState, useRef } from "react";

function App() {
  const [width, setWidth] = useState(200); // Initial width
  const resizableRef = useRef(null);

  const handleMouseDown = (event) => {
    event.preventDefault();
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (event) => {
    if (resizableRef.current) {
      setWidth(event.clientX);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        ref={resizableRef}
        className="resizable-div"
        style={{ width: `${width}px` }}
      >
        Some text
      </div>
      <div
        className="resizer"
        onMouseDown={handleMouseDown}
      />
    </div>
  );
}

export default App;
