import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import styles from '../../styles/dashboard/clazz.module.css';
import ClassNav from './ClassNav';
import Assignments from './Assignments';
import People from './People';

class Clazz extends Component {
    state = {  }

    render() {
        const { clazz } = this.props;
        console.log(clazz.people);

        return ( <div>
            <div className={styles.header}>
                <b>{clazz.professorName} | {clazz.courseNumber}</b>
                <div className={styles.btns}>
                    <Button variant="dark" className={styles.btn}>Syllabus</Button>
                    <Button variant="dark" className={styles.btn}>Contact</Button>
                </div>
            </div>
            <div className={styles.clazzContent}>
                <ClassNav />
                <Assignments assignments={clazz.assignments}/>
                <People people={clazz.people}/>
            </div>
            
        </div> );
    }
}
 
export default Clazz;