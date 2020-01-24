import React, { Component } from 'react';
import styles from './Colours.module.css';

import Aux from '../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class Colours extends Component {
    state = {
        colour: 'Red'
    }

    onColourChange = (colour) => {
        this.setState({colour: colour});
    }

    render () {

        const colours = {
            'Solar': {color: "#cdc65e"},
            'Silver': {color: "#b4b6ba"},
            'Metalicious': {color: "#e8e8e6"},
            'Magnetic': {color: "#656360"},
            'Guard': {color: "#767b76"},
            'DeepImpactBlue': {color: "#23378f"},
            'BlazerBlue': {color: "#282a36"},
            'Black': {color: "#1b1b1b"},
            'Red': {color: "#bc1d21"}
        };

        const colourSelector = Object.keys(colours).map((key, i) => { 
            return (
                <div key={i} className={styles.Colours_colourSelection_colour} style={{color: colours[key].color}}>
                    <i onClick={() => this.onColourChange(key)} class="fas fa-circle"></i>
                </div>
            );
        });

        return (
            <Aux>
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
            </Aux>
        );
    };
}

export default Colours;

