const workoutsReducer = (state = { workouts: []}, action) => {
    // debugger
    console.log('inside reducer');
    switch (action.type) {
      case "ADD_WORKOUT":
        console.log({ workouts: [...state.workouts, action.payload] })
        return {
        //   ...state,
        //   workouts: action.workouts,
        // }, () => console.log(state)
          workouts: [...state.workouts, action.payload]
        }
      default:
        return state;
    }
  };

  export default workoutsReducer
  