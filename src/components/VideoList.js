
function VideoList(props) {

    const renderVideoList = () => {
        let list = props.videos.map(video => {
            return <li onClick={()=> props.onVideoClick(video)} key={video.etag}> <img src={video.snippet.thumbnails.medium.url}></img></li>
        })
        return list;
    }

    return (
        <div>
            <h1>Video List</h1>
            <ul style={{listStyleType : "none"}}>
            {renderVideoList()} 
            </ul>
        </div>
    )
}
export default VideoList;