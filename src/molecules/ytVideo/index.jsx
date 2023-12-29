import st from "./index.module.css";

const YTVideo = () => {
  return (
    <div className={st.container}>
      <div className={st.contentContainer}>
        <div className={st.mainCont}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/zckCcYb8qUg?rel=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default YTVideo;