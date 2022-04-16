import { completeWorkout } from "../actions/actions"
import { connect } from 'react-redux'
import React from 'react'
import { Button } from 'react-bootstrap';
// import Col from 'react-bootstrap/Col'


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
                { uncompleted && <div className="col">
                        <h2 className="card-header">{workout.name}</h2>
                            <p>Description: {workout.description}</p>
                            <p>Reps: {workout.reps}</p>
                            <p>Sets: {workout.sets}</p>
                            <Button className="button" onClick={() => this.showCard()} >Complete workout</Button>
                    </div>
                }
            </>
        )
    }
}

const mapState = state => {
    return {workouts: state.workouts, completed: state.completed}
}

export default connect(mapState, {completeWorkout})(WorkoutCard)