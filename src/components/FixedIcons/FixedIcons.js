import React from 'react';
import styles from './FixedIcons.module.css';

const fixedIcons = () => {

    return (
    <div className={styles.FixedIcons}>
        <div className={styles.FixedIcons_madeBy}>
            <div className={styles.FixedIcons_madeBy_inVision}>Made in InVision</div>
        </div>
        <div className={styles.FixedIcons_moreInfo}>
            <div className={styles.FixedIcons_moreInfo_item}>
                <i class="far fa-comment-alt"></i>
                <span className={styles.Fixedcons_moreInfo_item_label}>Comments</span>
            </div>
            <div className={styles.FixedIcons_moreInfo_item}>
                <i class="fas fa-code"></i>
                <span className={styles.Fixedcons_moreInfo_item_label}>Inspect</span>
            </div>
            <div className={styles.FixedIcons_moreInfo_item}>
                <i class="fas fa-th-large"></i>
                <span className={styles.Fixedcons_moreInfo_item_label}>Screens</span>
            </div>
        </div>
    </div>
    )
};

export default fixedIcons