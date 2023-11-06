import React from "react";

function VideoPlayer(props) {

    if (props.video) {
        // console.log(props.video);
        let url ="https://www.youtube.com/embed/" + props.video.id.videoId;
        return (
            <div>
                <iframe width="560" height="315" src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        )
    }
    else{
        return(
        <div>Loading...</div>
        )
    }
}
export default VideoPlayer;