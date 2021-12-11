import React, { useContext, useEffect, useState } from 'react'
import ProgressBarWrapper from './ProgressBar.style'
import { dataContext } from "../../Context/DataContext";

const ProgressBar = () => {

    const {data} = useContext(dataContext)

    const [attempted, setAttempted] = useState(0)
    const [attemptedPercentage, setAttemptedPercentage] = useState(0)

    useEffect(() => {
        setAttempted(0)
        data.forEach(element => {
            if(element.answered === true)
                setAttempted((prev) => prev+1)
        });
    }, [data]);

    useEffect(() => {
        setAttemptedPercentage((attempted*100)/(data.length))
    }, [attempted])

    return (
        <ProgressBarWrapper>
            <p>Attempted {attemptedPercentage}%</p> <progress id="file" value={attemptedPercentage} max="100" />
        </ProgressBarWrapper>
    )
}

export default ProgressBar
