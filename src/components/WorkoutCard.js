function WorkoutCard({workout}){
    // debugger
    return(
        <div className="WorkoutCard">
            <div id={workout.id} key={workout.id}>
                <h2>{workout.name}</h2>
                <h4>{workout.description}</h4>
                <p>{workout.reps}</p>
                <p>{workout.sets}</p>
                <button>Completed workout</button>
            </div>
        </div>
    )
}

export default WorkoutCard