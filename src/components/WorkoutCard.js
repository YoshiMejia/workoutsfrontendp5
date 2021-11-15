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
        return(
            <>
        { uncompleted && <div className="WorkoutCard">
            <div id={workout.id} key={workout.id}>
                <h2>Name: {workout.name}</h2>
                <h4>Description: {workout.description}</h4>
                <p>Reps: {workout.reps}</p>
                <p>Sets: {workout.sets}</p>
                <button className="button" onClick={() => this.showForm()} >Complete workout</button>
            </div>
        </div>}
            </>
        )
    }
}

export default connect(null, {completeWorkout})(WorkoutCard)