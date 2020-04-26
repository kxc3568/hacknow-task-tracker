import React, { Component } from 'react';
import styles from '../../styles/dashboard/assignments.module.css';
import Assignment from './Assignment';

class Assignments extends Component {
    state = { assignments: [] }

    async componentWillMount() {
        const { assignments, people } = this.props;
        let allAssignments = await fetch('http://localhost:5000/hack-now-tasker/us-central1/api/assignments');
        allAssignments = await allAssignments.json();
        const currentAssignments = allAssignments.filter((assignment) => assignments.indexOf(assignment.assignmentId) !== -1 );
        this.setState({ assignments: currentAssignments });
    }

    render() {
        const { assignments } = this.state;

        return ( <div className={styles.assignments}>
            { assignments.map((assignment) => (
                <Assignment key={assignment.assignmentId} assignment={assignment} users={this.props.users}/>
            ))}
        </div> );
    }
}
 
export default Assignments;