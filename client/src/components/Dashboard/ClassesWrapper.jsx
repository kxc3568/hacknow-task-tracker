import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import Classes from './Classes';
import Footer from '../General/Footer';

class ClassesWrapper extends Component {
    state = { classes: null }

    componentDidMount() {
        // find classes
        this.setState({ classes: [
            { 
                id: 1, name: "Multicore Computing", professorName: "Vijay Garg", courseNumber: "EE 361C",
                assignments: [
                    {
                        id: 1,
                        name: "hw1",
                        deadline: "2020-12-12",
                        desc: "this is homework 1",
                        milestones: []
                    }, 
                    {
                        id: 2,
                        name: "hw2",
                        deadline: "2021-01-03",
                        desc: "this is homework 2",
                        milestones: []
                    }
                ],
                people: [
                    {
                        id: 1,
                        name: "Kevin Chen"
                    },
                    {
                        id: 2,
                        name: "Nathan Chou"
                    },
                    {
                        id: 1,
                        name: "John Senuta"
                    },
                    {
                        id: 2,
                        name: "Joshua Louie"
                    }
                ]
            },
            {
                id: 2, name: "Software Testing", professorName: "???", courseNumber: "EE 360T",
                assignments: [],
                people: [
                    {
                        id: 1,
                        name: "Kevin Chen"
                    },
                    {
                        id: 2,
                        name: "Nathan Chou"
                    },
                    {
                        id: 1,
                        name: "John Senuta"
                    },
                    {
                        id: 2,
                        name: "Joshua Louie"
                    }
                ]
            }
        ] });
    }

    render() { 
        return ( <div>
            {
                this.state.classes == null ? 
                <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner> 
                : <Classes classes={this.state.classes} />
            } 
            <Footer />
        </div> );
    }
}
 
export default ClassesWrapper;