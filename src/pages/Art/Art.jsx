import { useState } from 'react';
import { motion } from 'framer-motion';
import TiltedCard from '../../components/tiltedcard/TitledCard';

const artworks = [
  {
    id: 'canadawaterfall',
    title: 'Canada Waterfall',
    image: '/photos/canadawaterfall.jpg',
    category: 'Nature'
  },
  {
    id: 'canyonview',
    title: 'Canyon View',
    image: '/photos/canyonview.jpg',
    category: 'Landscape'
  },
  {
    id: 'library',
    title: 'Library',
    image: '/photos/library.jpg',
    category: 'Architecture'
  },
  {
    id: 'treebranch',
    title: 'Tree Branch',
    image: '/photos/treebranch.jpg',
    category: 'Nature'
  },
  {
    id: 'yellowstone1',
    title: 'Yellowstone',
    image: '/photos/yellowstone1.jpg',
    category: 'Landscape'
  }
];

const Art = () => {
  const [filter, setFilter] = useState('all');
  const categories = ['all', ...new Set(artworks.map(art => art.category))];
  
  const filteredArtworks = filter === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === filter);

  return (
    <div className="container">
      <section className="content-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>Art Gallery</h1>
          <p>A collection of photographs and digital art exploring nature, architecture, and abstract concepts.</p>
          
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`filter-button ${filter === category ? 'active' : ''}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {filteredArtworks.map((artwork) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <TiltedCard
                  imageSrc={artwork.image}
                  altText={artwork.title}
                  containerHeight="300px"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={8}
                  displayOverlayContent={true}
                  overlayContent={
                    <div className="p-6 text-center">
                      <h3 className="text-2xl mb-4">{artwork.title}</h3>
                      <p className="text-sm opacity-80">{artwork.category}</p>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Art;
