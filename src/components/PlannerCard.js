import React from 'react'
import { connect } from 'react-redux'

class PlannerCard extends React.Component{
    
    render(){ 
        const workouts = (
            this.props.planner.workouts.map((workout) => workout.name )
        )
        const listWorkouts = workouts.map((w, index) => <li key={index}>{w}</li>)
        
        return (
        <div className="plannerCard">
       <div id={this.props.planner.id} key={this.props.planner.id}>
            {console.log("inside planner card", workouts)}
                 <h2>Planner name: {this.props.planner.name}</h2>
                 <ul>Workouts in this planner: {listWorkouts}</ul>
            </div>
         </div>
    )}
}

const mapState = state => {
    // debugger
    return { workouts: state.workouts}
}

export default connect(mapState)(PlannerCard)