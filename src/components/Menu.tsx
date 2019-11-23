import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Menu.module.sass';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';

interface Props {}

interface State {}

export class Menu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Link to="/" className={styles.icon}>
          <FontAwesomeIcon icon={faHome} className={styles.icon} />
        </Link>
        <Link to="/Méthode" className={styles.text}>
          Méthode
        </Link>
        <Link to="/Actualité" className={styles.text}>
          Actualité
        </Link>
        <Link to="/Tarifs" className={styles.text}>
          Tarifs
        </Link>
        <Link to="/Contact" className={styles.text}>
          Contact
        </Link>
      </div>
    );
  }
}
