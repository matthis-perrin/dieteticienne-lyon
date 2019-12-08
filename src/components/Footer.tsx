import React from 'react';
import styles from './Footer.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faMobileAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo_pomme_bleu_10px.svg';

interface Props {}

interface State {}

export class Footer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.wrapper_contact}>
          <div className={styles.wrapper_localisation}>
            <div className={styles.logo_localisation}>
              <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
            </div>
            <div className={styles.wrapper_adresse}>
              <div className={styles.adresse}>14A Rue Professeur Depéret</div>
              <div className={styles.ville}>69160 Tassin-la-Demi-Lune</div>
            </div>
          </div>
          <div className={styles.logo}>
            <img src={logo} />
          </div>
          <div className={styles.contact}>
            <div className={styles.wrapper_tel}>
              <div className={styles.logo_tel}>
                <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} />
              </div>
              <div className={styles.num}>07 68 46 24 05</div>
            </div>
            <div className={styles.wrapper_mail}>
              <div className={styles.logo_mail}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
              </div>
              <div className={styles.mail}>dieteticienne.lyon1@gmail.com</div>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>Raphaelle Grassigli 2019 © Tous droits réservés</div>
      </div>
    );
  }
}
