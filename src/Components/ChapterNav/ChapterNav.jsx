import React from 'react'
import { useNavigate } from 'react-router-dom'
import ChapterButton, { Chapters, ChapterWrapper } from './ChapteNav.style'


const ChapterNav = () => {

    let navigate = useNavigate()

    return (
        <ChapterWrapper>
            <h2>Chapters</h2>
            <Chapters>
                <ChapterButton >Chapter 1</ChapterButton>
                <ChapterButton >Chapter 2</ChapterButton>
                <ChapterButton >Chapter 3</ChapterButton>
            </Chapters>
        </ChapterWrapper>
    )
}

export default ChapterNav
