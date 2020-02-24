import React, { Component } from 'react';
import styles from './Colours.module.css';
import data from '../../data';

import Button from '../../UI/Button/Button';

class Colours extends Component {
    state = {
        colour: 'Red'
    }

    onColourChange = (colour) => {
        this.setState({colour: colour});
    }

    render () {

        const colourSelector = Object.keys(data.colours).map((key, i) => { 
            return (
                <div key={i} className={styles.Colours_colourSelection_colour} style={{color: data.colours[key].colour}}>
                    <i onClick={() => this.onColourChange(key)} class="fas fa-circle"></i>
                </div>
            );
        });

        return (
            <React.Fragment>
                <div className={styles.Colours}>
                    <div className={styles.Colours_imageContainer}>
                        <img className={styles.Colours_imageContainer_img} src={`https://www.bristolstreetversa.com/images/colour_swatches/Grand-Tourneo-Connect/${this.state.colour}.png`}></img>
                    </div>
                    <div className={styles.Colours_colourSelection}> 
                        {colourSelector}
                    </div>
                    <div className={styles.Colours_metalic}>
                        <div className={styles.Colours_metalicNo}>Non Metalic</div>
                        <div className={styles.Colours_metalicYes}>Metalic</div>
                    </div>
                </div>
                <div className={styles.Colours_buttonContainer}>
                    <Button buttonText="View our Versa Connect offers"/>
                </div>
            </React.Fragment>
        );
    };
}

export default Colours;

