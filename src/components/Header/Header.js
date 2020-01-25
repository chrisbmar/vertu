import React from 'react';
import styles from './Header.module.css';

const header = (props) => {

    const listItems = props.data.map((el, i) => {
        return (
            <li key={i} class={styles.Header_navigation_list_listItem}>{el}</li>
        )
    });

    return (
    <header className={styles.Header}>
        <div className={styles.Header_logo}>
            <img className={styles.Header_logo_img}src="https://www.bristolstreetversa.com/custom/51649.png"></img>
        </div>
        <nav className={styles.Header_navigation}>
            <div className={styles.Header_navigation_viewOptions}>
                <div className={styles.Header_navigation_viewOptions_option}>
                    <label className={styles.Header_navigation_viewOptions_option_label}>Contrast</label>
                    <span className={`${styles.Header_navigation_viewOptions_option_accessibility} ${styles.Header_navigation_viewOptions_option_accessibility___decrease}`}>A</span>
                    <span className={styles.Header_navigation_viewOptions_option_accessibility}>A</span>
                </div>
                <div className={styles.Header_navigation_viewOptions_option}>
                    <label className={styles.Header_navigation_viewOptions_option_label}>Font Size</label>
                    <span className={styles.Header_navigation_viewOptions_option_accessibility}>A-</span>
                    <span className={styles.Header_navigation_viewOptions_option_accessibility}>A</span>
                    <span className={styles.Header_navigation_viewOptions_option_accessibility}>A+</span>
                </div>
                <span className={styles.Header_navigation_viewOptions_option}>Download a brochure</span>
                <span className={styles.Header_navigation_viewOptions_option}>Blog</span>
                <div className={`${styles.Header_navigation_viewOptions_option} ${styles.Header_navigation_viewOptions_option___backgroundGreen}`}>
                    <i class="fas fa-phone-alt"></i>
                    <span class={styles.Header_navigation_viewOptions_option_call}>Call us on 0330 042 5909</span>
                    <i class="fas fa-info-circle" style={{fontSize: '16px'}}></i>
                </div>
            </div>
            <ul className={styles.Header_navigation_list}>
                {listItems}
            </ul>
        </nav>
        <div className={styles.Header_navigation_mobile}>
            <i class="fas fa-bars"></i>
        </div>
    </header>
    );
};

export default header;