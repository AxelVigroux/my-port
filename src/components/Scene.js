import { useRef, useMemo } from "react";
import Spline from "@splinetool/react-spline";

export default function Scene() {
  const computer = useRef();
  const link = "https://prod.spline.design/2DmV0Vd0-e0YFvfo/scene.splinecode";

  function onLoad(spline) {
    const obj = spline.findObjectByName("Computer");
    computer.current = obj;
  }

  return (
    <div>
      <Spline scene={link} onLoad={onLoad} />
    </div>
  );
}
