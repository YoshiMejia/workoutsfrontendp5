import React from 'react'
import WorkoutCard from '../components/WorkoutCard'

export default class WorkoutsContainer extends React.Component {
    state = {
        workouts: []
    }

    createWorkoutCard(){
        return this.state.workouts.map((workout) => <WorkoutCard workout={workout} /> )
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
        })
      }

    render(){
       return (
       <div id="workouts-container">
           {/* workoutform component will go here */}
            <h1>Workouts container being rendered</h1>
            {this.createWorkoutCard()}
        </div>
        )
    }
}