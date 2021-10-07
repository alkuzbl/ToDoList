import React from "react";
import {Button} from "../form/Button";
import {FilterButtonsDataType} from "../../App";

type FilterButtonsPropsType = {
    filterButton: Array<FilterButtonsDataType>
    setFilter: (taskName: string) => void
    filter: string
}

export const FilterButtons: React.FC<FilterButtonsPropsType> = ({filterButton, setFilter, filter}) => {

    const filteredTasks = (taskName: string) => {
        setFilter(taskName)
    }

    return (
        <div>
            {
                filterButton.map(f => <Button key={f.id}
                                              title={f.title}
                                              styleButton={filter === f.title ? 'active' : ''}
                                              callBack={() => filteredTasks(f.title)}/>)
            }

        </div>
    )
}