import React, {ChangeEvent} from "react";

type SuperInputCheckBoxPropsType = {
    callBackOnChange: (checkStatus: boolean) => void
    checkStatus: boolean
}
export const SuperInputCheckBox = ({callBackOnChange, checkStatus}: SuperInputCheckBoxPropsType) => {

    function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        callBackOnChange(e.currentTarget.checked)
    }

    return (
        <input type="checkbox"
               onChange={onChangeHandler}
               checked={checkStatus}/>
    )
}