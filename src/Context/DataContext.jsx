import React, { useContext, useEffect, useReducer } from "react";
import { subjectContext } from "./SubjectContext";
import { chapterContext } from "./ChapterContext ";
import getPhysicsData from "../Data/getPhysicsData"
import getChemistryData from "../Data/getChemistryData";
import getMathData from "../Data/getMathData";

export const dataContext = React.createContext()

let x

let initialState = getPhysicsData();
const reducer = (state, action) => {
    switch (action.type) {
        case 'getPhysicsData':
            return getPhysicsData()
        case 'getChemistryData':
            return getChemistryData()
        case 'getMathData':
            return getMathData()
        case 'markAsVisited':
            if(action.sub === 'Physics')
            {
                x = (JSON.parse(localStorage.getItem("physicsData")))
                x[action.num-1].visited = true
                localStorage.setItem("physicsData", JSON.stringify(x))
                return getPhysicsData()
            }
            else if(action.sub === 'Chemistry')
            {
                x = (JSON.parse(localStorage.getItem("chemistryData")))
                x[action.num-1].visited = true
                localStorage.setItem("chemistryData", JSON.stringify(x))
                return getChemistryData()
            }
            else if(action.sub === 'Mathematics')
            {
                x = (JSON.parse(localStorage.getItem("mathData")))
                x[action.num-1].visited = true
                localStorage.setItem("mathData", JSON.stringify(x))
                return getMathData()
            }
            break;
        case 'markAsAnswered':
            if(action.sub === 'Physics')
            {
                x = (JSON.parse(localStorage.getItem("physicsData")))
                x[action.num-1].answered = true
                x[action.num-1].clickedAnswer = action.clickedAnswer;
                localStorage.setItem("physicsData", JSON.stringify(x))
                return getPhysicsData()
            }
            else if(action.sub === 'Chemistry')
            {
                x = (JSON.parse(localStorage.getItem("chemistryData")))
                x[action.num-1].answered = true
                x[action.num-1].clickedAnswer = action.clickedAnswer;
                localStorage.setItem("chemistryData", JSON.stringify(x))
                return getChemistryData()
            }
            else if(action.sub === 'Mathematics')
            {
                x = (JSON.parse(localStorage.getItem("mathData")))
                x[action.num-1].answered = true
                x[action.num-1].clickedAnswer = action.clickedAnswer;
                localStorage.setItem("mathData", JSON.stringify(x))
                return getMathData()
            }
            break;
        default:
            break;
    }
}

const DataContext = ({children}) => {

    const { subject } = useContext(subjectContext)
    const {chapter} = useContext(chapterContext)
    // const [data, setData] = useState(getPhysicsData());
    const [data, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        if(subject === 'Physics')
            dispatch({type: 'getPhysicsData'})
        else if(subject === 'Chemistry')
            dispatch({type: 'getChemistryData'})
        else if(subject === 'Mathematics')
            dispatch({type: 'getMathData'})
    }, [subject]);


    return (
        <dataContext.Provider 
            value={{
                data: data,
                dispatch: dispatch,
            }}>
            {children}
        </dataContext.Provider>
    )
}

export default DataContext
