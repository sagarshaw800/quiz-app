import styled from "styled-components";

const PrevNextButtonWrapper = styled.div`
    width: min(70vw, 640px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 0 10px;
`

export const PrevButton = styled.button`
    width: 120px;
    height: 40px;
    border: 2px solid lavender;
    /* background-color: whitesmoke; */
    background: linear-gradient(to right, #a8ff78, #78ffd6);
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
    font-size: 16px;
    visibility: ${(props) => {
        if(props.num === 1)
            return `hidden`
        else
            return `visible`
    }};
`
export const NextButton = styled.button`
    width: 120px;
    height: 40px;
    border: 2px solid lavender;
    /* background-color: whitesmoke; */
    background: linear-gradient(to right, #a8ff78, #78ffd6);
    border-radius: 5px;
    cursor: pointer;
    padding: 5px;
    font-size: 16px;
    visibility: ${(props) => {
        if(props.num === 8)
            return `hidden`
        else
            return `visible`
    }};
`


export default PrevNextButtonWrapper