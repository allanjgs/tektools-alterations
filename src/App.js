import { Route, Routes, Navigate } from "react-router-dom";
import React, { useEffect } from "react";

import "./App.css";
import Main from "./components/Main/Main";
import MoreFeature from "./components/Feature/MoreFeatures";
import Error from "./components/Error/Error";
import AdminMain from "./admin/Main";
import NotFound from "./admin/NotFound/NotFound";
import AntiBotMembers from "./admin/AntiBotMembers/AntiBotMembers";
import ChooseMain from "./admin/ChooseServer/Main";
import HolderVerification from "./admin/HolderVerification/HolderVerification";
import StakingSetup from "./admin/StakingSetup/StakingSetup";
import TokenCreation from "./admin/TokenCreation/TokenCreation";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'
import DecentralizedStorage from "./admin/DecentralizedStorage/DecentralizedStorage";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/allfeatures" element={<MoreFeature />} />
        <Route path="/select-server" element={<ChooseMain />} />
        <Route path="/dashboard" element={<AdminMain />}>
          <Route path="antiBotMembers" element={<AntiBotMembers />} />
          <Route path="HolderVerification" element={<HolderVerification />} />
          <Route path="StakingSetup" element={<StakingSetup />} />
          <Route path="TokenCreation" element={<TokenCreation />} />
          <Route path="DecentralizeStorage" element={<DecentralizedStorage />} />
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/dashboard/not-found" />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
