import React from 'react';
import styles from './Trim.module.css';
import data from '../../data';

import Button from '../../UI/Button/Button';

const trim = () => {

    const trimContainer = data.trim.map((el, i) => {
        return (
            <div key={i} className={styles.Trim_thumbnailImageContainer}>
                <img className={styles.Trim_thumbnailImageContainer_img} src={el.src}></img>
                <div className={styles.Trim_thumbnailImageContainer_textContent}>
                    <span className={styles.Trim_thumbnailImageContainer_title}>{el.title}</span>
                    <i class="far fa-square"></i>
                    <p>{el.text1}</p>
                    <p>{el.text2}</p>
                </div>
            </div>
        );
    });

    return (
        <React.Fragment>
            <div className={styles.Trim}>
                <div className={styles.Trim_mainImageContainer}>
                    <img className={styles.Trim_mainImageContainer_img} src="https://www.bristolstreetversa.com/custom/50563.jpg"></img>
                </div>
                <div className={styles.Trim_thumbnailContainer}>
                    {trimContainer}
                </div>
            </div>
            <div className={styles.Trim_buttonContainer}>
                <Button buttonText="View our Versa Connect offers"/>
            </div>
        </React.Fragment>
    );
}

export default trim;