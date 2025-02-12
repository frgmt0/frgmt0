import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './TiltedCard.css';

const TiltedCard = ({
  imageSrc,
  altText,
  captionText,
  containerHeight = "300px",
  containerWidth = "300px",
  imageHeight = "300px",
  imageWidth = "300px",
  rotateAmplitude = 12,
  scaleOnHover = 1.2,
  showMobileWarning = false,
  showTooltip = true,
  displayOverlayContent = true,
  overlayContent
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -rotateAmplitude;
    const rotateY = ((x - centerX) / centerX) * rotateAmplitude;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      style={{
        height: containerHeight,
        width: containerWidth,
        perspective: "1000px"
      }}
      className="tilted-card-wrapper"
    >
      {showMobileWarning && isMobile && (
        <div className="mobile-warning">
          Tilt effect is disabled on mobile devices
        </div>
      )}
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? scaleOnHover : 1})`,
          transition: "transform 0.1s ease-out",
          transformStyle: "preserve-3d"
        }}
        className="tilted-card-container"
      >
        <div
          style={{
            height: imageHeight,
            width: imageWidth,
          }}
          className="tilted-card-content"
        >
          <h2 className="tilted-card-title">
            {altText}
          </h2>
        </div>
        {displayOverlayContent && (
          <div 
            className="tilted-card-overlay-content"
            style={{
              transform: "translateZ(20px)"
            }}
          >
            {overlayContent}
          </div>
        )}

        {showTooltip && (
          <div 
            className="tilted-card-tooltip"
          >
            {captionText}
          </div>
        )}
      </div>
    </div>
  );
};

TiltedCard.propTypes = {
  imageSrc: PropTypes.string,
  altText: PropTypes.string.isRequired,
  captionText: PropTypes.string,
  containerHeight: PropTypes.string,
  containerWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  imageWidth: PropTypes.string,
  rotateAmplitude: PropTypes.number,
  scaleOnHover: PropTypes.number,
  showMobileWarning: PropTypes.bool,
  showTooltip: PropTypes.bool,
  displayOverlayContent: PropTypes.bool,
  overlayContent: PropTypes.node
};

export default TiltedCard;
