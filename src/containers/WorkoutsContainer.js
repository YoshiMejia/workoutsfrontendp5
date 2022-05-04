import React from 'react'
import WorkoutCard from '../components/WorkoutCard'
import FormContainer from './FormContainer'
import Stopwatch from '../components/Stopwatch'
import { fetchWorkouts } from '../actions/actions'
import { connect } from 'react-redux'
// import Row from 'react-bootstrap/Row'


class WorkoutsContainer extends React.Component {
        // OLD CODE
    state = {
        workouts: [],
        showForm: false,
        showTimer: false
    }
  
    createWorkoutCard(){
        // if completed includes workout 
        const completed = this.props.completed.map((w) => w.name)
        const noCompletes = this.props.workouts.filter((w) => w.name !== completed)
        debugger
        return noCompletes.map((workout) => <WorkoutCard workout={workout} /> )
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
        // debugger
        if (this.state.workouts.length === 0){
            this.props.fetchWorkouts()
        } else if (this.state.workouts.length > 1) {
            console.log('test');
        }
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
            <>
        <div id="container">
            <button className="button" onClick={this.showTimer}>{this.timerButtonValue()}</button>
            {this.state.showTimer && <Stopwatch/> }

            <button className="button" onClick={this.hideForm}>{this.buttonValue()} </button>
            { this.state.showForm && < FormContainer addWorkout={this.addWorkout} />}
            <br />
            <br />
                <h1>All workouts:</h1>
                <div className="row row-cols-3">
                    {this.createWorkoutCard()}
                </div>
                
            </div>
        </>
            )
    }
}

const mapDispatch = dispatch => {
    return {fetchWorkouts: () => dispatch(fetchWorkouts())}
}

const mapState = state => {
    return {workouts: state.workouts, completed: state.completed}
}

export default connect(mapState, mapDispatch)(WorkoutsContainer)
