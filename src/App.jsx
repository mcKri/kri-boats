import { useEffect, useRef } from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import ProjectList from './components/ProjectList';
import AudioVisualizer from './components/AudioVisualizer.jsx';
import './App.css'

export default function App() {
  const vantaRef = useRef(null);
  const coverRef = useRef(null);

  useEffect(() => {
    const initVanta = () => {
      if (coverRef.current) {
        console.log('Initializing VANTA birds effect...');
        if (window.VANTA && window.VANTA.BIRDS) {
          const vantaEffect = window.VANTA.BIRDS({
            el: coverRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            scale: 1.00,
            scaleMobile: 1.00,
            color1: 0x3ecdf0,
            color2: 0xed904d,
            colorMode: "lerp",
            birdSize: 1.20,
            wingSpan: 1.00,
            quantity: 3.00,
            separation: 27.00,
            alignment: 30.00,
            cohesion: 50.00,
            speedLimit: 4.00,
            backgroundAlpha: 0.00,
          });

          console.log('VANTA effect created:', vantaEffect);

          // Debug: Check if canvas was created
          setTimeout(() => {
            const canvas = coverRef.current.querySelector('canvas');
            console.log('Canvas found:', canvas);
            if (canvas) {
              console.log('Canvas dimensions:', canvas.width, 'x', canvas.height);
              console.log('Canvas style:', canvas.style.cssText);
            }
          }, 500);

          vantaRef.current = vantaEffect;
        } else {
          console.log('VANTA.BIRDS not available');
        }
      } else {
        console.log('Cover ref not available');
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initVanta, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (vantaRef.current) {
        console.log('Destroying VANTA effect');
        vantaRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="App">
      <div className="cover" id="cover" ref={coverRef}>
        <Header />
        <Intro />
      </div>

      <div className="main-content-background"></div>

      <div className="main-content">
        <h2>projects</h2>
        <ProjectList />

        <footer>i made this</footer>
      </div>

      <AudioVisualizer />
    </div>
  )
}
