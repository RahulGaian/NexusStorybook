import React from "react"
import Style from "./index.module.css"
const TermsAndConditions=()=>{
   return(
    <>
    <div className={Style.termsmain}>
        <div className={Style.termssecondmain}>
            <div className={Style.termshead}>Terms,Conditions & Privacy Policies</div>
            <div className={Style.termsdescription}>At Mobius, we are committed to safeguarding your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you visit our website or use our services.</div>
            <div className={Style.termscontent}>
                <h4>1.&nbsp;Information We Collect</h4>
                <p>We may collect the following personal information from our users:</p>
                <div>
                    <ul className={Style.listmain}>
                    <li><span className={Style.listhead}>User Location :&nbsp;</span><span className={Style.listdesc}>We may collect your geographical location to provide location-specific product recommendations.</span>
                    </li>
                    <li>
                    <span className={Style.listhead}>Device Information :&nbsp;</span><span className={Style.listdesc}>We may collect information about the devices you use to access our website to improve our services and enhance user experience.</span>
                    </li>
                    </ul>
                </div>

            </div>

            <div className={Style.termscontent}>
                <h4>2.&nbsp;Use of Collected Information</h4>
                <p>The personal information we collect is used for the following purposes:</p>
                <div>
                    <ul className={Style.listmain}>
                    <li><span className={Style.listhead}>Personalized Product Recommendations : &nbsp;</span><span className={Style.listdesc}>We may use your location data to display products or services that are relevant to your geographic area.</span>
                    </li>
                    <li>
                    <span className={Style.listhead}>Website Improvement :&nbsp;</span><span className={Style.listdesc}>We analyze device information to optimize our website's performance and user interface.</span>
                    </li>
                    </ul>
                </div>

            </div>
            <div className={Style.termscontent}>
                <h4>3.&nbsp;Sharing of Personal Information</h4>
                <p>aidtaas.com  does not share users' personal information with any third parties under any circumstances. Your data will be treated as strictly confidential and will only be used for the purposes mentioned in this Privacy Policy.</p>
            </div>
            <div className={Style.termscontent}>
                <h4>4.&nbsp;Use of Cookies and Similar Technologies</h4>
                <p>Cookies are small text files that are stored on your device when you visit our website. We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, and improve our services. You can manage your cookie preferences through your web browser settings.</p>
            </div>
            <div className={Style.termscontent}>
                <h4>5.&nbsp;Security Measures</h4>
                <p>At Mobius, we take security seriously and employ various measures to protect your personal information:</p>
                <div>
                    <ul className={Style.listmain}>
                    <li><span className={Style.listhead}>Data Encryption :&nbsp;</span><span className={Style.listdesc}>We use HTTPS to encrypt data transmitted between your browser and our web server, ensuring secure communication.</span>
                    </li>
                    <li>
                    <span className={Style.listhead}>Data Minimization :&nbsp;</span><span className={Style.listdesc}>We only collect and retain the necessary personal information required to provide our services.</span>
                    </li>
                    <li>
                    <span className={Style.listhead}>Secured Payment Processing :&nbsp;</span><span className={Style.listdesc}>For online transactions, we use reputable payment gateways that comply with industry security standards to protect your financial data.</span>
                    </li>
                    </ul>
                </div>
                <p>However, while we implement these security measures, no data transmission over the internet can be guaranteed to be 100% secure. Therefore, we cannot guarantee the absolute security of your personal information.</p>
            </div>
            <div className={Style.termscontent}>
                <h4>6.&nbsp;Updates to the Privacy Policy</h4>
                <p>This Privacy Policy may be updated from time to time to reflect changes in our practices and legal requirements. We encourage you to review this page periodically for any updates.</p>
            </div>
            <div className={Style.termscontent}>
                <h4>7.&nbsp;Contact Us</h4>
                <p>If you have any questions, concerns, or requests regarding our Privacy Policy or the handling of your personal information, please contact us.</p>
            </div>

        </div>

        
    </div>
    </>
   )
}
export default TermsAndConditions;