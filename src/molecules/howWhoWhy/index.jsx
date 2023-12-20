import React, { useState } from 'react';
import style from './index.module.css'; // Import your CSS module

const HowWhoWhy = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={style.bottomtop}>
      <div>
        <h1
          className={`${style.how} ${activeTab === 'how' ? style.activeTab : ''}`}
          onClick={() => handleTabClick('how')}
        >
          How
        </h1>
      </div>
      <div>
        <h1
          className={`${style.how} ${activeTab === 'who' ? style.activeTab : ''}`}
          onClick={() => handleTabClick('who')}
        >
          Who
        </h1>
      </div>
      <div>
        <h1
          className={`${style.how} ${activeTab === 'why' ? style.activeTab : ''}`}
          onClick={() => handleTabClick('why')}
        >
          Why
        </h1>
      </div>
    </div>
  );
};

export default HowWhoWhy;
