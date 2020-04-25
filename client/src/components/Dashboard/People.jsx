import React, { Component } from 'react';
import styles from '../../styles/dashboard/people.module.css';

class People extends Component {
    state = {  }
    render() {
        const { people } = this.props;

        return ( <div className={styles.people}>
            { people.map((person) => (
                <div className={styles.person} key={person.id}>
                    <svg height="50" width="50">
                        <circle cx="25" cy="25" r="24" fill="grey"></circle>
                    </svg>
                    <h5>{person.name}</h5>
                </div>
            ))}
        </div> );
    }
}
 
export default People;