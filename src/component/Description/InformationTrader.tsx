import HeroSection from "../Video/HeroSection"
import VideoDisplay from "../Video/VideoDisplay"
import VideoPlayer from "../Video/VideoPlayer"

function InformationTrader() {
  const videoId = 'nI5mAKAFbW0';

  return (
    <div>
      {/* <h1>Information</h1> */}
      <HeroSection/>
      <VideoPlayer videoId={videoId}/>
      <VideoDisplay/>
    </div>
  )
}

export default InformationTrader
