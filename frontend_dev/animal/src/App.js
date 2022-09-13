import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainNavBar from "./components/MainNavBar";
import CommunityPage from "./screens/Community/Community";
import DiagnosePage from "./screens/Diagnose";
import FacilitiesPage from "./screens/Facilities";
import LoginPage from "./screens/Login";
import MainPage from "./screens/Main";
import MyPage from "./screens/MyPage";
import FirstAidPage from "./screens/FirstAid";

function App() {
  return (
    <>
      <MainNavBar />
      <div>
        <Routes>
          <Route element={<MainPage />} path="/"></Route>
          <Route element={<DiagnosePage />} path="/diagnose"></Route>
          <Route element={<FirstAidPage />} path="/firstaid"></Route>
          <Route element={<FacilitiesPage />} path="/facilities"></Route>
          <Route element={<CommunityPage />} path="/community"></Route>
          <Route element={<MyPage />} path="/mypage"></Route>
          <Route element={<LoginPage />} path="/login"></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
