import { useRef, useEffect } from "react";
import "./MagnetLines.css";

export default function MagnetLines({
  rows = 20,
  columns = 20,
  containerSize = "100vw",
  lineColor = "#efefef",
  lineWidth = "30px",
  lineHeight = "30px",
  baseAngle = -10,
  className = "",
  style = {},
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll("span");
    let rafId;
    let lastPointer = { x: 0, y: 0 };
    let isMoving = false;

    const calculateRotation = (item, pointer) => {
      const rect = item.getBoundingClientRect();
      const centerX = rect.x + rect.width / 2;
      const centerY = rect.y + rect.height / 2;

      const b = pointer.x - centerX;
      const a = pointer.y - centerY;
      const c = Math.sqrt(a * a + b * b) || 1;
      return ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > centerY ? 1 : -1);
    };

    const updateRotations = () => {
      if (!isMoving) return;

      items.forEach((item) => {
        const distance = Math.hypot(
          item.offsetLeft - lastPointer.x,
          item.offsetTop - lastPointer.y
        );

        // Only update items within a certain radius of the pointer
        if (distance < 300) {
          const r = calculateRotation(item, lastPointer);
          item.style.setProperty("--rotate", `${r}deg`);
        }
      });

      rafId = requestAnimationFrame(updateRotations);
    };

    const onPointerMove = (e) => {
      lastPointer = { x: e.clientX, y: e.clientY };
      if (!isMoving) {
        isMoving = true;
        rafId = requestAnimationFrame(updateRotations);
      }
    };

    const onPointerLeave = () => {
      isMoving = false;
      cancelAnimationFrame(rafId);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);

    // Initial position
    if (items.length) {
      const middleIndex = Math.floor(items.length / 2);
      const rect = items[middleIndex].getBoundingClientRect();
      lastPointer = { x: rect.x, y: rect.y };
      requestAnimationFrame(updateRotations);
    }

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const total = rows * columns;
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      style={{
        "--rotate": `${baseAngle}deg`,
        color: lineColor,
        width: lineWidth,
        height: lineHeight,
        fontSize: lineWidth,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      +
    </span>
  ));

  return (
    <div
      ref={containerRef}
      className={`magnetLines-container ${className}`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width: containerSize,
        height: containerSize,
        ...style,
      }}
    >
      {spans}
    </div>
  );
}
