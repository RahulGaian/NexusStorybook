let Img = ({src,style,className}) => {

    return(
        <img src={process.env.PUBLIC_URL + src} style={style} className={className} alt="Imagenotfound " />
    )
}
export default Img;

