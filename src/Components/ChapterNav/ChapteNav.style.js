import styled from "styled-components";

const ChapterButton = styled.button`
width: 180px;
height: 40px;
padding: 20px;
margin: 10px;
background: linear-gradient(to right, #a8ff78, #78ffd6); 
/* border: none; */
border: 2px solid white;
outline: none;
border-radius: 70px;
display: flex;
justify-content: center;
align-items: center;
font-size: larger;
cursor: pointer;
`
export const ChapterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-device-width: 480px){

        height: min(220px);
    }
    height: 450px;
    width: 256px;
    border: 2px solid lavender;
    border-radius: 5px;
h2{
    margin: 10px;
}
`

export const Chapters = styled.div`
    /* overflow-y: scroll; */
    height: 83%;
`
export default ChapterButton