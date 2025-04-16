import React, { useState } from 'react';

const Carousel = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeftClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const handleRightClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick={handleLeftClick}>Left</button>
            <img
                src={images[currentIndex]}
                alt="carousel"
                style={{ width: '300px', height: '200px' }}
            />
            <button onClick={handleRightClick}>Right</button>
        </div>
    );
};

export default Carousel;
