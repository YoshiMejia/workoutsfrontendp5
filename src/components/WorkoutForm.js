import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newWorkoutToStore } from '../actions/actions';

class WorkoutForm extends Component {
    constructor(props) {
		super(props);
		this.state = {
        name: "",
        description: "",
        sets: '',
        reps: '',
        completed: 0
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
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <h4>New Workout </h4>
                        <label>Name:</label>
                        <input
                            type="text"
                            onChange={(e)=>this.handleChange(e)}
                            value={this.state.name}
                            name="name"
                        />
                <br />
                        <label>Description:</label>
                        <input
                            type="text"
                            onChange={(e)=>this.handleChange(e)}
                            value={this.state.description}
                            name="description"
                        />
                <br />
                        <label>Sets:</label>
                        <input
                            type="number"
                            onChange={(e)=>this.handleChange(e)}
                            value={this.state.sets}
                            name="sets"
                        />
                <br />
                        <label>Reps:</label>
                        <input
                            type="number"
                            onChange={(e)=>this.handleChange(e)}
                            value={this.state.reps}
                            name="reps"
                        />
                <br />
					<input type="submit" value="Create Workout" />
				</form>
            </div>
        )
    }
}

// const mapDispatch = (dispatch) => {
//     return {
//         addWorkoutToStore: (formData) => dispatch({ type: "ADD_WORKOUT", workout: formData }),
//       };
    
// }

export default connect(null, {newWorkoutToStore})(WorkoutForm)