import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { quesNumberContext } from '../../Context/QuesNumberContext'
import { subjectContext } from '../../Context/SubjectContext'
import { dataContext } from "../../Context/DataContext";
import PrevNextButtonWrapper, { NextButton, PrevButton } from './PrevNextButtons.style'

const PrevNextButtons = () => {

    let navigate = useNavigate()
    const {quesNum, setQuesNum} = useContext(quesNumberContext)
    const {subject, id} = useContext(subjectContext)
    const {data, dispatch} = useContext(dataContext)

    const decreaseNum = () =>{
        if(quesNum > 1)
        {
            setQuesNum((prevQuesNum)=>{
                return Number(prevQuesNum)-1;
            })
        }
    }
    const increaseNum = () =>{
        if(quesNum < data.length)
        {
            setQuesNum((prevQuesNum)=>{
                return Number(prevQuesNum)+1;
            })
        }
    }
    
    useEffect(() => {
        navigate(`/quiz/${subject}/${quesNum}`)
        dispatch({type:'markAsVisited', sub:subject, num:quesNum})
    }, [subject, quesNum])




    return (
        <PrevNextButtonWrapper>
            <PrevButton onClick={decreaseNum} num={quesNum} >Previous</PrevButton>
            <NextButton onClick={increaseNum} num={quesNum} >Next</NextButton>
        </PrevNextButtonWrapper>
    )
}

export default PrevNextButtons
