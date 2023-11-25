import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { RegisterPageStyles } from "./RegisterPageStyles";

const ResgisterPage = () => {
  const [step, setStep] = useState(1);

  return (
    <>
      <RegisterPageStyles>
        <div className="register_box">
          <div>
            <h2 className="register_title">Connexion ou inscription</h2>
          </div>
          <div>
            <hr />
          </div>
          <div>
            <h2 className="register_title">Créer votre compte partenaire</h2>
            <span className="register_account_sub">
              Créez un compte pour inscrire et gérer votre établissement.
            </span>
          </div>
          <div>
            <input
              type="text"
              className="register_emailinput"
              placeholder="Votre email"
              required
            />
          </div>
          <div className="btn">
            <button className="register_btn">CONTINUER</button>
          </div>
          <div>
            <span className="register_account_sub">
              Vous avez déjà un compte? Se connecter
            </span>
          </div>
          <div>
            <button className="register_loginbtn">Se connecter</button>
          </div>
        </div>
      </RegisterPageStyles>
    </>
  );
};

export default ResgisterPage;
