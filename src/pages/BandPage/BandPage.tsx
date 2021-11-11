import { Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Bands } from "../../types/Bands";
import AlbumsGrid from "./AlbumsGrid/AlbumsGrid";
import BandInfo from "./BandInfo/BandInfo";
import Members from "./Members/Members";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { indigo } from "@mui/material/colors";
import InnerPageContainer from "../../components/InnerPageContainer";

/**
 * This is a band page, it display all the related data of a specific band defined by a ID in the url params.
 */
const BandPage:React.FC = ():JSX.Element => {

    const { id } = useParams() as {id: string};

    const [band, setBand] = useState<Bands.BandType>();
    const [genre, setGenre] = useState<Bands.GenreType[]>([]);
    const [albums, setAlbums] = useState<Bands.AlbumType[]>([]);

    const getBand = async () => {

        const res = await axios.get(`https://my-json-server.typicode.com/improvein/dev-challenge/bands/${id}`);

        setBand(res.data);

    }

    const getAlbums = async () => {

        const res = await axios.get(`https://my-json-server.typicode.com/improvein/dev-challenge/albums?bandId=${id}`);

        setAlbums(res.data);

    }

    const getGenre = async () => {

        const res = await axios.get(`https://my-json-server.typicode.com/improvein/dev-challenge/genre?code=${band?.genreCode}`);

        setGenre(res.data);

    }

    useEffect(() => {
        getBand();
        getAlbums();
    }, []);
    useEffect(() => {
        if (band) getGenre();
    }, [band]);

    return(
        <InnerPageContainer>

            <Link to="/" style={{textDecoration: "none"}}>
                <Button variant="contained" size="small">
                    <ArrowBackIcon fontSize="small" sx={{marginRight: "0.3rem"}}/>
                    Back to home
                </Button>
            </Link>

            <BandInfo data={band} genre={genre[0]}/>

            <Members members={band?.members}/>

            <hr/>

            <Typography variant="h6" fontWeight="light" mt={3} color={indigo[900]}>Albums</Typography>
            
            <AlbumsGrid albums={albums}/>

        </InnerPageContainer>
    );

}

export default BandPage;