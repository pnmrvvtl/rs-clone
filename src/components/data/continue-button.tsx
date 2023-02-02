import styles from "../../pages/data-page/data-page.module.scss";
import React, {MouseEventHandler} from "react";

export default function ContinueButton(props: {classes: string, clickHandler: MouseEventHandler<HTMLDivElement>}) {
    return (
        <div className={props.classes}
             onClick={props.clickHandler}>
            Continue
        </div>
    )
}