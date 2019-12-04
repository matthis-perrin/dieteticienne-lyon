import React from 'react';
import styles from './Accueil.module.sass';
import r_grassigli from '../../images/r_grassigli_2.png';
import banniere from '../../images/baniere_fruits_bleu_clair_2.svg';
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
          <div className={styles.content}>
            <div className={styles.name}>
              Raphaelle <br />
              Grassigli
            </div>
            <div className={styles.img}>
              <img src={r_grassigli} />
            </div>
          </div>
          <div className={styles.text}>
            {/* LE TEXTE */}
            <div>
              {/* <span className={styles.gras}>LE TEXTE EN GRAS</span> */}
              <span className={styles.gras}>
                Vous souhaiter perdre du poids, prévenir les maladies cardio-vasculaire, réguler
                votre glycémie en cas de diabète. Vous êtes intolérant au gluten, au lactose, vous
                êtes souvent "balloné", vous souffrez de maladie chronique de l'intestin. Ou bien,
                tout simplement vous souhaitez une aide pour gérer vos repas au mieux, tout en vous
                faisant plaisir.
              </span>
              <br />
              <br />
              Je serai la pour avancer avec vous en vue d'un plus grand
              <span className={styles.color}> équilibre de vie,</span> afin d'accéder au
              <span className={styles.color}> bien-être</span> et à un état de
              <span className={styles.color}> pleine santé.</span> A votre écoute, je vous
              proposerai des solutions adaptées à votre mode de vie, votre état de santé, vos
              préférences… <span className={styles.gras_color}> sans frustration!</span>
              <br />
              <br />
              <span className={styles.color}>L’alimentation</span> étant reconnue facteur
              <span className={styles.color}> essentiel </span>
              de la <span className={styles.color}>santé</span> et du
              <span className={styles.color}> bien être</span>, j'ai voulu en comprendre les
              mécanismes physiologiques. Après un BTS diététique, j’ai approfondi mes connaissances
              avec une licence en diététique puis un master 1 en santé publique.
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
