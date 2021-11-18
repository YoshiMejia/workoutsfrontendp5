const workoutsReducer = (state = { workouts: [], completed: [] }, action) => {
    switch (action.type) {
      case "NEW_WORKOUT":
        console.log("new workout action", { workouts: [...state.workouts.concat(action.workout)] , 
          completed: [...state.completed]})
        return {
          workouts: [...state.workouts.concat(action.workout)], 
          completed: [...state.completed]
        }
      case "COMPLETE":
        console.log("checking new action",{ workouts: [...state.workouts], 
          completed: [...state.completed.concat(action.workout)]})
        // debugger
        return{
          workouts: [...state.workouts], 
          completed: [...state.completed.concat(action.workout)]
        }
        case "FETCH_WORKOUTS":
        console.log('fetching data', { workouts: [...state.workouts.concat(action.workout)] , 
          completed: [...state.completed]});
          return{
            workouts: [...state.workouts.concat(action.workout)], 
          completed: [...state.completed]
          }
      default:
        return state;
    }
  };

  export default workoutsReducer
  