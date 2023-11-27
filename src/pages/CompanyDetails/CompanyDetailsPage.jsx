import React from "react";
import { CompanyDetailsStyles } from "./CompanyDetails";
import { useTranslation } from "react-i18next";
import { Helmet, HelmetProvider } from "react-helmet-async";

const CompanyDetailsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta />
          <title>Lodge Company Details</title>
        </Helmet>
        <CompanyDetailsStyles>
          <div className="companybox">
            <h2 className="companyboxheading">{t("legalnotice")}</h2>
          </div>
          <div>
            <span className="companyboxtext">
              The sites www.lodgeme.com and lodgeme.fr are operated by LODGE ME
            </span>
          </div>
          <div>
            <span className="companyboxtext">Entity : &nbsp; LODGE ME SAS</span>
          </div>
          <div>
            <span className="companyboxtext">
              Head office address : &nbsp; 6 rue d’Armaillé 75017 Paris
            </span>
          </div>
          <div>
            <span className="companyboxtext">
              Registration number : &nbsp; 903 952 364 00052
            </span>
          </div>
          <div>
            <span className="companyboxtext">
              Telephone number&nbsp; : &nbsp; NIL
            </span>
          </div>
          <div>
            <span className="companyboxtext">
              VAT number&nbsp; : &nbsp; FR71903952364{" "}
            </span>
          </div>
          <div>
            {/* <span className="companyboxtext" style={{ textAlign: "center" }}>
            Customer service contacts &nbsp;
          </span> */}
            <ul>
              <li className="companyboxlist">
                &#8594; Customer service &nbsp; : &nbsp;
                <a
                  className="linkStyle companylinks"
                  href="mailto:hello@lodgeme.fr"
                >
                  hello@lodgeme.fr
                </a>
              </li>
              <li className="companyboxlist">
                &#8594; Billing department &nbsp; : &nbsp;
                <a
                  className="linkStyle companylinks"
                  href="mailto:billing@lodgeme.fr"
                >
                  billing@lodgeme.fr
                </a>
              </li>
              <li className="companyboxlist">
                &#8594; Support service &nbsp; : &nbsp;
                <a
                  className="linkStyle companylinks"
                  href="mailto:support@lodgeme.fr"
                >
                  support@lodgeme.fr
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="companyboxtext">
              Server hosting : &nbsp; OVH Groupe SA
            </span>
          </div>
          <div>
            <span className="companyboxtext">
              Head Office Address : &nbsp; 2 rue Kellermann, 59100 Roubaix
            </span>
          </div>
          <div>
            <span className="companyboxtext">
              Registration number &nbsp;: &nbsp; 537 407 926
            </span>
          </div>
          <div>
            <span className="companyboxtext">
              Telephone number &nbsp;: &nbsp;
            </span>
            <a href="tel:08 203 203 63" className="linkStyle companylinks">
              08 203 203 63
            </a>
          </div>

          <div>
            <span className="companyboxtext">Website&nbsp; : &nbsp; </span>
            <a
              className="linkStyle companylinks"
              href="https://www.ovh.com"
              target="_blank"
            >
              www.ovh.com
            </a>
          </div>
        </CompanyDetailsStyles>
      </HelmetProvider>
    </>
  );
};

export default CompanyDetailsPage;

/**
 * 
 Legal Notice
The sites www.lodgeme.com and lodgeme.fr are operated by LODGE ME.
Entity: LODGE ME SAS Head office address: 6 rue d’Armaillé 75017 Paris Registration number: 903 952 364 00052
Telephone number: NIL VAT number: FR71903952364
Customer service contacts:
• Customer service: hello@lodgeme.fr
• Billing department: billing@lodgeme.fr
• Support service: support@lodgeme.fr
Server hosting: OVH Groupe SA
Head office address: 2 rue Kellermann, 59100 Roubaix
Registration number: 537 407 926
Telephone number: 08 203 203 63
Website: www.ovh.com

*******************************************
 Mentions légales
Les sites www.lodgeme.com et lodgeme.fr sont exploités par LODGE ME.
Entité : LODGE ME SAS Adresse du siège social : 6 rue d’Armaillé 75017 Paris Numéro d’immatriculation : 903 952 364 00052
Numéro de téléphone : NEANT Numéro de TVA : FR71903952364
Contacts pour le service clientèle :
• Service client : hello@lodgeme.fr
• Service facturation : billing@lodgeme.fr
• Service assistance : support@lodgeme.fr
Hébergement du serveur : OVH Groupe SA
Adresse du siège social : 2 rue Kellermann, 59100 Roubaix
Numéro d’immatriculation : 537 407 926
Numéro de téléphone : 08 203 203 63
Site Internet : www.ovh.com
 */
