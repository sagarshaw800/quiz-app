import React,{useContext, useState, useEffect} from 'react'
import { dataContext } from '../../Context/DataContext'
// import { quesNumberContext } from '../../Context/QuesNumberContext'
import OptionButton, { QuesAnsWrapper } from './QuesAns.style'
import { useParams, useNavigate } from 'react-router-dom'

const QuesAns = () => {

    let navigate = useNavigate();
    const {data, dispatch} = useContext(dataContext)
    const {subject, id} = useParams()

    const [styleObj, setStyleObj] = useState({answered: false,
                                                answerGiven: "",
                                                correct: ""})

    const checkAnswer = (e) => {
        if (data[id-1].answered === false) {
            // console.log(subject, id);
            // console.log(e.target.innerHTML.substring(3));
            dispatch({type:'markAsAnswered', sub: subject, num: id, clickedAnswer: e.target.innerHTML.substring(3)})
            navigate(`/quiz/${subject}/${id}`)
        }
    }

    useEffect(() => {
        setStyleObj({...styleObj,
            answered: data[id-1].answered,
            clikedAnswer: data[id-1].clickedAnswer,
            correct: data[id-1].correct,
        })
    },[data])

    return (
        <QuesAnsWrapper>
            <p>Q{id}. {data[id-1].question}</p>
            <div>
                <OptionButton onClick={checkAnswer} 
                            styleObj={styleObj} 
                            answer={data[id-1].options[0]} >A. {data[id-1].options[0]}</OptionButton>
                <OptionButton onClick={checkAnswer} 
                            styleObj={styleObj} 
                            answer={data[id-1].options[1]} >B. {data[id-1].options[1]}</OptionButton>
                <OptionButton 
                            onClick={checkAnswer} 
                            styleObj={styleObj} 
                            answer={data[id-1].options[2]} >C. {data[id-1].options[2]}</OptionButton>
                <OptionButton 
                            onClick={checkAnswer} 
                            styleObj={styleObj} 
                            answer={data[id-1].options[3]} >D. {data[id-1].options[3]}</OptionButton>
            </div>
        </QuesAnsWrapper>
    )
}

export default QuesAns
