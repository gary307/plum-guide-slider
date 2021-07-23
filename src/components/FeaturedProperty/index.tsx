import styles from "./FeaturedProperty.module.css";
import ImageSlider from "./../ImageSlider";
import cn from "classnames";
import { ReactComponent as PinIcon } from "./pin.svg";
import { ReactComponent as StairsIcon } from "./stairs.svg";
import { ReactComponent as UndergroundIcon } from "./underground.svg";

const FeaturedProperty = () => {
  return (
    <div className={styles.Wrapper}>
      <h1 className={styles.Title}>Monsieur Didot</h1>

      <div className={styles.Details}>
        <span className={styles.Detail}>4 People</span>
        <span className={styles.Detail}>2 Bedrooms</span>
        <span className={styles.Detail}>2 Bathrooms</span>
        <span className={styles.Detail}>Private terrase</span>
        <span className={styles.Detail}>Peaceful</span>
      </div>

      <div className={styles.FeaturedDetails}>
        <span className={cn([styles.Detail, styles.featureDetail])}>
          <PinIcon className={styles.FeatureIcon} />
          Notting Hill, London
        </span>
        <span className={cn([styles.Detail, styles.featureDetail])}>
          <UndergroundIcon className={styles.FeatureIcon} />
          Walk 6 mins (Westbourne Park Station)
        </span>
        <span className={cn([styles.Detail, styles.featureDetail])}>
          <StairsIcon className={styles.FeatureIcon} />
          Stairs
        </span>
      </div>
      <ImageSlider />
    </div>
  );
};

export default FeaturedProperty;
