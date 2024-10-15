export interface VideoPlayerProps {
  videoId: string;
}

function VideoPlayer(videoId: VideoPlayerProps) {

  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  
  return (
    <div style={playerSectionStyle}>
        <iframe
            width="100%"
            height="480"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={videoStyle}
        />
        <div style={videoDetailsStyle}>
            <h2>Video Title</h2>
            <p>Description of the video...</p>
            <button style={ctaButtonStyle}>Like</button>
            <button style={ctaButtonStyle}>Share</button>
        </div>
    </div>
);
}

const playerSectionStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "20px",
};

const videoStyle: React.CSSProperties = {
  maxWidth: "800px",
  border: "none",
};

const videoDetailsStyle: React.CSSProperties = {
  marginTop: "20px",
  textAlign: "center",
};

const ctaButtonStyle: React.CSSProperties = {
  margin: "5px",
  padding: "10px 20px",
  fontSize: "16px",
  backgroundColor: "#f44336",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
export default VideoPlayer;
