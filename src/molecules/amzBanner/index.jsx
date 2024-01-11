import st from "./index.module.css";

const CesBanner = () => {
  return (
    <div className={st.container}>
      <div className={st.videoContainer}>
        <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source
            src={process.env.PUBLIC_URL + "/video/test.mp4"}
            type="video/mp4"
          />
        </video>
        <div className={st.contentContainer}>
          <span id={st.head}>Meet us at CES 2024</span>
          <span id={st.dnt}>
            January 9-12 | Booth #19744, Central Hall, LVCC | Las Vegas, NV
          </span>
        </div>
      </div>
    </div>
  );
};

export default CesBanner;
