import React, { Component } from 'react';
import { connect } from 'react-redux';

class WorkoutForm extends Component {
    state = {
        name: "",
        description: "",
        sets: '',
        reps: '',
        completed: 0
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        }, () => console.log(this.state.name))
    }

    handleSubmit = (e) => {
        e.preventDefault();

    }

    render(){
        // debugger
        //check props for dispatch
        return(
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <h4>New Workout </h4>
                        <label>Name:</label>
                        <input
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.name}
                            name="name"
                        />
                <br />
                        <label>Description:</label>
                        <input
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.description}
                            name="description"
                        />
                <br />
                        <label>Sets:</label>
                        <input
                            type="number"
                            onChange={this.handleChange}
                            value={this.state.sets}
                            name="sets"
                        />
                <br />
                        <label>Reps:</label>
                        <input
                            type="number"
                            onChange={this.handleChange}
                            value={this.state.reps}
                            name="reps"
                        />
                <br />
					<input type="submit" />
				</form>
            </div>
        )
    }
}

export default connect()(WorkoutForm)