import React from "react";
import {Button} from "@mui/material";
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';


type DefaultButtonType = {}
type SuperButtonType = DefaultButtonType & {
    name: string
    callBackClick: () => void
    styleButton?: boolean
    disabledButton?: boolean
    iconButtonDeleteMUI: boolean

}
export const SuperButton = React.memo(({
                                           callBackClick,
                                           name,
                                           iconButtonDeleteMUI,
                                           styleButton,
                                           disabledButton
                                       }: SuperButtonType) => {
    const onClickHandler = () => {
        callBackClick()
    }

    return <>
        {
            iconButtonDeleteMUI ? <IconButton aria-label="delete"
                                              disabled={disabledButton}
                                              onClick={onClickHandler}
                                              size={'small'}>
                <DeleteIcon fontSize="inherit"/>
            </IconButton> : <Button
                variant={"contained"}
                color={styleButton ? 'secondary' : 'info'}
                disabled={disabledButton}
                onClick={onClickHandler}>
                {name}
            </Button>
        }
    </>

})