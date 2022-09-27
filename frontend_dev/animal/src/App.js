import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainNavBar from "./components/MainNavBar";
import CommunityPage from "./screens/Community/Community";
import DiagnosePage from "./screens/Diagnose";
// import FacilitiesPage from "./screens/Facilities";
import Main from "./screens/Main";
import MyPage from "./screens/MyPage";
import Login from "./screens/Login";
import Join from "./screens/Join";
import FirstAidPage from "./screens/FirstAid";
import LostList from './screens/LostList';
import DiagnoseList from './screens/DiagnoseList';
import ShowpetList from './screens/ShowpetList';

function App() {
  return (
    <>
      <MainNavBar />
      <div>
        <Routes>
          <Route element={<Main />} path="/"></Route>
          <Route element={<DiagnosePage />} path="/diagnose"></Route>
          <Route element={<FirstAidPage />} path="/firstaid"></Route>
          <Route element={<CommunityPage />} path="/community"></Route>
          <Route element={<MyPage />} path="/mypage"></Route>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<Join />} path="/join"></Route>
          <Route element={<LostList />} path="/lostlist"></Route>
          <Route element={<DiagnoseList />} path="/diagnoselist"></Route>
          <Route element={<ShowpetList />} path="/showpetlist"></Route>

        </Routes>
      </div>
    </>
  );
}

export default App;
