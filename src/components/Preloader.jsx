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
    console.log('Starting asset loading...');
    const loadAssets = async () => {
      try {
        const font = new FontFace('Borela', `url(/fonts/text/BORELA.otf)`);
        await font.load();
        document.fonts.add(font);
        console.log('Font loaded');

        const loadImage = (src) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              console.log(`Image loaded: ${src}`);
              resolve();
            };
            img.onerror = (e) => {
              console.error(`Failed to load image: ${src}`, e);
              reject(e);
            };
            img.src = src;
          });
        };

        await Promise.all([
          loadImage('/images/background.jpg'),
          loadImage('/images/avatar.jpg')
        ]);
        
        console.log('All assets loaded successfully');
        setAssetsLoaded(true);
      } catch (error) {
        console.error('Asset loading failed:', error);
        // Even if assets fail, we should continue
        setAssetsLoaded(true);
      }
    };

    loadAssets();
  }, []);

  // Trigger completion when both assets and charts are ready
  useEffect(() => {
    const initialize = async () => {
      console.log('Assets loaded:', assetsLoaded, 'Charts initialized:', chartsInitialized);
      if (assetsLoaded && chartsInitialized) {
        console.log('All assets and charts initialized');
        // Small delay to ensure everything is ready
        await new Promise(resolve => setTimeout(resolve, 100));
        if (onLoadComplete) {
          console.log('Calling onLoadComplete');
          onLoadComplete();
        } else {
          console.log('No onLoadComplete callback provided');
        }
      }
    };
    initialize();
  }, [assetsLoaded, chartsInitialized, onLoadComplete]);

  return null;
};

export default Preloader;
