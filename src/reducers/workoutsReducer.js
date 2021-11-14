const workoutsReducer = (state = { workouts: []}, action) => {
  // debugger
    switch (action.type) {
      case "NEW_WORKOUT":
        console.log("new workout action", { workouts: [...state.workouts.concat(action.workout)] })
        return {
          workouts: [...state.workouts.concat(action.workout)]
        }
        case "FETCH_WORKOUTS":
          const workouts = action.workout.map((workout) => workout)
          console.log("fetch workouts action", ...state.workouts.concat(workouts))
          return{
            // workouts: [...state.workouts.concat(workouts)]
            workouts: [...state.workouts.filter((workout) => workout.id === action.id)]
          }
          case "COMPLETE":
            console.log("completing action",{workouts: [...state.workouts], completed: [action.workout]})
            return{
              workouts: [...state.workouts], 
              completed: [action]
            }
      default:
        return state;
    }
  };

  export default workoutsReducer
  