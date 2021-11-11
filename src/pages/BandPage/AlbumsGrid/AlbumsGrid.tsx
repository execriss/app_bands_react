import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Bands } from "../../../types/Bands";
import AlbumCard from "./AlbumCard";


const AlbumsGrid:React.FC<{albums:Bands.AlbumType[]}> = ({albums}):JSX.Element => {

    const [cards, setCards] = useState<JSX.Element[]>([]);

    const createAlbumsCards = () => {

        setCards(albums.map((album, i) => <AlbumCard data={album} key={i}/>));

    }

    useEffect(() => createAlbumsCards(), [albums]);

    return(
        <Grid container spacing={2} mt={1}>
            {cards}
        </Grid>
    );

}

export default AlbumsGrid;