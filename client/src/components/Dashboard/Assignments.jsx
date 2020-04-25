import React, { Component } from 'react';
import styles from '../../styles/dashboard/assignments.module.css';
import Assignment from './Assignment';

class Assignments extends Component {
    state = {  }

    render() {
        const { assignments } = this.props;
        
        return ( <div className={styles.assignments}>
            { assignments.map((assignment) => (
                <Assignment key={assignment.id} assignment={assignment}/>
            ))}
        </div> );
    }
}
 
export default Assignments;