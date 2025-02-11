import Labs from "./Labs";
import Kambaz from "./Kambaz";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Lab3 from "./Labs/Lab3";


export default function App() {
 return (
  <HashRouter>
   <div>
    <Routes>
     <Route path="/" element={<Navigate to="Kambaz"/>}/>
     <Route path="/Labs/*" element={<Labs />} />
     <Route path="/Kambaz/*" element={<Kambaz />} />
     <Route path="/Labs/Lab3/*" element={<Lab3 />} />
    </Routes>
   </div>
  </HashRouter>
);}
