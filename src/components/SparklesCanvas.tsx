import React, { useEffect, useRef } from "react";

const SparklesCanvas: React.FC<{ color?: string }> = ({ color = "255,255,255" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const particles: any[] = [];
    const particleCount = Math.round((w * h) / 60000); // adjusts with screen area
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 0.6,
        vx: (Math.random() - 0.5) * 0.2,
        vy: Math.random() * 0.6 + 0.2,
        alpha: Math.random() * 0.6 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        ctx.beginPath();
        ctx.fillStyle = `rgba(${color},${p.alpha})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.0005;
        if (p.y > h + 5 || p.alpha <= 0) {
          p.x = Math.random() * w;
          p.y = -10;
          p.r = Math.random() * 2 + 0.6;
          p.vx = (Math.random() - 0.5) * 0.2;
          p.vy = Math.random() * 0.6 + 0.2;
          p.alpha = Math.random() * 0.6 + 0.1;
        }
      }
      requestAnimationFrame(draw);
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    draw();

    return () => window.removeEventListener("resize", handleResize);
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 w-full h-full z-0"
    />
  );
};

export default SparklesCanvas;
