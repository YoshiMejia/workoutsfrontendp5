const workoutsReducer = (state = { workouts: []}, action) => {
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
            workouts: [...state.workouts.concat(workouts)]
          }
      default:
        return state;
    }
  };

  export default workoutsReducer
  