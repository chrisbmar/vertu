import React from 'react';
import styles from './SubHeader.module.css';

const subHeader = () => (
    <div className={styles.SubHeader}>
        <div className={styles.SubHeader_carChoice}>
            <span>Versa Connect</span>
            <i style={{marginLeft: '15px'}}class="fas fa-caret-down"></i>
        </div>
        <ul className={styles.SubHeader_carChoiceList}>
            <li className={`${styles.SubHeader_carChoiceList_item} ${styles.SubHeader_carChoiceList_item___bottomBorder}`}>Overview</li>
            <li className={styles.SubHeader_carChoiceList_item}>Offers</li>
            <li className={styles.SubHeader_carChoiceList_item}>Models</li>
            <li className={styles.SubHeader_carChoiceList_item}>Factory Fit Options</li>
        </ul>
    </div>
);

export default subHeader;