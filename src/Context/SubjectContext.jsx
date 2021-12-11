import React, { useState } from "react";

export const subjectContext = React.createContext()


const SubjectContext = ({children}) => {

    const [subject, setSubject] = useState(`Physics`)

    return (
        <subjectContext.Provider 
            value={{
                subject: subject,
                setSubject: setSubject
                }}>
            {children}
        </subjectContext.Provider>
    )
}

export default SubjectContext
