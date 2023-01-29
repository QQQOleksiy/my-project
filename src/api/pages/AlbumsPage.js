import React, {useEffect, useState} from 'react';

import {albumsRequest} from "../../requests/albumsRequest";
import {Albums} from "../../components/albums/Albums";

export const AlbumsPage = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        albumsRequest.getAll().then(({data}) => setAlbums([...data]))
    },[])
    return (
        <div>
            <h1>Albums</h1>
            {
                albums.map(album => <Albums key={album.id} album={album}/>)
            }
        </div>
    );
};

