import { useParams } from "react-router-dom";
import React, { useState } from 'react';
import axios from "axios";
import { API_KEY } from "../../API_KEYS/API_KEY";
import RelatedVideoList from "../../components/RelatedVideoList";




const SelectedVideoPage = (props) => {
    
    const { videoId } = useParams();
    const [relatedVideos, setRelatedVideos] = useState([]);


    async function getRelatedResults(){
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&part=snippet&maxResults=5&${API_KEY}`)
        console.log(response.data.items)
        setRelatedVideos(response.data.items)
    }
    {
    return ( 
        <div>
            <iframe 
                id="ytplayer" 
                type="text/html" 
                width="640" 
                height="360"
                src={`https://www.youtube.com/embed/${videoId}`}>
            </iframe>
            <RelatedVideoList getRelatedResults={getRelatedResults} relatedVideos={relatedVideos} />
        </div> 
        );
}
}

export default SelectedVideoPage;