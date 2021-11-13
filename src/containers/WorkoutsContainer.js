import React from 'react'

export default class WorkoutsContainer extends React.Component {
    state = {
        workouts: []
    }
    render(){
       return (
       <div id="workouts-container">
           {/* workoutform component will go here */}
            <h1>Workouts container being rendered</h1>
        </div>
        )
    }
}