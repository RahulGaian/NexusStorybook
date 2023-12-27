import  Style  from "./index.module.css"



const Button = ({text,style,filled,className="",href,url}) => {
    // console.log(href)
    const changeRoute=(Route)=>{
        window.location.href = Route;
    }
    return (
        <a  className={ filled? Style.btn+ " " + Style.btn_filled+ " "  + className : Style.btn+" " + className }  onClick={()=>{changeRoute(url)}} style={style} href={href}>
            {text}
        </a>
    )
}

export default Button;