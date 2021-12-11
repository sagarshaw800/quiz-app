import styled from "styled-components";

const ProgressBarWrapper = styled.div`
    width: min(70vw, 563px);
    height: 40px;
    margin: 10px 3vw;
    padding: 10px;
    border: 2px solid lavender;
    border-radius: 5px;
    /* background-color: whitesmoke; */
    background: linear-gradient(to right, #a8ff78, #78ffd6);
    display: flex;
    justify-content: space-between;
    align-items: center;

progress{
    width: 78%;
}

`

export default ProgressBarWrapper