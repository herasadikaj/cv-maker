import {  Routes as AppRoutes,Route } from "react-router-dom";
import Homepage from '../components/Homepage';
import Personal from '../components/PersonalDetails';
import Education from "../components/Education";
const Routes = () => {
        return (
          <AppRoutes>
            <Route path="/" element={<Homepage />} />
            <Route path="/personal" element={<Personal/>}/>
            <Route path="/education" element={<Education/>}/>
          </AppRoutes>
        );
      };
      

export default Routes;