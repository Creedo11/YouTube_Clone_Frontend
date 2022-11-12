import React from 'react';

import { Paper, Typography } from '@material-ui/core';

const VidPresenter = ({video}) => {
    if (!video) return <di>Loading...</di>

    console.log(video.id.videoID)

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoID}`;

    
    return ( 
        <React.Fragment>
            <Paper elevation={6} style={{ height: '70%' }}>
                {/* <iframe 
                    title="Video Player" 
                    width="100%" 
                    height="100%"
                    src={videoSrc}
                    frameborder="0">
                </iframe> */}
            </Paper>
            <Paper elevation={6} style={{ padding: '15px' }}>
                <Typography variant="h4">{video.snippet.title}</Typography>
       {/* wrap the below elelment in a "link"  */}
                <Typography variant="subtitle1"><img src={video.snippet.thumbnails.medium.url}></img></Typography>

                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
        // <li>
        //     <img src={video.snippet.thumbnails.high.url} height={video.snippet.thumbnails.high.height} width={video.snippet.thumbnails.high.width} alt=""/>
        //     <h2>{video.snippet.title}</h2>
        // </li>
     );
}
 
export default VidPresenter;