import React from 'react';
import styles from './Billboard.module.css';

import DescriptionContainer from '../../UI/DescriptionContainer/DescriptionContainer';

const billboard = (props) => (
    <div className={styles.Billboard}>
        <img className={styles.Billboard_image}src={props.src}></img>
        <DescriptionContainer 
            text={props.text} 
            heading={props.heading}/>
    </div>
);

export default billboard;