import React from 'react';
import styles from './Dimensions.module.css';
import data from '../../data';

import Button from '../../UI/Button/Button';

const dimensions = () => {

     const renderTableData = () => {
        return data.dimensions.table.map((data, i) => {
           const { name, short, long } = data;
           return (
              <tr key={i}>
                 <td className={`${styles.tableData} ${styles.tableData___backgroundGrey}`}>{name}</td>
                 <td className={styles.tableData}>{short}</td>
                 <td className={styles.tableData}>{long}</td>
              </tr>
           )
        });
     }

    return (
        <React.Fragment>
            <div class={styles.Dimensions}>
                <div className={styles.Dimensions_table}>
                    <div className={styles.Dimnsions_table_heading}>
                        <span>Short</span>
                        <span>Long</span>
                    </div>
                    <table>
                        <tbody>
                            {renderTableData()}
                        </tbody>
                    </table>
                </div>
                <div className={styles.Dimensions_imageContainer}>
                    <img className={styles.Dimensions_imageContainer_img} src="https://www.bristolstreetversa.com/custom/49792.jpg"></img>
                </div>
            </div>
            <div className={styles.Dimensions_buttonContainer}>
                <Button buttonText="View our Versa Connect offers"/>
            </div>
        </React.Fragment>
    )
}

export default dimensions;