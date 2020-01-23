import React from 'react';
import styles from './DescriptionContainer.module.css';

import Button from '../Button/Button';

const descriptionContainer = (props) => (
    <div className={styles.DescriptionContainer}>
        <span className={styles.DescriptionContainer_heading}>{props.heading}</span>
        <p className={styles.DescriptionContainer_textContent}>{props.text}</p>
        <Button buttonText={props.buttonText}/>
    </div>
);

export default descriptionContainer;