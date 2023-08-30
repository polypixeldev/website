import { useState, useEffect } from "react";

function Star() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    function handleResize() {
      setX(Math.floor(Math.random() * window.innerWidth));
      setY(Math.floor(Math.random() * window.innerHeight));
    }

    window.addEventListener("resize", handleResize);
    handleResize();
  }, []);

  return (
    <div
      className="fixed -z-10 h-1 w-1 rounded-full bg-white blur-sm"
      style={{
        left: x,
        top: y,
      }}
    />
  );
}

export default Star;
