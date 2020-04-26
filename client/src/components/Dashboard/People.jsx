import React, { Component } from 'react';
import styles from '../../styles/dashboard/people.module.css';

class People extends Component {
    state = { people: [] };

    async componentWillMount() {
        const { people } = this.props;
        const usersListRes = await fetch('http://localhost:5000/hack-now-tasker/us-central1/api/users');
        const usersList = await usersListRes.json();
        const users = usersList.filter(user => people.indexOf(user.userId) !== -1);
        this.setState({ people: users });
    }

    render() {
        const { people } = this.state;
        
        return ( <div className={styles.people}>
            { people.map((person) => (
                <div className={styles.person} key={person.userId}>
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