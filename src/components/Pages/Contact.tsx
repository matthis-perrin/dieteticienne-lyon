import React from 'react';
import styles from './Contact.module.scss';
import responsive from '../../styles/mobile.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faParking,
  faMobileAlt,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import banniere from '../../images/baniere_fruits_bleu_clair.svg';

export function Contact(): JSX.Element {
  return (
    <React.Fragment>
      <ContactWeb />
      <ContactMobile />
    </React.Fragment>
  );
}
function ContactWeb(): JSX.Element {
  return (
    <div className={`${styles.wrapper} ${responsive.web}`}>
      <Titre />
      <div className={styles.wrapper_contacts}>
        <div className={styles.wrapper_contact}></div>
        <ContactTel />
        <ContactMail />
        <div className={styles.wrapper_contact}></div>
      </div>
      <div className={styles.wrapper_acces}>
        <TitreAcces />
        <div className={styles.content}>
          <div className={styles.wrapper_access}>
            <div className={styles.wrapper_acces_lines}>
              <Adresse />
              <Parking />
            </div>
          </div>
          <div className={styles.wrapper_access}>
            <Bus />
          </div>
        </div>
      </div>
      <Banniere />
    </div>
  );
}

function ContactMobile(): JSX.Element {
  return (
    <div className={`${styles.wrapper} ${responsive.mobile}`}>
      <Titre />
      <div className={styles.wrapper_contacts}>
        <div className={styles.wrapper_contact}></div>
        <ContactTel />
        <div className={styles.space}></div>
        <ContactMail />
        <div className={styles.wrapper_contact}></div>
      </div>
      <div className={styles.wrapper_acces}>
        <TitreAcces />
        <div className={styles.content}>
          <div className={styles.wrapper_access}>
            <div className={styles.wrapper_acces_lines}>
              <Adresse />
              <ParkingMobile />
            </div>
          </div>
          <div className={styles.wrapper_access}>
            <Bus />
          </div>
        </div>
      </div>
    </div>
  );
}

function Titre(): JSX.Element {
  return (
    <div className={styles.wrapper_titre}>
      <div className={styles.titre1}>Prise de rendez-vous, conseils, renseignements</div>
      <div className={styles.titre2}>N'hésitez pas à me contacter</div>
    </div>
  );
}
function ContactTel(): JSX.Element {
  return (
    <div className={styles.wrapper_contact}>
      <div className={styles.logo_contact}>
        <FontAwesomeIcon icon={faMobileAlt} />
      </div>
      <div className={styles.text_contact}>Contactez moi</div>
      <a className={styles.contact} href="tel:+33768462405">
        07 68 46 24 05
      </a>
    </div>
  );
}

function ContactMail(): JSX.Element {
  return (
    <div className={styles.wrapper_contact}>
      <div className={styles.logo_contact}>
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <div className={styles.text_contact}>Adresse email</div>
      <a className={styles.contact} href="mailto:dieteticienne.lyon1@gmail.com">
        dieteticienne.lyon1@gmail.com
      </a>
    </div>
  );
}

function TitreAcces(): JSX.Element {
  return <div className={styles.titre_acces}>Accès au cabinet</div>;
}

function Adresse(): JSX.Element {
  return (
    <div className={styles.wrapper_acces_line}>
      <div className={styles.acces_logo}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
      </div>
      <div className={styles.acces_text}>
        <span className={styles.gras}>Parc les bureaux verts</span>
        <br />
        14A Rue Professeur Depéret
        <br />
        69160 Tassin-la-Demi-Lune
      </div>
    </div>
  );
}

function Parking(): JSX.Element {
  return (
    <div className={styles.wrapper_acces_line}>
      <div className={styles.acces_logo_parking}>
        <FontAwesomeIcon icon={faParking} />
      </div>
      <div className={styles.acces_text}>Place de parking gratuite : nom des places «CBP»</div>
    </div>
  );
}

function ParkingMobile(): JSX.Element {
  return (
    <div className={styles.wrapper_acces_line}>
      <div className={styles.acces_logo_parking}>
        <FontAwesomeIcon icon={faParking} />
      </div>
      <div className={styles.acces_text}>
        Place de parking gratuite <br />
        nom des places «CBP»
      </div>
    </div>
  );
}

function Bus(): JSX.Element {
  return (
    <div className={styles.wrapper_acces_lines}>
      <div className={styles.wrapper_acces_line}>
        <div className={styles.wrapper_ligne_bus}>
          <div className={styles.type_ligne}>BUS</div>
          <div className={styles.numero_ligne}>72</div>
        </div>
        <div className={styles.acces_text}>Arrêt Tassin Depéret (3min à pied)</div>
      </div>
      <div className={styles.wrapper_acces_line}>
        <div className={styles.wrapper_ligne_bus}>
          <div className={styles.type_ligne_C}>C</div>
          <div className={styles.numero_ligne_C}>24</div>
        </div>
        <div className={styles.acces_text}>Arrêt Rond-point d'Alaï (10min à pied)</div>
      </div>
      <div className={styles.wrapper_acces_line}>
        <div className={styles.wrapper_ligne_bus}>
          <div className={styles.type_ligne_C}>C</div>
          <div className={styles.numero_ligne_C}>21</div>
        </div>
        <div className={styles.acces_text}>Arrêt De Gaulle-Pont SNCF (12min à pied)</div>
      </div>
      <div className={styles.wrapper_acces_line}>
        <div className={styles.wrapper_ligne_bus}>
          <div className={styles.type_ligne}>BUS</div>
          <div className={styles.numero_ligne}>5</div>
        </div>
        <div className={styles.acces_text}>Arrêt Tassin Depéret (3min à pied)</div>
      </div>
    </div>
  );
}

function Banniere(): JSX.Element {
  return (
    <div className={styles.banniere}>
      <img src={banniere} />
    </div>
  );
}
