import React from 'react';
import styles from './CallToAction.module.css';

import Button from '../../UI/Button/Button';

const callToAction = (props) => (
    <div className={styles.CallToAction}>
        <p className={styles.CallToAction_text}>
            The Versa Connect takes these attributes and focuses on extending 
            them seamlessly into the wheelchair accessible aspects of our vehicle. 
            It is our aim to product a conversion that is both practical and stylish, 
            with an attention to detail that provides the same high quality look and 
            feel throughout the vehicle.</p>
        <p className={styles.CallToAction_text}>
            The Versa Connect is available in two wheelbases. The Short Versa Connect 
            can accommodate the wheelchair user and up to 3 seated passengers 
            (including the driver) or up to 5 seated passengers without the wheelchair. 
            The Long Versa Connect can accommodate the wheelchair user up to 5 seats 
            passengers (including the driver) or up to 7 seated passengers without the 
            wheelchair. </p>
        <p className={`${styles.CallToAction_text} ${styles.CallToAction_text___extraMargin}`}>
            Twin sliding doors allow for ease of passenger access with a lightweight 
            manual ramp to the rear for the wheelchair access. As an optional extra, 
            the ramp can have the added ability, using a simple level, to fold- at into
             the vehicle so that when the wheelchair user is not travelling, a huge and
            easily accessible boot space is created making the Versa Connect even more practical.
        </p>
        <Button buttonText={props.buttonText}/>
    </div>
);

export default callToAction;