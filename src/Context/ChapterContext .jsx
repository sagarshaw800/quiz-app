import React, { useState } from 'react'

export const chapterContext = React.createContext()

const ChapterContext  = ({children}) => {

    const [chapter, setChapter] = useState(1)

    return (
        <chapterContext.Provider
                    value={{
                        chapter: chapter,
                        setChapter: setChapter,
                    }}>
            {children}
        </chapterContext.Provider>
    )
}

export default ChapterContext 
