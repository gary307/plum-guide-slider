import styles from "./ImageSlider.module.css";
import cn from "classnames";
import axios from "axios";
import { useState, useEffect, useRef } from "react";

const ImageSlider = () => {
  const [images, setImages] = useState<Array<any>>([]);
  const [imageIndex, setImageIndex] = useState<number>(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const [sliderOffset, setSliderOffset] = useState<number>(0);

  //function to initial grab images on page load
  const fetchImages = async () => {
    const imageRequest = await axios("/Listing/Photos?id=2591", {
    });

    const imageList = imageRequest.data.imageUrls.filter(
      (_img: any, i: number) => i < 31
    );

    setImages(imageList);
  };

  //toggle left function for incrimenting image number
  const toggleLeft = () => {
    setImageIndex(imageIndex - 1);
  };

  //toggle right function for deceacing image number
  const toggleRight = () => {
    setImageIndex(imageIndex + 1);
  };

  //use effect to toggle offset value for slider
  useEffect(() => {
    const offsetWidth = imageRef.current?.offsetWidth ?? 0;
    setSliderOffset(offsetWidth * imageIndex);
  }, [imageIndex]);

  //initial fetch on mount for all images
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Buttons}>
        {imageIndex > 0 && (
          <button onClick={toggleLeft} className={styles.ArrowLeft}>
            LEFT
          </button>
        )}
        <button onClick={toggleRight} className={styles.ArrowRight}>
          RIGHT
        </button>
      </div>

      <div className={styles.Slider}>
        <div
          className={styles.ImageContainer}
          style={{
            transition: "transform 1s ease-in-out",
            transform: `translateX(${-sliderOffset}px)`,
          }}
        >
          {images.length > 1 && images.map((image, i) => (
            <img
              ref={i === 0 ? imageRef : null}
              className={cn([styles.Image, styles.activeImage])}
              src={`${image}?fm=webp&q=50&w=1200`}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
