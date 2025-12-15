import { useState, useEffect } from "react";

export default function Spotlight() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 transition duration-300"
      style={{
        background: `radial-gradient(400px at ${pos.x}px ${pos.y}px, rgba(100,100,255,0.15), transparent 60%)`,
      }}
    ></div>
  );
}