import React from "react";

type ButtonPropsType = {
    title: string
    callBack: ()=> void
    styleButton?: string
}

export const Button: React.FC<ButtonPropsType> = ({title, callBack, styleButton})=> {

    const onClickHandler = ()=> {
        callBack()
    }

    return (
        <button onClick={onClickHandler}
        className={styleButton}>{title}</button>
    )
}