import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const ShapeBlur = ({ 
  borderWidth = 2, 
  blurRadius = 20, 
  opacity = 0.5,
  bloomIntensity = 2,
  bloomDuration = 1000 
}) => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [bloomState, setBloomState] = useState({ active: false, startTime: 0 });
  const animationFrameRef = useRef();

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

    const handleMouseEnter = () => {
      setIsHovering(true);
      setBloomState({ active: false, startTime: 0 });
    };

    const handleMouseLeave = (e) => {
      setIsHovering(false);
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setBloomState({ 
        active: true, 
        startTime: performance.now(),
        exitX: e.clientX - rect.left,
        exitY: e.clientY - rect.top
      });
    };

    canvas.parentElement.addEventListener("mousemove", handleMouseMove);
    canvas.parentElement.addEventListener("mouseenter", handleMouseEnter);
    canvas.parentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      canvas.parentElement.removeEventListener("mousemove", handleMouseMove);
      canvas.parentElement.removeEventListener("mouseenter", handleMouseEnter);
      canvas.parentElement.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();

    const drawFrame = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let currentBlurRadius = blurRadius;
      let currentOpacity = opacity;
      let currentBorderWidth = borderWidth;

      if (bloomState.active) {
        const elapsed = timestamp - bloomState.startTime;
        const progress = Math.min(elapsed / bloomDuration, 1);
        const easeOutProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out

        currentBlurRadius = blurRadius + (blurRadius * bloomIntensity * easeOutProgress);
        currentOpacity = opacity * (1 - easeOutProgress);
        currentBorderWidth = borderWidth * (1 + bloomIntensity * easeOutProgress);

        if (progress < 1) {
          animationFrameRef.current = requestAnimationFrame(drawFrame);
        }
      }

      const gradient = ctx.createLinearGradient(
        mousePos.x - currentBlurRadius * 2,
        mousePos.y - currentBlurRadius * 2,
        mousePos.x + currentBlurRadius * 2,
        mousePos.y + currentBlurRadius * 2
      );
      
      gradient.addColorStop(0, `rgba(255, 51, 102, ${currentOpacity})`);
      gradient.addColorStop(0.5, `rgba(153, 51, 255, ${currentOpacity})`);
      gradient.addColorStop(1, `rgba(51, 255, 153, ${currentOpacity})`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = currentBorderWidth;
      ctx.filter = `blur(${currentBlurRadius}px)`;

      const padding = currentBlurRadius + currentBorderWidth;
      ctx.beginPath();
      ctx.roundRect(
        padding,
        padding,
        rect.width - padding * 2,
        rect.height - padding * 2,
        10
      );
      ctx.stroke();
    };

    animationFrameRef.current = requestAnimationFrame(drawFrame);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePos, borderWidth, blurRadius, opacity, bloomState, bloomIntensity, bloomDuration]);

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
  bloomIntensity: PropTypes.number,
  bloomDuration: PropTypes.number,
};

export default ShapeBlur;
