import React from 'react';
import VidPresenter from './VidPresenter';

const VidMapper = ({vidArray}) => {
    return (
        <ul>
            {vidArray.map(el => <VidPresenter key={el.id.videoId} video = {el}/>)}
        </ul>
      );
}
 
export default VidMapper;