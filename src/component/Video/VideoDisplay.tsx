export interface Video {
  id: number;
  title: string;
  duration: string;
  thumbnail: string;
}

const videos: Video[] = [
  { id: 1, title: "Video 1", duration: "10:00", thumbnail: "thumbnail1.jpg" },
  { id: 2, title: "Video 2", duration: "12:30", thumbnail: "thumbnail2.jpg" },
  // Add more video data here
];

function VideoDisplay() {
  return (
    <section style={videoSectionStyle}>
      {videos.map((video) => (
        <div key={video.id} style={videoCardStyle}>
          <img src={video.thumbnail} alt={video.title} style={thumbnailStyle} />
          <h3>{video.title}</h3>
          <p>{video.duration}</p>
        </div>
      ))}
    </section>
  );
}

const videoSectionStyle: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
};

const videoCardStyle: React.CSSProperties = {
  width: "300px",
  border: "1px solid #ddd",
  borderRadius: "5px",
  overflow: "hidden",
};

const thumbnailStyle: React.CSSProperties = {
  width: "100%",
  height: "auto",
};

export default VideoDisplay;
