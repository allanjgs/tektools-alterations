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
          
          <Route path="not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/dashboard/not-found" />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
