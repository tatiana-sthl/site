import React, { useState } from "react";
import './slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';

export const Slider = ({ items }) => {
  const [curSlide, setCurSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const checkIndex = (position) => {
    if (position > items.length - 1) {
      return 0;
    } else if (position < 0) {
      return items.length - 1;
    }
    return position;
  };

  const nextSlide = () => {
    setCurSlide((prevSlide) => checkIndex(prevSlide + 1));
  };

  const prevSlide = () => {
    setCurSlide((prevSlide) => checkIndex(prevSlide - 1));
  };

  const openImage = (imageURL) => {
    setSelectedImage(imageURL);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="slider">
        <div className="slider-controls">
          <button className="sliderControlsLeft" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="sliderControlsRight" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
        {items.map((slide, index) => (
          <div key={index} className={`slide ${index === curSlide ? "active" : ""}`}>
            <img src={slide.cover} alt="" onClick={() => openImage(slide.cover)} />
            <p>{slide.desc}</p>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeImage}>
          <img src={selectedImage} alt="" className="lightbox-image" />
        </div>
      )}
    </>
  );
};
