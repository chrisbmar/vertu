import React, { Component } from 'react';
import styles from './VehicleInfo.module.css'
import { Route, Switch, NavLink } from 'react-router-dom'; 

import Dimensions from '../../components/Dimensions/Dimensions';

class VehicleInfo extends Component {
    render () {
        return (
            <div className={styles.VehicleInfo}>
                <ul className={styles.VehicleInfo_list}>
                    <li className={styles.VehicleInfo_listItem}>
                        <NavLink
                            to="/"
                            exact
                            activeClassName={styles.active}>Dimensions
                        </NavLink>
                    </li>
                    <li className={styles.VehicleInfo_listItem}>
                        <NavLink
                            to="/layouts"
                            exact
                            activeClassName={styles.active}>Vehicle Layouts
                        </NavLink>
                    </li>
                    <li className={styles.VehicleInfo_listItem}>
                        <NavLink
                            to="/colours"
                            exact
                            activeClassName={styles.active}>Colour
                        </NavLink>
                    </li>
                    <li className={styles.VehicleInfo_listItem}>
                        <NavLink
                            to="/trim"
                            exact
                            activeClassName={styles.active}>Interior Trim
                        </NavLink>
                    </li>


                </ul>
                <Switch>
                    <Route path="/" component={Dimensions} />
                </Switch>
            </div>
        );
    }
}

export default VehicleInfo;