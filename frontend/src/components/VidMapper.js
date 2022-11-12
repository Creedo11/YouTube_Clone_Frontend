import React from 'react';
import VidPresenter from './VidPresenter';

const VidMapper = ({videos}) => {
    return (
        <ul>
            {videos && videos.map(el => <VidPresenter key={el.id.videoId} video={el}/>)}
        </ul>
      );
}
 
export default VidMapper;