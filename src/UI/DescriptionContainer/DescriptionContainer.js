import React from 'react';
import styles from './DescriptionContainer.module.css';

const descriptionContainer = (props) => (
    <div className={styles.DescriptionContainer}>
        <span className={styles.DescriptionContainer_heading}>Versa Connect</span>
        <p className={styles.DescriptionContainer_textContent}>{props.text}</p>
    </div>
);

export default descriptionContainer;