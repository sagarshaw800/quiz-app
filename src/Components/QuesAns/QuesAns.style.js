import styled from "styled-components";

const OptionButton = styled.button`
width: 40vw;
height: 40px;
display: flex;
justify-content: flex-start;
align-items: center;
margin: 20px;
padding: 20px;
border: 2px solid ${props => {
    if(props.styleObj.answered === true)
    {
        if(props.styleObj.clikedAnswer === props.answer && props.answer !== props.styleObj.correct)
            return '#fe6d73';
        if(props.answer === props.styleObj.correct)
            return '#bfd200';
        else
            return 'lavender';
    }
    else
        return 'lavender'
}};
border-radius: 5px;
background-color: whitesmoke;
cursor: pointer;
outline: none;
`

export const QuesAnsWrapper = styled.div`
width: min(70vw, 660px);
height: auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
border: 2px solid lavender;
border-radius: 5px;
padding: 10px 5vw;
margin: 10px;

h3{
    font-weight: bolder;
}
`

export default OptionButton