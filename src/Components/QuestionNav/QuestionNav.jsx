import React, { useContext} from 'react'
import QuestionNavWrapper, { DemoBtns, BtnWrapper, InfoWrapper, Btns } from './QuestionNav.style'
import { dataContext } from "../../Context/DataContext";
import { useNavigate } from 'react-router-dom';
import { subjectContext } from '../../Context/SubjectContext';
import { quesNumberContext } from '../../Context/QuesNumberContext';


const QuestionNav = () => {

    let navigate = useNavigate()
    const {data} = useContext(dataContext)
    const {subject} = useContext(subjectContext)
    const {setQuesNum} = useContext(quesNumberContext)

    const moveToQuestion = (e) =>{
        setQuesNum(e.target.innerHTML)
        navigate(`/quiz/${subject}/${e.target.innerHTML}`)
    }

    const numList = data.map((item, idx) => <Btns key={idx} onClick={moveToQuestion}
                                                    code='whitesmoke' 
                                                    answered={item.answered}
                                                    visited={item.visited}>{idx+1}</Btns>)

    return (
        <QuestionNavWrapper>
            <InfoWrapper>
                <div><DemoBtns code='whitesmoke'>X</DemoBtns> Not Visited </div>
                <div><DemoBtns code='#fe6d73'>Y</DemoBtns> Visited and Not Attempted</div>
                <div><DemoBtns code='#bfd200'>Z</DemoBtns> Visited and Attempted</div>
            </InfoWrapper>
            <BtnWrapper>
                {numList}
            </BtnWrapper>
        </QuestionNavWrapper>
    )
}

export default QuestionNav
