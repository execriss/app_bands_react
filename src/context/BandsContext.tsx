import axios from "axios";
import React, { createContext, useReducer } from "react";
import { Bands } from "../types/Bands";
import reducer from "./BandsReducer";

const init = (initState:Bands.BandType[]):never => initState as never;

export const BandsContext = createContext({} as Bands.BandsContext);

export const BandsProvider:React.FC<React.ReactNode> = ({children}):JSX.Element => {

    const [bands, dispatch] = useReducer<Bands.BandsReducer, Bands.BandType[]>(reducer, [], init);

    const fetchBands = async () => {

        // request to the fake database

        const res = await axios.get("https://my-json-server.typicode.com/improvein/dev-challenge/bands");

        const sortedResults = (res.data as Bands.BandType[]).sort((a, b) => {
            return a.year - b.year;
        });

        dispatch({
            type: "STORE",
            value: sortedResults
        });

    }

    const sortBands = (sortBy:string, order:string) => {

        const sortedBands = (bands as Bands.BandType[]).sort((a, b) => {

            if (order === "asc") {
                if (a[sortBy] > b[sortBy]) return 1;
                if (a[sortBy] < b[sortBy]) return -1;
                return 0;
            } else {
                if (a[sortBy] > b[sortBy]) return -1;
                if (a[sortBy] < b[sortBy]) return 1;
                return 0;
            }

        });

        dispatch({
            type: "SORT",
            value: sortedBands
        });

    }

    return(
        <BandsContext.Provider value={{
            bands,
            fetchBands,
            sortBands
        }}>
            {children}
        </BandsContext.Provider>
    );

}