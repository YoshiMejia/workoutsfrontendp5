// function WorkoutCard(props){
//     return(
//         <div>
//         <h3>workout card being rendered</h3>    
//         </div>
//     )
//     //check props 
// }
function WorkoutCard({workout}){
    // debugger
    return(
        <div id={workout.id}>
            <h2>{workout.name}</h2>
            <h4>{workout.description}</h4>
            <p>{workout.reps}</p>
            <p>{workout.sets}</p>
            <button>Completed workout</button>
        </div>
    )
    //check props 
}

export default WorkoutCard