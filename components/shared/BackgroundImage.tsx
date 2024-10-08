"use client"
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type BackgroundImageSliderProps = {
  images: string[];
  interval?: number; // Time in milliseconds to show each image
};

const BackgroundImageSlider: React.FC<BackgroundImageSliderProps> = ({
  images,
  interval = 7000, // Default to 5 seconds
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageChangeInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(imageChangeInterval);
  }, [images.length, interval]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentImageIndex === index ? 1 : 0,
          }}
          initial={{ scale: 1 }}
          animate={{
            opacity: currentImageIndex === index ? 1 : 0,
            scale: currentImageIndex === index ? 1.1 : 1,
          }}
          transition={{ duration: 5, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

export default BackgroundImageSlider;
