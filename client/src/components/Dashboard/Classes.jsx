import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Clazz from './Clazz';
import styles from '../../styles/dashboard/clazz.module.css'

class Classes extends Component {
    
    state = { user: null, classes: [] }

    async componentDidMount() {
        const { user, classes } = this.props;

        const classroomListRes = await fetch('http://localhost:5000/hack-now-tasker/us-central1/api/classrooms');
        const classroomList = await classroomListRes.json();
        const classrooms = classroomList.filter(classroom => classroom.users.indexOf(user.userId) !== -1);
        this.setState({ classes: classrooms });
    }

    async componentDidUpdate(prevProps) {
        const { user, classes } = this.props;

        if (prevProps.classes !== classes) {
            const classroomListRes = await fetch('http://localhost:5000/hack-now-tasker/us-central1/api/classrooms');
            const classroomList = await classroomListRes.json();
            const classrooms = classroomList.filter(classroom => classroom.users.indexOf(user.userId) !== -1);
            this.setState({ classes: classrooms });
        }
    }

    render() {
        const { classes } = this.state;
        return ( <Tabs transition={false} defaultActiveKey={ classes.length === 0 ? "" : classes[0].classroomId } id="uncontrolled-tab-example" className={styles.tabs}> 
            { classes.map(cl => (
                <Tab key={cl.classroomId} eventKey={cl.classroomId} title={cl.name}>
                    <Clazz clazz={cl}/>
                </Tab>
            )) }
        </Tabs> );
    }
}
 
export default Classes;