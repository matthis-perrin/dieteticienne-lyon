import React, {useState} from 'react';
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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleButtonClick(): void {
    setIsOpen(true);
  }

  function handleClose(): void {
    setIsOpen(false);
  }

  const title2 = 'Test!';

  return (
    <div className={`${styles.wrapper} ${responsive.mobile}`}>
      <Test title="Hello" title2={title2} />
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

interface TestProps {
  title: string;
  title2: string;
}

function Test(props: TestProps): JSX.Element {
  return (
    <span>
      <div>{props.title}</div>
      <div>{props.title2}</div>
    </span>
  );
}

function HamburgerSideMenu(props: HamburgerSideMenuProps): JSX.Element {
  const className = props.isOpen
    ? `${styles.side_menu} ${styles.side_menu_open}`
    : `${styles.side_menu} ${styles.side_menu_close}`;
  return (
    <div className={className}>
      <div onClick={props.onClose}>CLOSE !!!</div>
      <div>Merde 1</div>
      <div>Merde 2</div>
      <div>Merde 3</div>
      <div>Merde 4</div>
      <div>Merde 5</div>
      <div>Merde 6</div>
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
