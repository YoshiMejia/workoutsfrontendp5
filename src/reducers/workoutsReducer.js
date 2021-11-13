const workoutsReducer = (state = { workouts: []}, action) => {
    // debugger
    console.log('inside reducer');
    switch (action.type) {
      case "NEW_WORKOUT":
        return {
          ...state,
          workouts: action.workouts,
        };
      default:
        return state;
    }
  };

  export default workoutsReducer
  