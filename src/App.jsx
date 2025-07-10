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

          vantaRef.current = vantaEffect;
        }
      }
    };

    // Small delay to ensure DOM is ready
    const timer = setTimeout(initVanta, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (vantaRef.current) {
        vantaRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Find all h2 elements and apply rotation effect
      const h2Elements = document.querySelectorAll('h2');

      h2Elements.forEach((h2) => {
        // Calculate mouse position relative to viewport center
        const mouseX = e.clientX - window.innerWidth / 2;
        const mouseY = e.clientY - window.innerHeight / 2;

        // Calculate rotation values (limit to small angles)
        const maxRotation = 50; // Increased for stronger effect
        const rotateX = (mouseY / window.innerHeight) * maxRotation * -1;
        const rotateY = (mouseX / window.innerWidth) * maxRotation;

        // Apply transform
        h2.style.transform = `
          perspective(1000px) 
          rotateX(${rotateX}deg) 
          rotateY(${rotateY}deg)
        `;
      });
    };

    // Add event listener
    document.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
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
