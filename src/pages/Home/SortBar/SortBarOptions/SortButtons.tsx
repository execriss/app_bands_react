import { IconButton, Stack } from "@mui/material";
import React, { Dispatch } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

/**
 * Provides a set of buttons that sort the bands grid in asc or desc order depending on the sort method.
 */
const SortButtons:React.FC<{setOrder:Dispatch<string>}> = ({setOrder}):JSX.Element => {

    const sortDesc = () => setOrder("desc");
    const sortAsc = () => setOrder("asc");

    return(
        <Stack direction="row">

            <IconButton component="span" color="primary" onClick={sortDesc}>
                <ArrowUpwardIcon fontSize="medium"/>
            </IconButton>

            <IconButton component="span" color="primary" onClick={sortAsc}>
                <ArrowDownwardIcon fontSize="medium"/>
            </IconButton>

        </Stack>
    );

}

export default SortButtons;