import React from 'react'
import WorkoutCard from '../components/WorkoutCard'
import FormContainer from './FormContainer'
import Stopwatch from '../components/Stopwatch'

class WorkoutsContainer extends React.Component {
    state = {
        workouts: [],
        showForm: false,
        showTimer: false
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
            if(!this.state.workouts.includes(json))
            {this.setState({
                workouts: json
            })}
        })
      }

      hideForm = () => {
        this.setState({
            ...this.state.workouts,
            showForm: !this.state.showForm,
            ...this.state.showTimer
        })
      }

      buttonValue() {
          if(!this.state.showForm){
              return "Add new workout"
          } else 
          { return "Hide form"}
      }

      showTimer = () =>{
        this.setState({
            ...this.state.workouts,
            ...this.state.showForm,
            showTimer: !this.state.showTimer

        })
      }

      timerButtonValue() {
        if(!this.state.showTimer){
            return "Stopwatch"
        } else 
        { return "Hide stopwatch"}
    }
      
    render(){
       return (
       <div id="workouts-container">
           <button className="button" onClick={this.showTimer}>{this.timerButtonValue()}</button>
        {this.state.showTimer && <Stopwatch/> }

           <button className="button" onClick={this.hideForm}>{this.buttonValue()} </button>
          { this.state.showForm && < FormContainer addWorkout={this.addWorkout} />}
            <h1>All workouts:</h1>
            {this.createWorkoutCard()}
        </div>
        )
    }
}

export default WorkoutsContainer
