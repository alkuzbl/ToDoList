import {ButtonsFilterType, FilterValuesType} from "../../App";
import {SuperButton} from "../SuperButton";
import React from "react";

type ButtonsFilterPropsType = {
    buttonsFilter: Array<ButtonsFilterType>
    onFilterClickHandler: (title: FilterValuesType) => void
    filter: FilterValuesType
}
export const ButtonsFilter = ({buttonsFilter, onFilterClickHandler, filter}: ButtonsFilterPropsType) => {

    return (
        <div>
            {
                buttonsFilter.map(btn =>
                    <SuperButton
                        key={btn.id}
                        callBack={() => onFilterClickHandler(btn.title)}
                        name={btn.title}
                        styles={filter === btn.title ? "active-filter" : ""}
                    />
                )
            }
        </div>
    )
}