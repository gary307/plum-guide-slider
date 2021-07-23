import  react  from "react";
import styles from './BookingSelector.module.css';
import cn from 'classnames';

const BookingSelector = () => {
  return (
    <div className={styles.Wrapper}> 
      <div className={styles.SelectCol}>
        <div className={styles.SelectEyebrow}>From  / To</div>
        <span className={styles.SelectValue}> 2 Jan 2020 - 28 Feb 2020</span>
      </div>
      <div className={styles.SelectCol}>
        <div className={styles.SelectEyebrow}>For</div>
        <span className={styles.SelectValue}> 2 Guests</span>
      </div>
      <div className={styles.SelectCol}>
        <div className={styles.SelectEyebrow}>£ Per night</div>
        <span className={styles.SelectValue}>345</span>
      </div>
      <div className={cn([styles.SelectCol, styles.borderlessSelectCol])}>
        <div className={styles.SelectEyebrow}>£ Total for 54 nights</div>
        <span className={styles.SelectValue}> 18, 630</span>
      </div>

      <div className={styles.SelectButton}>
          <button className={styles.Button}>Instant booking</button>
      </div>
    </div>
  );
};


export default BookingSelector;