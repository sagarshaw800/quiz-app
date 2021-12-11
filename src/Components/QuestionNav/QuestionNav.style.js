import styled from "styled-components";

const QuestionNavWrapper = styled.div`
    height: 450px;
    width: 270px;
    border: 2px solid lavender;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: whitesmoke; */
`

export const DemoBtns = styled.button`
    width: 40px;
    height: 40px;
    border: 2px solid lavender;
    background-color: ${(props) => props.code};
    color: ${(props) => props.code==='whitesmoke' ? 'black' : 'white'};
    outline: none;
    border-radius: 50%;
    font-weight: bolder;
    font-size: 16px;
    cursor: pointer;
    margin: 4px 5px;
`

export const Btns = styled(DemoBtns)`
    background-color: ${(props) => props.visited===false ? 'whitesmoke' : '#fe6d73'};
    background-color: ${(props) => props.answered===true ? '#bfd200' : ''};
    color: ${(props) => props.visited===false ? 'black' : 'white'};;
`

export const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 30%;
    margin-bottom: 20px;
`

export const BtnWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 20px 0;
`

export default QuestionNavWrapper