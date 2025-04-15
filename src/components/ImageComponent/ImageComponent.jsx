function ImageComponent() {
    return (
      <>
      <div data-aos="fade-right">
        <img src="/Steyr_2.jpg" width="1000" alt="Example" className="imageComponent" />
        {/* <img src={ImageComponent} alt="Steyr" className="imageComponent" /> */}
      </div>
      <div data-aos="fade-left">
        <img src="/Steyr.jpg" alt="Steyr" width="1500" className="imageComponent" />
      </div>
      </>
    );
  };

  export default ImageComponent;