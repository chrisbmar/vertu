import React from 'react';
import styles from './Button.module.css';

const button = (props) => (
    <div class={styles.Button}>{props.buttonText}</div>
);

export default button;