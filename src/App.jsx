import React, { Suspense } from "react";
import { GlobalStyles } from "./theme/GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import ResgisterPage from "./pages/RegisterPage/ResgisterPage";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CompanyDetailsPage from "./pages/CompanyDetails/CompanyDetailsPage";
import ScrollToTop from "./components/ScrollTop/ScrollToTop";
import ConditionsPage from "./pages/ConditionsPage/ConditionsPage";
import SingleHousePage from "./pages/SingleHousePage/SingleHousePage";
import Spinner from "./components/Spinner/Spinner";

const LazyHomepageComponent = React.lazy(() =>
  import("./pages/Homepage/Homepage")
);
const LazyRegisterComponent = React.lazy(() =>
  import("./pages/RegisterPage/ResgisterPage")
);
const LazyCompanyDetailsPageComponent = React.lazy(() =>
  import("./pages/CompanyDetails/CompanyDetailsPage")
);
const LazyConditionsPageComponent = React.lazy(() =>
  import("./pages/ConditionsPage/ConditionsPage")
);
const LazySingleHousePageComponent = React.lazy(() =>
  import("./pages/SingleHousePage/SingleHousePage")
);

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <BrowserRouter>
          <ScrollToTop />
          <GlobalStyles />
          <Navbar />
          <Routes>
            <Route path="/" element={<LazyHomepageComponent />} />
            <Route
              path="/register-user-in"
              element={<LazyRegisterComponent />}
            />
            <Route
              path="/company-details"
              element={<LazyCompanyDetailsPageComponent />}
            />
            <Route
              path="/conditions-general"
              element={<LazyConditionsPageComponent />}
            />
             <Route
              path="/spinner"
              element={<Spinner />}
            />
            <Route
              path="/homes&rooms/:id"
              element={<LazySingleHousePageComponent />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
