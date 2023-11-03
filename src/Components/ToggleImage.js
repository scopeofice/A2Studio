import React, { useState } from 'react';

const ToggleImage = ({ image1, image2, isMobile }) => {
  const [showImage1, setShowImage1] = useState(true);

  const toggleImage = () => {
    setShowImage1(!showImage1);
  };

  return (
    <div className="relative">
      {showImage1 ? (
        <img src={image1} alt="Image 1" className={isMobile ? '' : 'mb-12 shadow-lg'} />
      ) : (
        <img src={image2} alt="Image 2" className={isMobile ? '' : 'mb-12 shadow-lg'} />
      )}

      <button onClick={toggleImage} className="absolute top-2 right-2 text-dark/75 dark:text-light/75 bg-light dark:bg-dark rounded-full p-2 cursor-pointer hover:bg-dark/75 hover:text-light/75">
        Toggle Image
      </button>
    </div>
  );
};

export default ToggleImage;
