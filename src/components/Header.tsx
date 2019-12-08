import React from 'react';
import styles from './Header.module.scss';
import responsive from '../styles/mobile.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMobileAlt, faBars} from '@fortawesome/free-solid-svg-icons';
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
      <HamburgerButton />
      <ProfessionSeul />
      <LogoSeul />
    </div>
  );
}

function HamburgerButton(): JSX.Element {
  return (
    <div className={styles.logo_hamburger}>
      <FontAwesomeIcon icon={faBars} className={styles.icon} />
    </div>
  );
}

export function Name(): JSX.Element {
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

function ProfessionSeul(): JSX.Element {
  return (
    <Link to="/" className={styles.title}>
      <div className={styles.job}>
        Diététicienne
        <br /> Nutritionniste
      </div>
    </Link>
  );
}

function LogoSeul(): JSX.Element {
  return (
    <Link to="/" className={styles.title}>
      <div className={styles.logo_pomme}>
        <img src={logo} />
      </div>
    </Link>
  );
}

export function Contact(): JSX.Element {
  return (
    <div className={styles.contact}>
      <div className={styles.logo_tel}>
        <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} />
      </div>
      <a className={styles.number} href="tel:+33768462405">
        07 68 46 24 05
      </a>
    </div>
  );
}
