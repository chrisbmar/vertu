import React, { Component } from 'react';
import styles from './ImageGallery.module.css';

class ImageGallery extends Component {
    state = {
        counter: 0
    }

    onNextImage = () => {
        if (this.state.counter > 1) {
            this.setState({counter: 0});
        } else {
            this.setState({counter: this.state.counter + 1});
        }
    };

    onPrevImage = () => {
        if (this.state.counter === 0) {
            this.setState({counter: 2});
        } else {
            this.setState({counter: this.state.counter - 1})
        }
    };
    
    render () {
        const url = this.props.data[this.state.counter];

        return (
            <div className={styles.ImageGallery}>
                <img className={styles.ImageGallery_image} src={url}></img>
                <a className={`${styles.ImageGallery_image_changeSlide} ${styles.ImageGallery_image_changeSlide_left}`} onClick={this.onPrevImage}>&#10094;</a>
                <a className={`${styles.ImageGallery_image_changeSlide} ${styles.ImageGallery_image_changeSlide_right}`} onClick={this.onNextImage}>&#10095;</a>
            </div>
        );
    }
};

export default ImageGallery