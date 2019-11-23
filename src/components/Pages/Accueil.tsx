import React from 'react';
import styles from './Accueil.module.sass';
import r_grassigli from '../../images/r_grassigli.png';
import banniere from '../../images/baniere_fruits_bleu_clair.svg';
import {Link} from 'react-router-dom';

interface Props {}

interface State {}

export class Accueil extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.name}>Raphaelle Grassigli</div>
        </div>
        <div className={styles.content}>
          <div className={styles.img}>
            <img src={r_grassigli} />
          </div>
          <div className={styles.text}>
            {/* LE TEXTE */}
            <div>
              {/* <span className={styles.gras}>LE TEXTE EN GRAS</span> */}
              Après mon BTS diététique, j’ai approfondi mes connaissances avec une licence en
              diététique puis un master 1 en santé publique.
              <br />
              <br />
              A votre écoute, je vous proposerais des solutions adaptées à votre mode de vie, votre
              état de santé, vos préférences… sans frustration!
              <br />
              <br />
              Vous souhaiter perdre du poids, prévenir les maladies cardio-vasculaire, réguler votre
              glycémie en cas de diabète. Vous êtes intolérant au gluten, au lactose, vous êtes
              souvent "balloné", vous souffrez de maladie chronique de l'intestint,vous ne savez pas
              comment gérer vos repas.
              <br />
              <br />
              Je serai la pour avancer avec vous vers un équilibre de vie, accéder au bien-être et à
              un état de pleine santé
              <br />
              <br />
              <span className={styles.gras_color}>L’alimentation</span> étant reconnue facteur{' '}
              <span className={styles.gras_color}>essentiel </span>
              de la <span className={styles.gras_color}>santé</span> et du{' '}
              <span className={styles.gras_color}>bien être</span>, j'ai voulu en comprendre les
              mécanismes physiologiques.
              {/* <br /> retour à la ligne*/}
              <br />
              <br />
              C’est cet approche qui permet d'<span className={styles.gras_color}>
                équilibrer
              </span>{' '}
              une alimentation en fonction de besoins spécifiques.
              <br />
              <br />
              <span className={styles.gras_color}>Au cabinet, à domicile ou sur skype, </span>je
              vous aide à atteindre vos objectifs, en prenant compte vos envies, vos goûts, vos
              sensations alimentaires.
            </div>
            {/* FIN DU TEXTE */}
          </div>
        </div>
        <Link to="/Contact" className={styles.wrapper_button}>
          <div className={styles.button}>Prendre rendez-vous</div>
        </Link>
        <div className={styles.banniere}>
          <img src={banniere} />
        </div>
        <div className={styles.footer1}>
          &laquo;Dieu a fait l'aliment ; le diable, l'assaisonnement.&raquo;
        </div>
        <div className={styles.footer2}>—James Joyce, Ulysse </div>
      </div>
    );
  }
}
