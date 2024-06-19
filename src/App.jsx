import Business from "./components/Business";
import Company from "./components/Company";
import Help from "./components/Help";
import Main from "./components/Main";
import Menu from "./components/Menu";
import Personal from "./components/Personal";
import {
  BrowserRouter as Router,
  Routes,
  // Switch,
  Route,
  // Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index path="/main" element={<Main />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/business" element={<Business />} />
          <Route path="/company" element={<Company />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Router>
      {/* <Help /> */}
      {/* <Company /> */}
      {/* <Business /> */}
      {/* <Personal /> */}
      {/* <Menu /> */}
      {/* <Main /> */}
    </>
  );
}

export default App;
