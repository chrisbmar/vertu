import React from 'react';
import styles from './Footer.module.css';
import Aux from '../../hoc/Aux/Aux';
import { placeholder } from '@babel/types';

const footer = () => (
    <Aux>
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
                        <li className={styles.Footer_container_links_list_item}>Home</li>
                        <li className={styles.Footer_container_links_list_item}>Nearly New and Used</li>
                        <li className={styles.Footer_container_links_list_item}>Terms</li>
                        <li className={styles.Footer_container_links_list_item}>New Vehicles</li>
                        <li className={styles.Footer_container_links_list_item}>Aftercare</li>
                        <li className={styles.Footer_container_links_list_item}>Blog</li>
                        <li className={styles.Footer_container_links_list_item}>Motability</li>
                        <li className={styles.Footer_container_links_list_item}>Contact Us</li>
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
    </Aux>

);

export default footer;