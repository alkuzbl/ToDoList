import React from "react";

type ButtonPropsType = {
    title: string
    callBack: () => void
    styleButton?: string
    disabledBtn?: boolean
}

export const Button: React.FC<ButtonPropsType> = ({title, callBack, styleButton, disabledBtn}) => {

    const onClickHandler = () => {
        callBack()
    }

    return (
        <button onClick={onClickHandler}
                className={styleButton}
                disabled={disabledBtn}>{title}</button>
    )
}