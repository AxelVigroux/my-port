import { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { useLocation } from 'react-router-dom';

export default function Scene() {
  const computer = useRef();
  const location = useLocation();
  const link = 'https://prod.spline.design/2DmV0Vd0-e0YFvfo/scene.splinecode';

  function onLoad(spline) {
    const obj = spline.findObjectByName('Computer');
    computer.current = obj;
  }

  return (
    <div
      style={
        location.pathname !== '/'
          ? {
              position: 'absolute',
              top: -99999,
              width: '100vw',
              height: '100vh',
            }
          : {}
      }
    >
      <Spline scene={link} onLoad={onLoad} />
    </div>
  );
}
