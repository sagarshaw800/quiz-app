import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import Layout from '../../Common/Layout/Layout'
import {subjectContext} from "../../Context/SubjectContext"
import HomePageWrapper from './HomePage.style';


const HomePage = () => {

    let navigate = useNavigate()
    const {subject} = useContext(subjectContext)
    
    
    const moveToQuiz = () => {
        navigate(`/quiz/${subject}/1`)
    }

    return (
        <Layout>
            <HomePageWrapper>
                <h2>Khela Hobe ?</h2>
                <button onClick={moveToQuiz}>Hobe !</button>
            </HomePageWrapper>
        </Layout>
    )
}

export default HomePage
