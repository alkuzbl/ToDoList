import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputPropsType = DefaultInputPropsType & {
    callBackOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    checked?: boolean
    styleInput?: string
}

export const SuperInputCheckBox: React.FC<SuperInputPropsType> = ({
                                                                      callBackOnChange,
                                                                      checked,
                                                                      styleInput
                                                                  }) => {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => callBackOnChange(e)


    return <input type={'checkbox'}
                  className={styleInput}
                  checked={checked}
                  onChange={onChangeHandler}
    />
}