import React from 'react';
import styles from '../../styles/features.module.css';

const Features = () => {
    return ( <div className={styles.features}>
        <div className={styles.feature}>
            <svg height="300" width="300">
                <circle cx="150" cy="150" r="140" stroke="black" stroke-width="3" fill="grey" />
            </svg>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
        </div>
        <div className={styles.feature}>
            <svg height="300" width="300">
                <circle cx="150" cy="150" r="140" stroke="black" stroke-width="3" fill="grey" />
            </svg>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
        </div>
        <div className={styles.feature}>
            <svg height="300" width="300">
                <circle cx="150" cy="150" r="140" stroke="black" stroke-width="3" fill="grey" />
            </svg>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut </p>
        </div>
    </div> );
}
 
export default Features;