import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { Dispatch } from "react";

/**
 * Provide a selector with options to choose the sort method.
 */
const SortOptions:React.FC<{sortBy:string, setSortBy:Dispatch<string>}> = ({sortBy, setSortBy}):JSX.Element => {

    const handleChange = (e:SelectChangeEvent) => {

        setSortBy(e.target.value);

    }

    return(
        <FormControl sx={{
            marginRight: "1rem"
        }}>
            <InputLabel id="sortByLabel">Ordenar</InputLabel>
            <Select
                labelId="sortByLabel"
                id="sortBy"
                value={sortBy}
                label="Sort by"
                size="small"
                color="info"
                onChange={handleChange}
                sx={{
                    width: "300px"
                }}
            >
                <MenuItem value="year">Año</MenuItem>
                <MenuItem value="name">Nombre</MenuItem>
                <MenuItem value="country">Ciudad</MenuItem>
            </Select>
        </FormControl>
    );

} 

export default SortOptions;