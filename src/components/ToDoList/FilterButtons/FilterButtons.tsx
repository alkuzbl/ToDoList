import React from "react";

import {SuperButton} from "../../defaultComponents/SuperButton";

type FilterButtonsPropsType = {
    filterButtons: {id: string, title: string}[]
    filterTasksCallBack: (filterValue: string) => void
    filterName: string
}

export const FilterButtons = React.memo(({filterButtons, filterTasksCallBack, filterName}: FilterButtonsPropsType) => {

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
})
