import React, { useEffect, useRef } from "react";

const CursorBall = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let ballX = 0;
    let ballY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      ballX += (mouseX - ballX) * 0.15;
      ballY += (mouseY - ballY) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${ballX}px`;
        cursorRef.current.style.top = `${ballY}px`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed z-[9999] pointer-events-none flex items-center justify-center"
      style={{
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        border: "1.5px solid purple",
        transform: "translate(-50%, -50%)",
        left: 0,
        top: 0,
      }}
    >
      <div
        className="bg-[#3c267d] rounded-full"
        style={{
          width: "9px",
          height: "9px",
        }}
      />
    </div>
  );
};

export default CursorBall;
