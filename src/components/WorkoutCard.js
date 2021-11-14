import { completeWorkout } from "../actions/actions"
import { connect } from 'react-redux'
import React from 'react'


class WorkoutCard extends React.Component{
    render(){
        // debugger
        const workout = this.props.workout
        return(
        <div className="WorkoutCard">
            <div id={workout.id} key={workout.id}>
                <h2>Name: {workout.name}</h2>
                <h4>Description: {workout.description}</h4>
                <p>Reps: {workout.reps}</p>
                <p>Sets: {workout.sets}</p>
                <button onClick={() => this.props.completeWorkout(workout)} >Completed workout</button>
            </div>
        </div>
    )}
}
//check if complete button works 

export default connect(null, {completeWorkout})(WorkoutCard)