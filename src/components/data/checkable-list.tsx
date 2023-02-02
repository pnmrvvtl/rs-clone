import React from "react";


export default function CheckableList(props: {classElem: string, classCheck:string, classChecked: string, data: string[], dispatchData: string[], dispatcher: React.Dispatch<string[]>}) {
    const {classElem, classCheck, classChecked, data, dispatchData, dispatcher} = props;
    return (
        <>
            {data.map((el, index) => (
            <div key={index} className={classElem} onClick={() => {
                if (dispatchData.indexOf(el) !== -1) {
                    dispatcher([...dispatchData.filter((inEl) => inEl !== el)])
                } else {
                    dispatcher([...dispatchData, el]);
                }
            }}>
                <div className={`${classCheck} 
                        ${dispatchData.indexOf(el) !== -1 && classChecked}`}
                />
                {el}
            </div>
        ))}
        </>
    )
}