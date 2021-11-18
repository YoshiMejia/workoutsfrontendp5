import { completeWorkout } from "../actions/actions"
import { connect } from 'react-redux'
import React from 'react'


class WorkoutCard extends React.Component{
    state = {
        uncompleted: true
    }

    showCard = () => {
        this.setState({
            uncompleted: !this.state.uncompleted
        })
        this.props.completeWorkout(this.props.workout)
    }

    render(){
        const workout = this.props.workout
        const uncompleted = this.state.uncompleted
        //completing a workout sets the first 'workout' 's uncompleted state to false???
        return(
            <>
        { uncompleted && <div className="WorkoutCard">
            <div id={workout.id} key={workout.id}>
                <h2>Name: {workout.name}</h2>
                <h4>Description: {workout.description}</h4>
                <p>Reps: {workout.reps}</p>
                <p>Sets: {workout.sets}</p>
                <button className="button" onClick={() => this.showCard()} >Complete workout</button>
            </div>
        </div>}
            </>
        )
    }
}

const mapState = state => {
    return {workouts: state.workouts, completed: state.completed}
}

export default connect(mapState, {completeWorkout})(WorkoutCard)