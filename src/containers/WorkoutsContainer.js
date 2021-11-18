import React from 'react'
import WorkoutCard from '../components/WorkoutCard'
import FormContainer from './FormContainer'
import Stopwatch from '../components/Stopwatch'
import { fetchWorkouts } from '../actions/actions'
import { connect } from 'react-redux'


class WorkoutsContainer extends React.Component {
    state = {
        showForm: false,
        showTimer: false
    }

    createWorkoutCard(){
        return this.props.workouts.map((workout) => <WorkoutCard workout={workout} /> )
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
        this.props.fetchWorkouts()
      }

      hideForm = () => {
        this.setState({
            ...this.props.workouts,
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
            ...this.props.workouts,
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

const mapDispatch = dispatch => {
    return {fetchWorkouts: () => dispatch(fetchWorkouts())}
}

const mapState = state => {
    return {workouts: state.workouts}
}

export default connect(mapState, mapDispatch)(WorkoutsContainer)
