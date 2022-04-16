import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newWorkoutToStore } from '../actions/actions';
import { Button } from 'react-bootstrap';

class WorkoutForm extends Component {
    constructor(props) {
		super(props);
		this.state = {
        name: "",
        description: "",
        sets: '',
        reps: ''
    }}

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        }, () => console.log(this.state))
    }

    
     
    handleSubmit = (e) => {
        e.preventDefault();
        //hardcoded planner
        const workout = {...this.state, planner_id: 1}
        const url ="http://127.0.0.1:3000/workouts"
        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accepts": "application/json"
            },
            body: JSON.stringify(workout)
        }
        fetch(url, configObj)
        .then(res => res.json())
        .then(json => {
           this.props.addWorkout(json)
           this.props.newWorkoutToStore(json)
        })
        this.setState({
            name: "",
            description: "",
            sets: '',
            reps: ''
        })
    }

    render(){
        return(
            <div className="form-row">
                <form onSubmit={this.handleSubmit}>
                <br />
                    <h4>New Workout </h4>
                    <div class="col-md-4 mb-3">
                        <label>Name:</label>
                        <input
                            type="text"
                            onChange={(e)=>this.handleChange(e)}
                            value={this.state.name}
                            name="name"
                            class="form-control"
                        />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label>Description:</label>
                        <input
                            type="text"
                            onChange={(e)=>this.handleChange(e)}
                            value={this.state.description}
                            name="description"
                            class="form-control"
                        />
                    </div>
                {/* <br /> */}
                    <div class="col-md-4 mb-3">
                        <label>Sets:</label>
                        <input
                            type="number"
                            onChange={(e)=>this.handleChange(e)}
                            value={this.state.sets}
                            name="sets"
                            class="form-control"
                        />
                    </div>
                {/* <br /> */}
                    <div class="col-md-4 mb-3">
                        <label>Reps:</label>
                        <input
                            type="number"
                            onChange={(e)=>this.handleChange(e)}
                            value={this.state.reps}
                            name="reps"
                            class="form-control"
                        />
                    </div>
                <br />
					<Button type="submit" className="button"> Create Workout</Button>
				</form>
            </div>
        )
    }
}

export default connect(null, {newWorkoutToStore})(WorkoutForm)