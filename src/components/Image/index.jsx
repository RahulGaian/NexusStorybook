let Img = ({src,style,className,onClick}) => {

    return(
        <img src={process.env.PUBLIC_URL + src} style={style} onClick={onClick} className={className} alt="Imagenotfound " />
    )
}
export default Img;

