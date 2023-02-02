import React from "react";

export default function RadioSubList(props: {
    classButton: string, classSelected: string, classPOne: string, classPTwo: string, data: string[][], dispatchSelected: string, dispatcher: React.Dispatch<string>,
    dispatcherQuestion: React.Dispatch<number>, currentQuestion: number
}) {
    const {
        classPTwo,
        classPOne,
        classButton,
        classSelected,
        data,
        dispatchSelected,
        dispatcher,
        dispatcherQuestion,
        currentQuestion
    } = props;
    return (
        <>
            {data.map((el, index) => (
                <div key={index} className={`${classButton} ${dispatchSelected === el[0] && classSelected}`}
                     onClick={() => {
                         dispatcher(el[0]);
                         dispatcherQuestion(currentQuestion + 1);
                     }}
                >
                    <p className={classPOne}>{el[0]}</p>
                    <p className={classPTwo}>{el[1]}</p>
                </div>
            ))}
        </>
    )
}