import React from 'react';
import styles from './CallToAction.module.css';

import Button from '../../UI/Button/Button';

const callToAction = (props) => {
    
    const text = props.data.map((el, i) => {
        return (
            <p key={i} className={styles.CallToAction_text}>{el}</p>
        );
    });

    return (
        <div className={styles.CallToAction}>
            {text}
            <div className={styles.CallToAction_buttonContainer}>
                <Button buttonText="View our Versa Connect offers"/>
            </div>
        </div>
    );
}

export default callToAction;