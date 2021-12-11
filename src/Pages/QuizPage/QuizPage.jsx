import React from 'react'
import Layout from '../../Common/Layout/Layout'
import PrevNextButtons from '../../Components/PrevNextButtons/PrevNextButtons'
import ProgressBar from '../../Components/ProgressBar/ProgressBar'
import QuesAns from '../../Components/QuesAns/QuesAns'
import QuestionNav from '../../Components/QuestionNav/QuestionNav'
import SubjectNav from '../../Components/SubjectNav/SubjectNav'
import ContentWrapper, { Middle } from './QuizPage.style'



const QuizPage = () => {

    return (
        <Layout>
            <ContentWrapper>
                <SubjectNav />
                <Middle>
                    <ProgressBar />
                    <QuesAns />
                    <PrevNextButtons />
                </Middle>
                <QuestionNav />
            </ContentWrapper>
        </Layout>
    )
}

export default QuizPage

