import React, { Component } from 'react'
import Center from 'react-center';
import styles from '../../styles/login/login.module.css';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            loading: false
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({
            loading: true
        })
        var userData = {
            email: this.state.email,
            password: this.state.password
        }
        
        fetch('http://localhost:5000/hack-now-tasker/us-central1/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },          
            body: JSON.stringify(userData)
        }).then((res) => {
            localStorage.setItem('loggedIn', 'true');
            window.location.reload(false);
        })
    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <Center className={styles.center}>
                <div className={styles.box}> 
                    <form action='/' className={styles.form}>
                        <h1 className={styles.h1}>Welcome to Mileo</h1>
                        <div className='form-group '>                        
                            <input className={styles.input} type="text" name="email" placeholder="email" onChange={this.onChange.bind(this)}/>
                        </div>
                        <div className='form-group'>
                            <input className={styles.input} type="password" name="password" placeholder="password" onChange={this.onChange.bind(this)}/>
                        </div>
                        <div className='form-group'>
                            <button className={styles.button} type="submit" value="Submit" className="button" onClick={this.handleSubmit}>Log In</button>
                        </div>
                    </form>
                </div>
            </Center>
        )
    }
}

export default Login;