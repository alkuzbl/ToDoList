import React, {useState} from "react";

export const Select = () => {
    const selectValue = [
        {id: 1, title: 'Minsk'},
        {id: 2, title: 'Moscow'},
        {id: 3, title: 'Kiev'}
    ]
    const [collapsed, setCollapsed] = useState(false)
    const [select, setSelect] = useState('Select')
    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }
    const onClickHandlerCollapsed = (title: string) => {
        setCollapsed(!collapsed)
        setSelect(title)
    }
    return (
        <div>
            <div onClick={onClickHandler}>{select}</div>
            {collapsed && selectValue.map(s => <div key={s.id}
                                                    onClick={()=>onClickHandlerCollapsed(s.title)}>{s.title}</div>)}
        </div>
    )
}