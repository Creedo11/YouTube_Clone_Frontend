import React from 'react';
import VidPresenter from './VidPresenter';


const RelatedVideoList = ({relatedVideos}) => {
    return ( 
    <div>
        <ul>
            {relatedVideos && relatedVideos.map(el => <VidPresenter key={el.id.videoId} video={el}/>)}
        </ul>
    </div> );
}
 
export default RelatedVideoList;

