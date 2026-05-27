import { useEffect, useState } from "react";

type Wave = {
  id: number;
  x: number;
  y: number;
};

const clickableSelector = "a, button, input, select, textarea, [role='button']";

function MagneticCursorWaves() {
  const [waves, setWaves] = useState<Wave[]>([]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Element) || !target.closest(clickableSelector)) {
        return;
      }

      const id = window.Date.now() + Math.random();

      setWaves((currentWaves) => [
        ...currentWaves,
        {
          id,
          x: event.clientX,
          y: event.clientY,
        },
      ]);

      window.setTimeout(() => {
        setWaves((currentWaves) =>
          currentWaves.filter((wave) => wave.id !== id)
        );
      }, 700);
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {waves.map((wave) => (
        <span
          key={wave.id}
          className="magnetic-wave"
          style={{
            left: wave.x,
            top: wave.y,
          }}
        />
      ))}
    </div>
  );
}

export default MagneticCursorWaves;
