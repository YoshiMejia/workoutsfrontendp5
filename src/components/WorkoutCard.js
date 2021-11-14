function WorkoutCard({workout}){
    // debugger
    return(
        <div className="WorkoutCard">
            <div id={workout.id} key={workout.id}>
                <h2>Name: {workout.name}</h2>
                <h4>Description: {workout.description}</h4>
                <p>Reps: {workout.reps}</p>
                <p>Sets: {workout.sets}</p>
                <button>Completed workout</button>
            </div>
        </div>
    )
}

export default WorkoutCard