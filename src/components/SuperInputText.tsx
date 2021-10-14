import React, {ChangeEvent, KeyboardEvent} from "react";

type SuperInputTextType = {
    value: string
    callBackOnChange: (value: string) => void
    callBackOnKey: (key: string) => void
    styles?: string
}
export const SuperInputText = ({callBackOnChange, callBackOnKey, styles, ...restProps}: SuperInputTextType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        callBackOnChange(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        callBackOnKey(e.key)
    }

    return (
        <>
            <input value={restProps.value}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={styles}
            />
        </>
    )
}