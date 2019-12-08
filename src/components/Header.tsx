import React from 'react';
import styles from './Header.module.scss';
import responsive from '../styles/mobile.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo_pomme_15px.svg';
import {Link} from 'react-router-dom';

export function Header(): JSX.Element {
  return (
    <React.Fragment>
      <HeaderWeb />
      <HeaderMobile />
    </React.Fragment>
  );
}

function HeaderWeb(): JSX.Element {
  return (
    <div className={`${styles.wrapper} ${responsive.web}`}>
      <Name />
      <Profession />
      <Contact />
    </div>
  );
}

function HeaderMobile(): JSX.Element {
  return (
    <div className={`${styles.wrapper} ${responsive.mobile}`}>
      <Profession />
      <div>
        <Name />
        <Contact />
      </div>
    </div>
  );
}

function Name(): JSX.Element {
  return (
    <div className={styles.wrapper_name}>
      <div className={styles.name}>Raphaelle</div>
      <div className={styles.surname}>Grassigli</div>
    </div>
  );
}

function Profession(): JSX.Element {
  return (
    <Link to="/" className={styles.title}>
      <div className={styles.job}>
        Diététicienne
        <br /> Nutritionniste
      </div>
      <div className={styles.logo_pomme}>
        <img src={logo} />
      </div>
    </Link>
  );
}

function Contact(): JSX.Element {
  return (
    <div className={styles.contact}>
      <div className={styles.logo_tel}>
        <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} />
      </div>
      <div className={styles.number}>07 68 46 24 05</div>
    </div>
  );
}
