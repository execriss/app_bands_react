import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Bands } from "../../../types/Bands";
import BandCard from "./BandCard";

/**
 * Grid container for bands grid cards.
 */
const BandsGrid:React.FC<{bands:Bands.BandType[]}> = ({bands}):JSX.Element => {

    const [cards, setCards] = useState<JSX.Element[]>([]);

    const createCards = () => {

        setCards(bands.map((band, i) => <BandCard data={band} key={i}/>));

    }

    useEffect(() => createCards(), [bands]);

    return(
        <Grid container spacing={2}>
            {cards}
        </Grid>
    );

}

export default BandsGrid;