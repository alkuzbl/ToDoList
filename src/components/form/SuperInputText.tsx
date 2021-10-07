import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputPropsType = DefaultInputPropsType & {
    callBackOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    callBackOnKeyPress: (key: string) => void
    type?: string
    checked?: boolean
    value?: string
    styleInput?: string
    placeholderValue?: string
}

export const SuperInputText: React.FC<SuperInputPropsType> = ({
                                                              callBackOnChange,
                                                              callBackOnKeyPress,
                                                              type,
                                                              checked,
                                                              styleInput,
                                                              value,
                                                              placeholderValue
                                                          }) => {

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => callBackOnChange(e)
    const onKeyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => callBackOnKeyPress(e.key)

    return <input type={type}
                  className={styleInput}
                  checked={checked}
                  placeholder={placeholderValue}
                  onKeyPress={onKeyPressHandler}
                  onChange={onChangeHandler}
                  value={value}
                  />

}