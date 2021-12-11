import React, {useContext, useEffect} from 'react'
import { subjectContext } from '../../Context/SubjectContext'
import { useNavigate, useParams} from "react-router-dom"
import  SubjectButton, { Subjects, SubjectWrapper } from './SubjectNav.style'
import { quesNumberContext } from '../../Context/QuesNumberContext'

const SubjectNav = () => {

    let navigate = useNavigate()
    const { subject, setSubject } = useContext(subjectContext)
    const { setQuesNum} = useContext(quesNumberContext)

    const showSubject = (e) => {
        setSubject(`${e.target.innerHTML}`)
        setQuesNum(1)
    }   
    
    useEffect(() => {
        navigate(`/quiz/${subject}/1`)
    }, [subject])

    return (
        <SubjectWrapper>
            <h2>Subjects</h2>
            <Subjects>
                <SubjectButton onClick={showSubject} id="physics">Physics</SubjectButton>
                <SubjectButton onClick={showSubject} id="chemistry">Chemistry</SubjectButton>
                <SubjectButton onClick={showSubject} id="math">Mathematics</SubjectButton>
            </Subjects>
        </SubjectWrapper>
    )
}

export default SubjectNav
