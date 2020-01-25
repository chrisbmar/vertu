import React, { Component } from 'react';
import styles from './VehicleInfo.module.css'
import { Route, Switch, NavLink } from 'react-router-dom'; 

import Dimensions from '../../components/Dimensions/Dimensions';
import Layouts from '../../components/Layouts/Layouts';
import Colours from '../../components/Colours/Colours';
import Trim from '../../components/Trim/Trim';

const vehicleInfo = (props) => {

    const routes = (
        <Switch>
            <Route path="/trim" component={Trim}/>
            <Route path="/colours" component={Colours}/>
            <Route path="/layouts" component={Layouts}/>
            <Route path="/" component={Dimensions}/>
        </Switch>
    );
  
    const navigationLinks = props.data.vehicleInfo.map((el, i) => {
        return (
            <li key={i} className={styles.VehicleInfo_listItem}>
                <NavLink
                    to={el.to}
                    exact
                    activeClassName={styles.active}>{el.text}
                </NavLink>
            </li>
        )
    });

    return (
        <div className={styles.VehicleInfo}>
            <ul className={styles.VehicleInfo_list}>
                {navigationLinks}
            </ul>
            {routes}
        </div>
    );      
}

export default vehicleInfo;