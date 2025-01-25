import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const ShapeBlur = ({
  variation = 0,
  pixelRatioProp = 1,
  shapeSize = 0.5,
  roundness = 0.5,
  borderSize = 0.05,
  circleSize = 0.5,
  circleEdge = 1,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const pixelRatio = pixelRatioProp;
    const width = canvas.offsetWidth * pixelRatio;
    const height = canvas.offsetHeight * pixelRatio;

    canvas.width = width;
    canvas.height = height;
    ctx.scale(pixelRatio, pixelRatio);

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Set up gradient
    const gradient = ctx.createRadialGradient(
      width / 2, height / 2, 0,
      width / 2, height / 2, width / 2
    );
    gradient.addColorStop(0, 'rgba(255, 51, 102, 0.15)'); // Primary color with opacity
    gradient.addColorStop(1, 'rgba(153, 51, 255, 0)'); // Accent color fading to transparent

    // Draw shape
    ctx.fillStyle = gradient;
    ctx.filter = 'blur(50px)';

    const centerX = width / 2;
    const centerY = height / 2;
    const size = Math.min(width, height) * shapeSize;

    switch (variation) {
      case 0: // Circle
        ctx.beginPath();
        ctx.arc(centerX, centerY, size / 2, 0, Math.PI * 2);
        ctx.fill();
        break;
      case 1: // Square
        ctx.fillRect(
          centerX - size / 2,
          centerY - size / 2,
          size,
          size
        );
        break;
      default:
        ctx.beginPath();
        ctx.arc(centerX, centerY, size / 2, 0, Math.PI * 2);
        ctx.fill();
    }
  }, [variation, pixelRatioProp, shapeSize, roundness, borderSize, circleSize, circleEdge]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
};

ShapeBlur.propTypes = {
  variation: PropTypes.number,
  pixelRatioProp: PropTypes.number,
  shapeSize: PropTypes.number,
  roundness: PropTypes.number,
  borderSize: PropTypes.number,
  circleSize: PropTypes.number,
  circleEdge: PropTypes.number,
};

export default ShapeBlur;
