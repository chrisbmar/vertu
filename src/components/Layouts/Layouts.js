import React from 'react';
import styles from './Layouts.module.css';
import data from '../../data';

import Aux from '../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const layouts = () => {
    const images = data.layouts.map((el, i) => {
        return (
            <div key={i} className={styles.Layouts_imageContainer}>
                <span className={styles.Layouts_imageContainer_text}>{el.imageText}</span>
                <img className={styles.Layouts_imageContainer_img} src={el.src}></img>
            </div>
        )
    });
    return (
        <Aux>
            <div className={styles.Layouts}>
                {images}
                <span>* Wheelchair user can sit a little further forward (not as forward as Row 2 seats)</span>
            </div>
            <div className={styles.Layouts_buttonContainer}>
                <Button buttonText="View our Versa Connect offers"/>
            </div>
        </Aux>
    )
}

export default layouts;