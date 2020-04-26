import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import styles from '../../styles/dashboard/assignment.module.css';
import Milestone from './Milestone';

class Assignment extends Component {

    state = {  }

    constructor() {
        super();
        this.milestoneRef = React.createRef();
    }

    handleMilestoneClick = () => {
        const milestone = this.milestoneRef.current;
        console.log(milestone.style.display);
        if (milestone.style.display === "none" || milestone.style.display === "") {
            milestone.style.display = "block";
        } else {
            milestone.style.display = "none";
        }
    }

    render() {
        const { assignment } = this.props;
        return ( <div className={styles.assignment}>
            <h4>{assignment.name}</h4>
            <p>{assignment.desc}</p>
            <div className={styles.milestoneContainer}>
                <p>Due: {assignment.dueDate}</p>
                <Button variant="link" className={styles.milestoneButton} onClick={this.handleMilestoneClick}>View Milestones</Button>
            </div>
            <div className={styles.milestone} ref={this.milestoneRef}>
                <div>
                    <h6><b>Class Progress</b></h6>
                    <h6>Average</h6>
                    <Milestone assignment={assignment} users={this.props.users}/>
                    <h6>Average Score: {}</h6>
                    <h6><b>Handed-in: {}</b></h6>
                </div>
                
            </div>
        </div> );
    }
}
 
export default Assignment;