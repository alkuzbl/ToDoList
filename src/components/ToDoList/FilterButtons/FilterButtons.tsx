import React from "react";
import {FilterButtonType} from "../../../App";
import {SuperButton} from "../../defaultComponents/SuperButton";

type FilterButtonsPropsType = {
    filterButtons: Array<FilterButtonType>
    filterTasksCallBack: (filterValue: string) => void
    filterName: string
}

export const FilterButtons = ({filterButtons, filterTasksCallBack, filterName}: FilterButtonsPropsType) => {

    const filteredTasks = (filteredValue: string) => {
        filterTasksCallBack(filteredValue)
    }

    return <div>
        {filterButtons.map(f => <SuperButton name={f.title}
                                             styleButton={filterName === f.title ? 'active' : ''}
                                             callBackClick={() => filteredTasks(f.title)}/>)}
    </div>
}