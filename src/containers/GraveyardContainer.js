import React from "react";
import { connect } from 'react-redux'


class GraveyardContainer extends React.Component {


    showCompleted = () => {
        if(this.props.completed){
            return this.props.completed.map((w) => w.workout.name)
        } else {
            return "Completed workouts will go here"
        }
    }

    render(){ 

        debugger
        
        return(
            <div className="graveyard">
                <h1>
                    Rendering Graveyard
                </h1>
                    <p>{this.showCompleted()}</p>
            </div>
        )
    }
}

const mapState = state => {
    return { completed: state.completed}
}

export default connect(mapState)(GraveyardContainer)

