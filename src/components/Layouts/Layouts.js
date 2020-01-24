import React from 'react';
import styles from './Layouts.module.css';

import Aux from '../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const layouts = () => (
    <Aux>
        <div className={styles.Layouts}>
            <div className={styles.Layouts_imageContainer}>
                <span className={styles.Layouts_imageContainer_text}>Short (based on Ford Tourneo Connect)</span>
                <img className={styles.Layouts_imageContainer_img} src="https://www.bristolstreetversa.com/custom/50423.jpg"></img>
            </div>
            <div className={styles.Layouts_imageContainer}>
                <span className={styles.Layouts_imageContainer_text}>Long based on Ford Tourneo Grand Connect</span>
                <img className={styles.Layouts_imageContainer_img} src="https://www.bristolstreetversa.com/custom/50422.jpg"></img>
            </div>
            <span>* Wheelchair user can sit a little further forward (not as forward as Row 2 seats)</span>
        </div>
        <div className={styles.Layouts_buttonContainer}>
            <Button buttonText="View our Versa Connect offers"/>
        </div>
    </Aux>

)

export default layouts;