import React, { useState } from 'react';

const ImageWithFallback = ({ src, alt, ...props }) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <img
      src={error ? `${process.env.PUBLIC_URL}/images/fallback.jpg` : src}
      alt={alt}
      onError={handleError}
      {...props}
    />
  );
};

export default ImageWithFallback;
