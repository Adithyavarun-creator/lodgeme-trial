import { GlobalStyles } from "./theme/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import ResgisterPage from "./pages/RegisterPage/ResgisterPage";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CompanyDetailsPage from "./pages/CompanyDetails/CompanyDetailsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register-user-in" element={<ResgisterPage />} />
          <Route path="/company-details" element={<CompanyDetailsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
