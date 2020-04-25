import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import styles from '../../styles/dashboard/assignment.module.css';

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
                <p>{assignment.deadline}</p>
                <Button variant="link" className={styles.milestoneButton} onClick={this.handleMilestoneClick}>...</Button>
            </div>
            <div className={styles.milestone} ref={this.milestoneRef}>
                <h5>dkjfalkfj</h5>
                <h5>dkjfalkfj</h5>
                <h5>dkjfalkfj</h5>
            </div>
            
        </div> );
    }
}
 
export default Assignment;