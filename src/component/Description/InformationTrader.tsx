import HeroSection from "../Video/HeroSection";
import VideoDisplay from "../Video/VideoDisplay";
import VideoPlayer from "../Video/VideoPlayer";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from 'react-router-dom';

function InformationTrader() {
  const videoId = "nI5mAKAFbW0";
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  
  return (
    <div>
      <HeroSection />
      <VideoPlayer videoId={videoId} />
      <VideoDisplay />
    </div>
  );
}

export default InformationTrader;
