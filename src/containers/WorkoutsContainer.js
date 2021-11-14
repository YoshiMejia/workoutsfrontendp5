import React from 'react'
import WorkoutCard from '../components/WorkoutCard'
import { connect } from 'react-redux'
import FormContainer from './FormContainer'
import { fetchWorkouts } from '../actions/actions'

class WorkoutsContainer extends React.Component {
    state = {
        workouts: [],
        showForm: false
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

      hideForm = () => {
        this.setState({
            ...this.state.workouts,
            showForm: !this.state.showForm
        })
      }

      buttonValue() {
          if(!this.state.showForm){
              return "Add new workout"
          } else 
          { return "Hide form"}
      }

    render(){
       return (
       <div id="workouts-container">
           <button onClick={this.hideForm}>{this.buttonValue()} </button>
          { this.state.showForm && < FormContainer addWorkout={this.addWorkout} />}
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

