import React from 'react';
import styles from './Footer.module.css';

const footer = (props) => {

    const listItems = props.data.map((el, i) => {
        return (
            <li key={i} className={styles.Footer_container_links_list_item}>{el}</li>
        )
    });

    return (
        <React.Fragment>
            <footer className={styles.Footer}>
                <div className={styles.Footer_container}>
                    <div className={styles.Footer_container_logo}>
                        <img className={styles.Footer_container_logo_img}src="https://www.bristolstreetversa.com/custom/51649.png"></img>
                        <p className={styles.Footer_container_logo_text}>If you're looking for a new or used Wheelchair Accessible
                        Vehicle (WAV), then Bristol Street Versa is the best place to start.
                    </p>
                    </div>
                    <div className={styles.Footer_container_links}>
                        <ul className={styles.Footer_container_links_list}>
                            {listItems}
                        </ul>
                    </div>
                </div>
            </footer>
            <div className={styles.Form}>
                <div className={styles.Form_container}>
                    <h3>Interested in this vehicle?</h3>
                    <p>Are you interested in the Ford Tourneo? Simply fill in the
                        form below and we'll be in touch.
                    </p>
                    <input className={styles.Form_container_input} placeholder="Name"></input>
                    <input className={styles.Form_container_input} placeholder="Number"></input>
                    <button className={styles.Form_container_button}>GO</button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default footer;