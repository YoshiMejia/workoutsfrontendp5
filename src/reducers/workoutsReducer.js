const workoutsReducer = (state = { workouts: []}, action) => {
    // debugger
    switch (action.type) {
      case "FETCH_WORKOUTS":
        return {
          ...state,
          workouts: action.workouts,
        };
      default:
        return state;
    }
  };

  export default workoutsReducer
  