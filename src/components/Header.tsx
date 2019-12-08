import React from 'react';
import styles from './Header.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMobileAlt} from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo_pomme_15px.svg';
import {Link} from 'react-router-dom';

interface Props {}

interface State {}

export class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.wrapper_name}>
          <div className={styles.name}>Raphaelle</div>
          <div className={styles.surname}>Grassigli</div>
        </div>
        <Link to="/" className={styles.title}>
          <div className={styles.job}>
            Diététicienne
            <br /> Nutritionniste
          </div>
          <div className={styles.logo_pomme}>
            <img src={logo} />
          </div>
        </Link>
        <div className={styles.contact}>
          <div className={styles.logo_tel}>
            <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} />
          </div>
          <div className={styles.number}>07 68 46 24 05</div>
        </div>
      </div>
    );
  }
}
