import React from 'react';
import styles from './SubHeader.module.css';

const subHeader = (props) => {
    
    const listItems = props.data.map((el, i) => {
        return (
            <li key={i} className={styles.SubHeader_carChoiceList_item}>{el}</li>
        )
    });
    
    return (
        <div className={styles.SubHeader}>
            <div className={styles.SubHeader_carChoice}>
                <span>Versa Connect</span>
                <i style={{marginLeft: '15px'}}class="fas fa-caret-down"></i>
            </div>
            <ul className={styles.SubHeader_carChoiceList}>
                {listItems}
            </ul>
        </div>
    );
}

export default subHeader;