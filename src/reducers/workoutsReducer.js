const workoutsReducer = (state = { workouts: []}, action) => {
    switch (action.type) {
      case "NEW_WORKOUT":
        console.log("new workout action", { workouts: [...state.workouts.concat(action.workout)] })
        return {
          workouts: [...state.workouts.concat(action.workout)]
        }
          case "COMPLETE":
            console.log("checking new action",{ workouts: [...state.workouts.concat(action.workout)] })
            return{
              workouts: [...state.workouts.concat(action.workout)]
            }
      default:
        return state;
    }
  };

  export default workoutsReducer
  