import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const ShapeBlur = ({ borderWidth = 2, blurRadius = 20, opacity = 0.5 }) => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const pixelRatio = window.devicePixelRatio || 1;

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * pixelRatio;
      canvas.height = rect.height * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    canvas.parentElement.addEventListener("mousemove", handleMouseMove);
    canvas.parentElement.addEventListener("mouseleave", () => {
      setMousePos({ x: rect.width / 2, y: rect.height / 2 });
    });

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      canvas.parentElement.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Create gradient for the border
    const gradient = ctx.createLinearGradient(
      mousePos.x - blurRadius * 2,
      mousePos.y - blurRadius * 2,
      mousePos.x + blurRadius * 2,
      mousePos.y + blurRadius * 2,
    );
    gradient.addColorStop(0, `rgba(255, 51, 102, ${opacity})`);
    gradient.addColorStop(0.5, `rgba(153, 51, 255, ${opacity})`);
    gradient.addColorStop(1, `rgba(51, 255, 153, ${opacity})`);

    // Draw border
    ctx.strokeStyle = gradient;
    ctx.lineWidth = borderWidth;
    ctx.filter = `blur(${blurRadius}px)`;

    // Draw rounded rectangle
    const padding = blurRadius + borderWidth;
    ctx.beginPath();
    ctx.roundRect(
      padding,
      padding,
      rect.width - padding * 2,
      rect.height - padding * 2,
      10,
    );
    ctx.stroke();
  }, [mousePos, borderWidth, blurRadius, opacity]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
};

ShapeBlur.propTypes = {
  borderWidth: PropTypes.number,
  blurRadius: PropTypes.number,
  opacity: PropTypes.number,
};

export default ShapeBlur;
