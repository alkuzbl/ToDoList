import React from "react";
import {FilterButtonsDataType} from "../../../App";
import {SuperButton} from "../../defaultComponents/SuperButton";

type FilterButtonsPropsType = {
    filterButtons: FilterButtonsDataType
    filterTasksCallBack: (filterValue: string) => void
    filterName: string
}

export const FilterButtons = ({filterButtons, filterTasksCallBack, filterName}: FilterButtonsPropsType) => {

    const filteredTasks = (filteredValue: string) => {
        filterTasksCallBack(filteredValue)
    }

    return <div>
        {filterButtons.map(f => <SuperButton
            key={f.id}
            name={f.title}
            iconButtonDeleteMUI={false}
            styleButton={filterName === f.title}
            callBackClick={() => filteredTasks(f.title)}/>)}
    </div>
}
//styleButton={filterName === f.title ? 'inherit' : 'info'}