import React, { useEffect, useState } from "react";

const Preloader = ({ onLoadComplete }) => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    const assets = [
      "/fonts/text/BORELA.otf",
      "/images/background.jpg",
      "/images/avatar.jpg"
    ];

    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    const loadFont = (src) => {
      return new Promise((resolve, reject) => {
        const font = new FontFace('Borela', `url(${src})`);
        font.load().then(() => {
          document.fonts.add(font);
          resolve();
        }).catch(reject);
      });
    };

    Promise.all([
      loadFont('/fonts/text/BORELA.otf'),
      loadImage('/images/background.jpg'),
      loadImage('/images/avatar.jpg')
    ])
      .then(() => {
        setAssetsLoaded(true);
        if (onLoadComplete) onLoadComplete();
      })
      .catch(error => {
        console.error('Failed to load assets:', error);
        // Still mark as loaded to prevent infinite loading screen
        setAssetsLoaded(true);
        if (onLoadComplete) onLoadComplete();
      });
  }, [onLoadComplete]);

  return null;
};

export default Preloader;
