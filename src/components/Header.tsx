import React, {useState} from 'react';
import styles from './Header.module.scss';
import responsive from '../styles/mobile.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMobileAlt, faBars} from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo_pomme_15px.svg';
import {Link} from 'react-router-dom';
import {MenuLink} from './Menu';
import {
  methodeRoute,
  accueilRoute,
  documentationsRoute,
  tarifsRoute,
  contactRoute,
} from '../routes';

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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleButtonClick(): void {
    setIsOpen(true);
  }

  function handleClose(): void {
    setIsOpen(false);
  }

  return (
    <div className={`${styles.wrapper} ${responsive.mobile}`}>
      <HamburgerButton onClick={handleButtonClick} />
      <HamburgerSideMenu isOpen={isOpen} onClose={handleClose} />
      <ProfessionSeul />
      <LogoSeul />
    </div>
  );
}

interface HamburgerButtonProps {
  onClick: () => void;
}

function HamburgerButton(props: HamburgerButtonProps): JSX.Element {
  return (
    <div className={styles.logo_hamburger} onClick={props.onClick}>
      <FontAwesomeIcon icon={faBars} className={styles.icon} />
    </div>
  );
}

interface HamburgerSideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function HamburgerSideMenu(props: HamburgerSideMenuProps): JSX.Element {
  const className = props.isOpen
    ? `${styles.side_menu} ${styles.side_menu_open}`
    : `${styles.side_menu} ${styles.side_menu_close}`;
  const classNameHidden = props.isOpen
    ? `${styles.side_menu_hidden} ${styles.side_menu_open_hidden}`
    : `${styles.side_menu_hidden} ${styles.side_menu_close_hidden}`;
  return (
    <React.Fragment>
      <div className={className}>
        <div className={styles.logo_pomme} onClick={props.onClose}>
          <img src={logo} />
        </div>
        <MenuLink
          destination={accueilRoute}
          className={styles.menu}
          selectedClassName={styles.menu_selected}
          content="Accueil"
          onClick={props.onClose}
        />
        <MenuLink
          destination={methodeRoute}
          className={styles.menu}
          selectedClassName={styles.menu_selected}
          content="Méthode"
          onClick={props.onClose}
        />
        <MenuLink
          destination={documentationsRoute}
          className={styles.menu}
          selectedClassName={styles.menu_selected}
          content="Documentations"
          onClick={props.onClose}
        />
        <MenuLink
          destination={tarifsRoute}
          className={styles.menu}
          selectedClassName={styles.menu_selected}
          content="Tarifs"
          onClick={props.onClose}
        />
        <MenuLink
          destination={contactRoute}
          className={styles.menu}
          selectedClassName={styles.menu_selected}
          content="Contact"
          onClick={props.onClose}
        />
        <div onClick={props.onClose} className={styles.menu_close}>
          <Contact />
        </div>
      </div>
      <div className={classNameHidden} onClick={props.onClose}></div>
    </React.Fragment>
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
