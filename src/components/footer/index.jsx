import images from "../../constants/images";

import Style  from "./index.module.css"
const Footer = () => {
    return (
        <footer  className={Style.footermain1}>
                {/* <hr /> */}
        <div className=  {Style.footermain + ""}>
          <div   className={Style.topcont +"  "}>
          <nav >
            <h5 className={Style.header}>Company</h5>
            <ul className={Style.cards1 + " md:mt-9"}>
              <li className={Style.listelements}>
                <a className={Style.navlink} href="/vision-and-mission">About</a>
              </li>
              {/* <li className={Style.listelements}>
                <a className={Style.navlink} href="/careers">Services</a>
              </li> */}
              {/* <li className={Style.listelements}>
                <a className={Style.navlink} href="/About">Leadership</a>
              </li> */}
              {/* <li className={Style.listelements}>
                <a className={Style.navlink} href="/comingsoon">Careers</a>
              </li> */}
              <li className={Style.listelements}>
                <a className={Style.navlink} href="/contact">Contact</a>
              </li>
              {/* <li className={Style.listelements}>
                <a className={Style.navlink} href="/contactus">Terms & Conditions</a>
              </li>
              <li className={Style.listelements}>
                <a className={Style.navlink} href="/contactus">Privacy Policy</a>
              </li> */}
            </ul>
            </nav>
            <nav >
              <h5 className={Style.header}>Solutions</h5>
              <ul className={Style.cards1 + " md:mt-9"}>
                <li className={Style.listelements}>
                  <a className={Style.navlink} href="/solutions/NextGen-TV">Telecom & 5G</a>
                </li>
                <li className={Style.listelements}>
                  <a className={Style.navlink} href="/solutions/runrun">Media & Broadcasting</a>
                </li>
                <li className={Style.listelements}>
                  <a className={Style.navlink} href="/solutions/smart-city-as-a-service">Smartcities & Government</a>
                </li>
                <li className={Style.listelements}>
                  <a className={Style.navlink} href="/solutions/moScribe">IT Solutions & Automation</a>
                </li>
                {/* <li className={Style.listelements}>
                  <a className={Style.navlink} href="/solutions/moScribe">HR Tech</a>
                </li> */}

              </ul>
            </nav>
            <nav >
              <h5 className={Style.header}>Product</h5>
              <ul className={Style.cards1 + " md:mt-9"}>
                <li className={Style.listelements}>
                  <a className={Style.navlink} href="/products/SUHAaas">OpsMax</a>
                </li>
                <li className={Style.listelements}>
                  <a className={Style.navlink} href="/products/live-news">AI Zoom Bot</a>
                </li>
                <li className={Style.listelements}>
                  <a className={Style.navlink} href="/products/DBaas">Antara</a>
                </li>
                <li className={Style.listelements}>
                  <a className={Style.navlink} href="/products/311">Slack Bot</a>
                </li>
                <li className={Style.listelements}>
                  <a className={Style.navlink} href="/products/live-traffic">Marketplace</a>
                </li>
              </ul>
            </nav>
            <nav >
              <h5 className={Style.header}>Platform</h5>
              <ul className={Style.cards1 + " md:mt-9"}>
                <li className={Style.listelements}>
                  <a className={Style.navlink} href="/platform/pascal-intelligence">Pascal Intelligence(PI)</a>
                </li>
                <li className={Style.listelements}>
                  <a className={Style.navlink} href="/platform/boltzman-bot">BoltzmanBot(BOB)</a>
                </li>
                <li className={Style.listelements}>
                  <a className={Style.navlink} href="/platform/monet">Monet</a>
                </li>
                <li className={Style.listelements}>
                  <a className={Style.navlink} href="/platform/vinci">Vinci</a>
                </li>
                <li className={Style.listelements}>
                  <a className={Style.navlink} href="/platform/holacracy">Hola Verses</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className= {Style.bottomfolder}>
            <nav>
              <ul  className="flex flex-row justify-center items-center">
                <li className="mx-4">
                  <a href="https://www.linkedin.com/company/14438464/">
                    <img src={images.linkedin} alt="Linkedin Icon" />
                  </a>
                </li>
                <li className="mx-4">
                  <a href="https://www.instagram.com/gaiansolutions/">
                    <img src={images.Instagram} alt="Instagram Icon" />
                  </a>
                </li>
                <li className="mx-4">
                  <a href="https://twitter.com/Gaian_Solutions">
                    <img src={images.Twitter} alt="Twitter Icon" />
                  </a>
                </li>
                <li className="mx-4">
                  <a href="https://www.youtube.com/@Gaiansolutions">
                    <img src={images.Youtube} alt="Facebook Icon" />
                  </a>
                </li>
              </ul>
            </nav>
            <div className= {Style.bottomcontent }>

               {/* <div className={Style.Termscontent}><a href="/terms-and-conditions">Terms and Conditions&nbsp;| &nbsp;</a></div> */}
               <div>
               All Rights Reserved. 2023 Copyright&nbsp; &nbsp;
                
               </div>
               <div>

               <a  href="/" className={Style.routingcontent}>Gaian Solutions</a>

               </div>
              
            </div>
          </div>
        </div>
      </footer>
    )
}
export default Footer;