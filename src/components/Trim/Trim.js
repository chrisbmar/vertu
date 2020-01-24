import React from 'react';
import styles from './Trim.module.css';

import Aux from '../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const trim = () => {

    const data = {
        1: {
            src: "https://www.bristolstreetversa.com/custom/51652.jpg",
            title: "Titanium",
            text1: "Insert: Chicane in Medium Stone",
            text2: "Bolster: Malt in Medium Stone"
        },
        2: {
            src: "https://www.bristolstreetversa.com/custom/51653.jpg",
            title: "Zetec",
            text1: "Insert: Route in Charcoal Black",
            text2: "Bolster: Max in Charcoal Black"
        },
        3: {
            src: "https://www.bristolstreetversa.com/custom/51654.jpg",
            title: "Titanium",
            text1: "Insert: Route in Charcoal Black",
            text2: "Bolster: Malt in Charcoal Black"
        }
    }

    const transformedData = Object.keys(data).map((key, i) => {
        return (
            <div className={styles.Trim_thumbnailImageContainer}>
                <img className={styles.Trim_thumbnailImageContainer_img} src={data[key].src}></img>
                <div className={styles.Trim_thumbnailImageContainer_textContent}>
                    <span className={styles.Trim_thumbnailImageContainer_title}>{data[key].title}</span>
                    <i class="far fa-square"></i>
                    <p>{data[key].text1}</p>
                    <p>{data[key].text2}</p>
                </div>
            </div>
        );
    });

    return (
        <Aux>
            <div className={styles.Trim}>
                <div className={styles.Trim_mainImageContainer}>
                    <img className={styles.Trim_mainImageContainer_img} src="https://www.bristolstreetversa.com/custom/50563.jpg"></img>
                </div>
                <div className={styles.Trim_thumbnailContainer}>
                    {transformedData}
                </div>
            </div>
            <div className={styles.Trim_buttonContainer}>
                <Button buttonText="View our Versa Connect offers"/>
            </div>
        </Aux>
    );
}

export default trim;