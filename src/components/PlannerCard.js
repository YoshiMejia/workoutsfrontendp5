function PlannerCard({planner, workouts}){
    // debugger
    return(
        <div className="plannerCard">
             <div id={planner.id} key={planner.id}>
                <h2>Name: {planner.name}</h2>
                <ul>Workouts: {workouts}</ul>
            </div>
        </div>
    )
}

export default PlannerCard