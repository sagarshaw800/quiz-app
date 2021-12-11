import React, {  useState } from "react";

export const quesNumberContext = React.createContext()

const QuesNumberContext = ({children}) => {

    const [quesNum, setQuesNum] = useState(1);

    return (
        <quesNumberContext.Provider
            value={{
                quesNum: quesNum,
                setQuesNum: setQuesNum,
                }}>
            {children}
        </quesNumberContext.Provider>
    )
}

export default QuesNumberContext
