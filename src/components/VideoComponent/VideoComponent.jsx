function VideoComponent() {
    return (
      <>
      <div data-aos="fade-up">
        <video controls width="500">
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
      </>
    );
  }
  
  export default VideoComponent;