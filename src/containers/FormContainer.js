import React from "react";
import WorkoutForm from "../components/WorkoutForm";

const FormContainer = (props) => {
    return(
        <WorkoutForm addWorkout={props.addWorkout} />
    )
}

export default FormContainer;