import React from "react";
import { connect } from 'react-redux'


class GraveyardContainer extends React.Component {
    showCompleted = () => {
        if(this.props.completed.length !== 0){
            // const workouts = this.props.completed.map((w, idx) => <li key={idx}>{w.name}</li>)
            // const listWorkouts = workouts.map((w, index) => <li key={index}>{w}</li>)
            const workouts = this.props.completed.map((w) => w.name)
            const listWorkouts = workouts.map((w, index) => <li key={index}>{w}</li>)
            debugger
            return listWorkouts
        } else {
            return "Completed workouts will go here"
        }
    }

    render(){      
        return(
            <div className="graveyard">
                <h1>
                    You have completed the following workouts:
                </h1>
                    <ul>{this.showCompleted()}</ul>
            </div>
        )
    }
}

const mapState = state => {
    return { workouts: state.workouts, completed: state.completed}
}

export default connect(mapState)(GraveyardContainer)

