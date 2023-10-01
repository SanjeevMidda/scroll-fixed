import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [rotate, setRotate] = useState(0);
  const [color, setColor] = useState("blue");

  let updatePosition = () => {
    setScrollPosition(window.scrollY);
  };

  let randomColor = () => {
    return Math.floor(Math.random() * 255);
  };

  useEffect(() => {
    window.addEventListener("scroll", updatePosition);
  }, []);

  useEffect(() => {
    setColor({ one: randomColor(), two: randomColor(), three: randomColor() });
    setRotate(rotate + 10);
  }, [scrollPosition]);

  return (
    <div className="App">
      <div
        className="circle"
        style={{
          transform: `rotate(${rotate}deg)`,
          backgroundColor: `rgb(${color.one} ${color.two} ${color.three})`,
        }}
      >
        {scrollPosition}
      </div>
    </div>
  );
}

export default App;
