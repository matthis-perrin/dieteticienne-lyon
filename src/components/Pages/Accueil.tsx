import React from 'react';
import styles from './Accueil.module.scss';
import responsive from '../../styles/mobile.module.scss';
import r_grassigli from '../../images/r_grassigli.png';
import banniere from '../../images/baniere_fruits_bleu_fonce.svg';
import {Link} from 'react-router-dom';

export function Accueil(): JSX.Element {
  return (
    <React.Fragment>
      <AccueilWeb />
      <AccueilMobile />
    </React.Fragment>
  );
}

function AccueilWeb(): JSX.Element {
  return (
    <div className={`${styles.wrapper} ${responsive.web}`}>
      <div className={styles.header}>
        <Photo />
        <div className={styles.wrapper_text}>
          <div>
            <Introduction />
            <br />
            <br />
            <Texte />
          </div>
          <Button />
        </div>
      </div>
      <Banniere />
      <Citation />
    </div>
  );
}

function AccueilMobile(): JSX.Element {
  return (
    <div className={`${styles.wrapper} ${responsive.mobile}`}>
      <Introduction />
      <Banniere />
      <Texte />
      <Button />
      <Citation />
    </div>
  );
}

function Introduction(): JSX.Element {
  return (
    <div className={styles.text}>
      <span className={styles.gras}>
        Vous souhaitez perdre du poids, prévenir les maladies cardio-vasculaires, réguler votre
        glycémie en cas de diabète. Vous êtes intolérant au gluten, au lactose, vous êtes souvent
        "balloné", vous souffrez de maladie chronique de l'intestin. Ou bien, tout simplement vous
        souhaitez une aide pour gérer vos repas au mieux, tout en vous faisant plaisir.
      </span>
    </div>
  );
}

function Texte(): JSX.Element {
  return (
    <div className={styles.text}>
      Je serai la pour avancer avec vous en vue d'un plus grand
      <span className={styles.color}> équilibre de vie,</span> afin d'accéder au
      <span className={styles.color}> bien-être</span> et à un état de
      <span className={styles.color}> pleine santé.</span> A votre écoute, je vous proposerai des
      solutions adaptées à votre mode de vie, votre état de santé, vos préférences…{' '}
      <span className={styles.gras_color}> sans frustration!</span>
      <br />
      <br />
      <span className={styles.color}>L’alimentation</span> étant reconnue facteur
      <span className={styles.color}> essentiel </span>
      de la <span className={styles.color}>santé</span> et du
      <span className={styles.color}> bien être</span>, j'ai voulu en comprendre les mécanismes
      physiologiques. Après un BTS diététique, j’ai approfondi mes connaissances avec une licence en
      diététique puis un master 1 en santé publique.
      <br />
      <br />
      <span className={styles.gras_color}>Au cabinet, à domicile ou à distance, </span>je vous aide
      à atteindre vos objectifs, en prenant compte vos envies, vos goûts, vos sensations
      alimentaires.
    </div>
  );
}

function Button(): JSX.Element {
  return (
    <Link to="/Contact" className={styles.wrapper_button}>
      <div className={styles.button}>Prendre rendez-vous</div>
    </Link>
  );
}

function Banniere(): JSX.Element {
  return (
    <React.Fragment>
      <div className={styles.banniere}>
        <img src={banniere} />
      </div>
    </React.Fragment>
  );
}

function Citation(): JSX.Element {
  return (
    <React.Fragment>
      <div className={styles.footer1}>
        &laquo;Dieu a fait l'aliment ; le diable, l'assaisonnement.&raquo;
      </div>
      <div className={styles.footer2}>—James Joyce, Ulysse </div>
    </React.Fragment>
  );
}

function Photo(): JSX.Element {
  return (
    <div className={styles.content}>
      <div className={`${styles.name} ${responsive.web}`}>
        Raphaelle <br />
        Grassigli
      </div>
      <div className={styles.img}>
        <img src={r_grassigli} />
      </div>
      <div className={styles.spacer_button}>
        <Button />
      </div>
    </div>
  );
}
