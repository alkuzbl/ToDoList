import React from "react";

type SuperButtonPropsType = {
    callBack: () => void
    name: string
    styles?: string
}
export const SuperButton = ({callBack, styles, name}: SuperButtonPropsType) => {
    const onClickHandler = () => {
        callBack()
    }

    return (
        <button
            className={styles}
            onClick={onClickHandler}> {name}
        </button>
    )
}