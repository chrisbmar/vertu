import React from 'react';
import styles from './FixedIcons.module.css';

const fixedIcons = (props) => {

    const iconsMoreInfo = props.data.map((el, i) => {
        return (
            <div key={i} className={styles.FixedIcons_moreInfo_item}>
                <i class={el.className}></i>
                <span className={styles.Fixedcons_moreInfo_item_label}>{el.iconText}</span>
            </div>
        )
    });

    return (
    <div className={styles.FixedIcons}>
        <div className={styles.FixedIcons_madeBy}>
            <div className={styles.FixedIcons_madeBy_inVision}>Made in InVision</div>
        </div>
        <div className={styles.FixedIcons_moreInfo}>
            {iconsMoreInfo}
        </div>
    </div>
    )
};

export default fixedIcons