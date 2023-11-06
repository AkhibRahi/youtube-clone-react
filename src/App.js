import { useEffect, useState } from "react";
import axios from 'axios';
import VideoList from "./components/VideoList";
import VideoPlayer from "./components/VideoPlayer";
import Search from "./components/Search";
// api key: AIzaSyAFelqg9nf4f2tL4N3bUTTRceCafQMMcuE //- 888
// api key: AIzaSyBOJaDbS2EiZpv8srs1Z277if5NF32JAZw // --webTech
// api key: AIzaSyCnLsaRGKc6bzYcmYKsemRy_HwJH1ou_Ig // --786

function App() {

  const [vidoes, setVideos] = useState({
    list: []
  })

  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    youtubeApiData('football');
  }, [])

  const youtubeApiData = (searchTerm) => {
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBOJaDbS2EiZpv8srs1Z277if5NF32JAZw&q=${searchTerm}&type=video`).then(
      response => {
        // console.log(response.data.items);
        setVideos({ list: response.data.items });
        setSelectedVideo(response.data.items[0]);
      }, error => {
        console.log("error", error);
      })

  }

  const getSelectedVideoFromVideoList = (video) => {
    setSelectedVideo(video);
  }
   
  
  return (
    <div>
      <Search onSearchClick={(searchTermParam)=>{
          youtubeApiData(searchTermParam)
      }} ></Search>
      <VideoPlayer video={selectedVideo}></VideoPlayer>
      <VideoList videos={vidoes.list} onVideoClick={(userClickedVideo) => {
        getSelectedVideoFromVideoList(userClickedVideo);
      }} ></VideoList>
    </div>
  );
}

export default App;
