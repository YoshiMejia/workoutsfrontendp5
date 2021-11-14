import { completeWorkout } from "../actions/actions"
import { connect } from 'react-redux'
import React from 'react'


class WorkoutCard extends React.Component{
    
    state = {
        uncompleted: true
    }

    showForm = () => {
        this.setState({
            uncompleted: !this.state.uncompleted
        })
        this.props.completeWorkout(this.props.workout)
    }

    render(){
        const workout = this.props.workout
        const uncompleted = this.state.uncompleted
        // debugger
        return(
            <>
        { uncompleted && <div className="WorkoutCard">
            <div id={workout.id} key={workout.id}>
                <h2>Name: {workout.name}</h2>
                <h4>Description: {workout.description}</h4>
                <p>Reps: {workout.reps}</p>
                <p>Sets: {workout.sets}</p>
                <button onClick={() => this.showForm()} >Completed workout</button>
            </div>
        </div>}
            </>
        )
    }
}
//check if complete button works 

export default connect(null, {completeWorkout})(WorkoutCard)