import React from 'react';
import { Link }from 'react-router-dom';
import { Paper, Typography } from '@material-ui/core';

const VidPresenter = ({video}) => {
    if (!video) return <di>Loading...</di>

    console.log(video.id.videoId)

    
    return ( 
        <React.Fragment>
            <Paper elevation={6} style={{ padding: '15px' }}>
                <Typography variant="h4">{video.snippet.title}</Typography>
                <Link to={`/${video.id.videoId}`}>
                <Typography variant="subtitle1"><img src={video.snippet.thumbnails.medium.url}></img></Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
                </Link>
            </Paper>
        </React.Fragment>
     );
}
 
export default VidPresenter;