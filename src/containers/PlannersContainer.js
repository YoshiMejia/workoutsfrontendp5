import React from "react";
import PlannerCard from "../components/PlannerCard";

export default class PlannersContainer extends React.Component {

    state = {
        planners: [],
        workouts: []
    }

    createPlannerCard(){
        // return this.state.planners.map((planner) => <PlannerCard planner={planner} workouts={this.state.workouts.map((workout) => <li key={workout.id}>{workout.name}</li>)} />)
        return this.state.planners.map((planner) => <PlannerCard planner={planner} />)
    }

    addToPlanner = (newWorkout) => {
        this.setState((prevState) => {
            return {
                ...prevState.planners,
                workouts: [...prevState.workouts, newWorkout]
            } 
        })
        this.createPlannerCard()
    }
//switch this component & workout component to fetch using actions
    componentDidMount(){
        const url ="http://127.0.0.1:3000/planners"
        fetch(url)
        .then(res => res.json())
        .then(json => {
            const planner = json.map((planner) => planner)
            const workouts = json[0].workouts.map((workout) => workout)
            // debugger
           this.setState({
               planners: planner,
               workouts: workouts
           })
        })
      }

      render(){
          return(
              <div id="planners-container">
                  {this.createPlannerCard()}
              </div>
          )
      }
}