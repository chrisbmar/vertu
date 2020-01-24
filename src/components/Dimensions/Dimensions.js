import React from 'react';
import styles from './Dimensions.module.css';

import Aux from '../../hoc/Aux/Aux'
import Button from '../../UI/Button/Button';

const dimensions = () => {
    const table = [
        { name: 'Entry height', short: '1,373mm', long: '1,373mm' },
        { name: 'Ramp length', short: '1,010mm', long: '1,010mm' },
        { name: 'Ramp width', short: '755mm', long: '755mm' },
        { name: 'Channel length', short: '1,580mm', long: '1,580mm' },
        { name: 'External height', short: '1,852mm', long: '1,845mm' },
        { name: 'External height', short: '4,418mm', long: '4,818mm' }
     ]

     const renderTableData = () => {
        return table.map((data, index) => {
           const { name, short, long } = data;
           return (
              <tr key={index}>
                 <td className={`${styles.tableData} ${styles.tableData___backgroundGrey}`}>{name}</td>
                 <td className={styles.tableData}>{short}</td>
                 <td className={styles.tableData}>{long}</td>
              </tr>
           )
        });
     }

    return (
        <Aux>
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
        </Aux>
    )
}

export default dimensions;