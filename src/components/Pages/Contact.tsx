import React from 'react';
import styles from './Contact.module.sass';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faParking,
  faMobileAlt,
  faEnvelope,
  faCar,
  faBus,
} from '@fortawesome/free-solid-svg-icons';
import banniere from '../../images/baniere_fruits_bleu_clair_2.svg';

interface Props {}

interface State {}

export class Contact extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.wrapper_titre}>
          <div className={styles.titre1}>Prise de rendez-vous, conseils, renseignements</div>
          <div className={styles.titre2}>N'hésitez pas à me contacter</div>
        </div>
        <div className={styles.wrapper_contacts}>
          <div className={styles.wrapper_contact}></div>
          <div className={styles.wrapper_contact}>
            <div className={styles.logo_contact}>
              <FontAwesomeIcon icon={faMobileAlt} />
            </div>
            <div className={styles.text_contact}>Contactez moi</div>
            <div className={styles.contact}>07 68 46 24 05</div>
          </div>
          <div className={styles.wrapper_contact}>
            <div className={styles.logo_contact}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className={styles.text_contact}>Adresse email</div>
            <div className={styles.contact}>dieteticienne.lyon1@gmail.com</div>
          </div>
          <div className={styles.wrapper_contact}></div>
        </div>
        <div className={styles.wrapper_acces}>
          <div className={styles.titre_acces}>Accès au cabinet</div>
          <div className={styles.content}>
            <div className={styles.wrapper_access}>
              <div className={styles.wrapper_acces_lines}>
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
                <div className={styles.wrapper_acces_line}>
                  <div className={styles.acces_logo_parking}>
                    <FontAwesomeIcon icon={faParking} />
                  </div>
                  <div className={styles.acces_text}>
                    Place de parking gratuite : nom des places «CBP»
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.wrapper_access}>
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
            </div>
          </div>
        </div>
        <div className={styles.banniere}>
          <img src={banniere} />
        </div>
      </div>
    );
  }
}
