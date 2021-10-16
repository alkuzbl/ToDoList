import React from "react";

type DefaultButtonType = {}
type SuperButton = DefaultButtonType & {
    name: string
    callBackClick: () => void
    styleButton?: string
    disabledButton?: boolean
}
export const SuperButton: React.FC<SuperButton> = ({callBackClick,
                                                       name,
                                                       styleButton,
                                                       disabledButton}) => {
    const onClickHandler = () => {
        callBackClick()
    }

    return <button
        className={styleButton}
        disabled={disabledButton}
        onClick={onClickHandler}>
        {name}
    </button>
}