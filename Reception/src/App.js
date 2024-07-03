import "./App.css";
import NAVBAR from "./Modules/nav";
import Home from "./Modules/comps/home";
import Doctor from "./Modules/comps/Doctor_login/doctor";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MedicineData from "./Modules/comps/Doctor_login/medicine";
import OutsideRefered from "./Modules/comps/Doctor_login/OutsideRefered";
import PatientDeatils from "./Modules/comps/Doctor_login/PatientDetails";
import Login from "./Modules/comps/Login_Page/login";
import ReceptionData from "./Modules/comps/Reception/Reception";
import DisplayPatients from "./Modules/comps/Reception/DisplayPatients";
import Login2 from "./Modules/comps/Login_Page/login2";
function App() {
  return (
    <>
      <div className="MainContent">
        <NAVBAR />
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" index element={<Home />} />
              <Route path="/doctor" element={<Doctor />} />
              <Route path="/reception" element={<ReceptionData />} />
              <Route path="/medicinedata" index element={<MedicineData />} />
              <Route path="/outsideRefered" element={<OutsideRefered />} />
              <Route path="/patientData" element={<PatientDeatils />} />
              <Route path="/displaypatient" element={<DisplayPatients />} />
              <Route path="/login" element={<Login />} />
              <Route path="/login2" element={<Login2 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
