export const newWorkoutToStore = (workout) => {
  return { 
    type: 'NEW_WORKOUT',
    workout: workout
  };
};
export const fetchWorkouts = (workouts) => {
  return { 
    type: 'FETCH_WORKOUTS',
    workout: workouts
  };
};
