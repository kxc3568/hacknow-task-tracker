import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Clazz from './Clazz';
import styles from '../../styles/dashboard/clazz.module.css'

class Classes extends Component {
    // state = {  };

    render() {
        const { classes } = this.props;

        return ( <Tabs defaultActiveKey={ classes.length === 0 ? "" : classes[0].id } id="uncontrolled-tab-example" className={styles.tabs}> 
            { classes.map(cl => (
                <Tab key={cl.id} eventKey={cl.id} title={cl.name}>
                    <Clazz clazz={cl}/>
                </Tab>
            )) }
        </Tabs> );
    }
}
 
export default Classes;