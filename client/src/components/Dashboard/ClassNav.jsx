import React, { Component } from 'react';
import styles from '../../styles/dashboard/clazznav.module.css';

class ClassNav extends Component {
    state = {  }
    render() { 
        return ( <div className={styles.nav}>
            <div className={styles.navLinks}>
                <svg height="30" width="30">
                    <circle cx="15" cy="15" r="13" fill="grey"></circle>
                </svg>
                <a href="#">Feed</a>
            </div>
            <div className={styles.navLinks}>
                <svg height="30" width="30">
                    <circle cx="15" cy="15" r="13" fill="grey"></circle>
                </svg>
                <a href="#">Assignments</a>
            </div>
            <div className={styles.navLinks}>
                <svg height="30" width="30">
                    <circle cx="15" cy="15" r="13" fill="grey"></circle>
                </svg>
                <a href="#">Announcements</a>
            </div>
            <div className={styles.navLinks}>
                <svg height="30" width="30">
                    <circle cx="15" cy="15" r="13" fill="grey"></circle>
                </svg>
                <a href="#">Messages</a>
            </div>
            <div className={styles.navLinks}>
                <svg height="30" width="30">
                    <circle cx="15" cy="15" r="13" fill="grey"></circle>
                </svg>
                <a href="#">Teams</a>
            </div>
            <div className={styles.navLinks}>
                <svg height="30" width="30">
                    <circle cx="15" cy="15" r="13" fill="grey"></circle>
                </svg>
                <a href="#">Settings</a>
            </div>
        </div> );
    }
}
 
export default ClassNav;