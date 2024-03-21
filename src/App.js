import React, { useEffect } from "react";
// import * as React from 'react';
import "./App.css";

import Main from "./components/Main/Main";
import { Route, Routes, Navigate } from "react-router-dom";
import MoreFeature from "./components/Feature/MoreFeatures";
import Error from "./components/Error/Error";
import AdminMain from "./admin/Main";
import TicketSystem from "./admin/TicketSystem/TicketSystem";

import UserVerification from "./admin/UserVerification/UserVerification";
// import HolderVerification from "./admin/HolderVerification/HolderVerification";
// import Tab5 from "./admin/PollSystem/PollSystem";
// import Tab6 from "./admin/EngagementSystem/EngagementSystem";
import NotFound from "./admin/NotFound/NotFound";
import HolderVerification from "./admin/HolderVerification/HolderVerification";
import PollSystem from "./admin/PollSystem/PollSystem";
import EngagementSystem from "./admin/EngagementSystem/EngagementSystem";
import GiveAway from "./admin/GiveAway/GiveAway";
import P2PConfig from "./admin/P2PConfig/P2PConfig";
import Staking from "./admin/Staking/Staking";
import Airdrop from "./admin/Airdrop/Airdrop";
import Snapshots from "./admin/Snapshots/Snapshots";
import DiscordBackup from "./admin/DiscordBackup/DiscordBackup";
import ChooseServer from "./admin/ChooseServer/ChooseServer";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      {/* <Routes>
        
      </Routes> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/allfeatures" element={<MoreFeature />} />
        <Route path="/choose-server" element={<ChooseServer />} />
        <Route path="/dashboard" element={<AdminMain />}>
          <Route path="TicketSystem" element={<TicketSystem />} />
          <Route path="verify-user" element={<UserVerification />} />
          <Route path="holder-verification" element={<HolderVerification />} />
          <Route path="poll-system" element={<PollSystem />} />
          <Route path="engagement-system" element={<EngagementSystem />} />
          <Route path="give-away" element={<GiveAway />} />
          <Route path="p2p-configuration" element={<P2PConfig />} />
          <Route path="staking" element={<Staking />} />
          <Route path="airdrop" element={<Airdrop />} />
          <Route path="snapshots" element={<Snapshots />} />
          <Route path="discord-backup" element={<DiscordBackup />} />
          <Route path="not-found" element={<NotFound />} />

          <Route path="*" element={<Navigate to="/dashboard/not-found" />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
