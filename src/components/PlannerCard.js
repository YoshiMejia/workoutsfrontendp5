import React from 'react'
import { connect } from 'react-redux'

class PlannerCard extends React.Component{
    
    render(){ 
        const workouts = (
            this.props.workouts.map((workout) =>  
            <p>{workout.name}</p> )
        )

        return (
        <div className="plannerCard">
       <div id={this.props.planner.id} key={this.props.planner.id}>
            {console.log("inside planner card", workouts)}
                 <h2>Name: {this.props.planner.name}</h2>
                 <h4>Workouts: {workouts}</h4>
            </div>
         </div>
    )}
}

const mapState = state => {
    // debugger
    return { workouts: state.workouts}
}

export default connect(mapState)(PlannerCard)