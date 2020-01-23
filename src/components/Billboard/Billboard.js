import React from 'react';
import styles from './Billboard.module.css';

const billboard = props => (
    <div className={styles.Billboard}>
        <img className={styles.Billboard_image}src={props.src}></img>
    </div>
);

export default billboard;