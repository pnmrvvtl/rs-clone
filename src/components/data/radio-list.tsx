import React from "react";

export default function RadioList(props: {classButton: string, classSelected:string, data: string[], dispatchSelected: string, dispatcher: React.Dispatch<string>,
dispatcherQuestion: React.Dispatch<number>, currentQuestion: number}) {
    const { classButton,classSelected,data, dispatchSelected, dispatcher, dispatcherQuestion, currentQuestion} = props;
    return (
        <>
            {data.map((el, index) => (
                <div key={index} className={`${classButton} ${dispatchSelected === el && classSelected}`}
                     onClick={() => {
                         dispatcher(el);
                         dispatcherQuestion(currentQuestion + 1);
                     }}
                >
                    {el}
                </div>
            ))}
        </>
    )
}