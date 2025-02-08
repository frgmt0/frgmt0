import React, { useEffect, useState } from "react";
import { Chart as ChartJS } from 'chart.js';

const Preloader = ({ onLoadComplete }) => {
  const [assetsLoaded, setAssetsLoaded] = useState(false);
  const [chartsInitialized, setChartsInitialized] = useState(false);

  // Initialize Chart.js
  useEffect(() => {
    const initCharts = async () => {
      try {
        // Force Chart.js to initialize its canvas context
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const chart = new ChartJS(ctx, {
          type: 'bar',
          data: { labels: [], datasets: [] },
          options: { responsive: true }
        });
        chart.destroy();
        setChartsInitialized(true);
      } catch (error) {
        console.error('Failed to initialize charts:', error);
        setChartsInitialized(true); // Continue anyway
      }
    };
    initCharts();
  }, []);

  // Load assets
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
      })
      .catch(error => {
        console.error('Failed to load assets:', error);
        setAssetsLoaded(true); // Continue anyway
      });
  }, []);

  // Trigger completion when both assets and charts are ready
  useEffect(() => {
    if (assetsLoaded && chartsInitialized && onLoadComplete) {
      console.log('All assets and charts initialized');
      onLoadComplete();
    }
  }, [assetsLoaded, chartsInitialized, onLoadComplete]);

  return null;
};

export default Preloader;
