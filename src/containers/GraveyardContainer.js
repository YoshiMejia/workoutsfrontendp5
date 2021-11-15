import React from "react";
import { connect } from 'react-redux'


class GraveyardContainer extends React.Component {
    showCompleted = () => {
        if(this.props.workouts.length !== 0){
            const workouts = this.props.workouts.map((w) => w.name)
            const listWorkouts = workouts.map((w, index) => <li key={index}>{w}</li>)
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
    return { workouts: state.workouts}
}

export default connect(mapState)(GraveyardContainer)

