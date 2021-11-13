export const fetchWorkouts = () => {
    return (dispatch) => {
      fetch("http://127.0.0.1:3000/workouts")
        .then((response) => {
          return response.json();
        })
        .then((responseJSON) => {
          dispatch({ type: "FETCH_WORKOUTS", workouts: responseJSON });
          //put in a debugger to make sure that the line above is grabbing each workout correctly
        });
    };
  };
  