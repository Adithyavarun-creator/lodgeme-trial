import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { RegisterPageStyles } from "./RegisterPageStyles";
import { useTranslation } from "react-i18next";
import { Helmet, HelmetProvider } from "react-helmet-async";
import RegiserForm1 from "../../components/Register/RegiserForm1";
import RegisterForm2 from "../../components/Register/RegisterForm2";

const ResgisterPage = () => {
  const [step, setStep] = useState(2);

  const { t } = useTranslation();

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>{t("register")} | LodgeMe</title>
        </Helmet>

        {step === 1 && <RegiserForm1 step={step} setStep={setStep} />}
        {step === 2 && <RegisterForm2 step={step} setStep={setStep} />}
      </HelmetProvider>
    </>
  );
};

export default ResgisterPage;
