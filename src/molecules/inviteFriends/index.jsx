import st from "./index.module.css";

import React from "react";

const InviteFriends = () => {
  return (
    <div className={st.container}>
      <div className={st.contentContainer}>
        <span id={st.mainHead}>Invite your friends and earn BORG rewards</span>
        <span id={st.para}>Share the SwissBorg app with your friends and every successful invite earns you and your friend a Rewards Ticket valued from €1 to €100*.</span>
      </div>
    </div>
  );
};

export default InviteFriends;
