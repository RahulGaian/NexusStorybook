import st from "./index.module.css";

const Footer = () => {
  return (
    <div className={st.container}>
      <div className={st.contentContainer}>
        <div className={st.firstclmn}>
          <span className={st.txt1}>
            Holding and headquarters in Switzerland
          </span>
          <span className={st.txt2}>SBorg SA</span>
          <span className={st.txt3}>
            Rue du Grand-Chêne 8, 1003 Lausanne Switzerland
          </span>
        </div>
        <div className={st.secondclmn}>
          <span className={st.txt1}>
            Operating the SwissBorg App under the license FVT000326 in Estonia
            and under the registration E2022-034 in France
          </span>
          <span className={st.txt2}>SwissBorg Solutions OÜ</span>
          <span className={st.txt3}>Pärnu mnt. 12, 10148 Tallinn, Estonia</span>
        </div>
        <div className={st.thirdclmn}>
          <span className={st.txt1}>
            SwissBorg Solutions OÜ is a partner of Modulr Finance B.V., a
            company registered in the Netherlands with company number 81852401,
            which is authorised and regulated by the Dutch Central Bank (DNB) as
            an Electronic Money Institution (Firm Reference Number: R182870) for
            the issuance of electronic money and payment services.
          </span>
          <span className={st.txt2}>
            Your account and related payment services are provided by Modulr
            Finance B.V.
          </span>
          <span className={st.txt3}>
            Your funds will be held in one or more segregated accounts and
            safeguarded in line with the Financial Supervision Act (Wet op het
            Financieel Toezicht, Wft) – for more information please see{" "}
            <a id={st.anc1} href="/">
              here
            </a>
            .
          </span>
          <span id={st.cpr}>© SBorg SA. All Rights Reserved.</span>
        </div>
        <div className={st.fourthclmn}>
          By using this website you agree to our Terms of Use. Nothing on this
          website should be construed as a recommendation for any action.
          SwissBorg Solutions OÜ is the owner of the license: FVT000326 ( <a id={st.anc1} href="/">link</a> )
          and E2022-034 ( <a id={st.anc1} href="/">link</a> ). For more details, please see the Terms of Use of
          the SwissBorg app.
        </div>
        <div className={st.btmbar}>
           <a id={st.anc1} href="/">Terms of Use</a>
           <a id={st.anc1} href="/">Privacy Policy</a>
           <a id={st.anc1} href="/">Cookies Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
