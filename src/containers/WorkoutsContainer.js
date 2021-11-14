import React from 'react'
import WorkoutCard from '../components/WorkoutCard'
import { connect } from 'react-redux'
import FormContainer from './FormContainer'
import { fetchWorkouts } from '../actions/actions'

class WorkoutsContainer extends React.Component {
    state = {
        workouts: []
    }

    createWorkoutCard(){
        return this.state.workouts.map((workout) => <WorkoutCard workout={workout} /> )
    }

    addWorkout = (newWorkout) => {
        this.setState((prevState) => {
            return {
                workouts: [...prevState.workouts, newWorkout]
            } 
        })
        this.createWorkoutCard()
    }

    componentDidMount(){
        const url ="http://127.0.0.1:3000/workouts"
        fetch(url)
        .then(res => res.json())
        .then(json => {
            // debugger
           this.setState({
               workouts: json
           })
           this.props.fetchWorkouts(json)
        })
      }

    render(){
       return (
       <div id="workouts-container">
           {/* rendering form container, MAYBE change to have a button which onClick will mount the form container & form? */}
           < FormContainer addWorkout={this.addWorkout} />
            <h1>Workouts container being rendered</h1>
            {this.createWorkoutCard()}
        </div>
        )
    }
}

// export default WorkoutsContainer
// const mapState = state => {
//     return { workouts: state.workouts}
// }

export default connect(null, {fetchWorkouts})(WorkoutsContainer)

