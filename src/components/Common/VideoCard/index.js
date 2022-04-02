import "./videoCard.css"

const VideoCard = ({video}) => {
  return (
    <section className="video-card">
      <div className="img-container flex-center">
        <img className="video-img" src={video.img_url} alt=""/>
      </div>
      <div className="video-inner-content flex">
        <p className="video-title font-md">{video.title}</p>
        <span className="material-icons more-icon">more_vert</span>
      </div>
      <p className="video-subtitle font-sm">{video.creator}</p>
    </section>
  );
};

export default VideoCard;
