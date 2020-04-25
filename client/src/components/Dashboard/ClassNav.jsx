import React, { Component } from 'react';
import styles from '../../styles/dashboard/clazznav.module.css';

class ClassNav extends Component {
    state = {  }
    render() { 
        return ( <div className={styles.nav}>
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
            <p>Link</p>
        </div> );
    }
}
 
export default ClassNav;