import Complex from "../models/Complex.js"
import Exercise from "../models/Exercise.js"


export default {

    createExercise(){
        const newEx = new Exercise({
                type:"basic",
                category: "squat",
                name: "lower"}

        )
        newEx.save()

        // const createdComplex = new Complex()

    },


    createComplex(){
        const createdComplex = new Complex(
            {
                type: "first",
                equipment: "all",
                exercises: "686fb34bc604d547ecb4eb68",
            }
        )

        createdComplex.save
    }


};