export const newWorkoutToStore = (workout) => {
  return { 
    type: 'NEW_WORKOUT',
    workout: workout
  };
};
export const fetchWorkouts = () => {
  return (dispatch) => {
    fetch("http://127.0.0.1:3000/workouts")
    .then(res => res.json())
    .then(json => dispatch({type: 'FETCH_WORKOUTS', workout: json}))
  }
};
export const completeWorkout = (workout) => {
  return { 
    type: 'COMPLETE',
    workout: workout
  };
};
