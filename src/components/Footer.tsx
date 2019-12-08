import React from 'react';
import responsive from '../styles/mobile.module.scss';
import styles from './Footer.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faMobileAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo_pomme_bleu_10px.svg';

export function Footer(): JSX.Element {
  return (
    <React.Fragment>
      <FooterWeb />
      <FooterMobile />
    </React.Fragment>
  );
}

function FooterWeb(): JSX.Element {
  return (
    <div className={`${styles.wrapper} ${responsive.web}`}>
      <div className={styles.wrapper_contact}>
        <Adresse />
        <div className={styles.wrapper_logo}>
          <Logo />
          <CopyRight />
        </div>
        <div className={styles.contact}>
          <Tel />
          <Mail />
        </div>
      </div>
    </div>
  );
}
function FooterMobile(): JSX.Element {
  return (
    <div className={`${styles.wrapper} ${responsive.mobile}`}>
      <div className={styles.wrapper_contact}>
        <div className={styles.contact}>
          <Adresse />
          <Tel />
          <Mail />
        </div>
        <Logo />
      </div>
      <CopyRight />
    </div>
  );
}

export function Adresse(): JSX.Element {
  return (
    <div className={styles.wrapper_localisation}>
      <div className={styles.logo_localisation}>
        <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
      </div>
      <div className={styles.wrapper_adresse}>
        <div className={styles.adresse}>14A Rue Professeur Depéret</div>
        <div className={styles.ville}>69160 Tassin-la-Demi-Lune</div>
      </div>
    </div>
  );
}

export function Logo(): JSX.Element {
  return (
    <div className={styles.logo}>
      <img src={logo} />
    </div>
  );
}

export function Tel(): JSX.Element {
  return (
    <div className={styles.wrapper_tel}>
      <div className={styles.logo_tel}>
        <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} />
      </div>
      <a className={styles.num} href="tel:+33768462405">
        07 68 46 24 05
      </a>
    </div>
  );
}

export function Mail(): JSX.Element {
  return (
    <div className={styles.wrapper_mail}>
      <div className={styles.logo_mail}>
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
      </div>
      <div className={styles.mail}>dieteticienne.lyon1@gmail.com</div>
    </div>
  );
}

export function CopyRight(): JSX.Element {
  return <div className={styles.copyright}>Raphaelle Grassigli 2019 © Tous droits réservés</div>;
}
