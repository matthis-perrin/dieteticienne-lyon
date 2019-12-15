import React from 'react';
import styles from './Methode.module.scss';
import responsive from '../../styles/mobile.module.scss';
import image1 from '../../images/icone_entretien.svg';
import image2 from '../../images/icone_domicile.svg';
import image3 from '../../images/icone_skype.svg';

export function Methode(): JSX.Element {
  return (
    <React.Fragment>
      <MethodeWeb />
      <MethodeMobile />
    </React.Fragment>
  );
}
function MethodeWeb(): JSX.Element {
  return (
    <div className={`${styles.wrapper} ${responsive.web}`}>
      <Introduction />
      <Titre1 />
      <Texte1 />
      <Titre2 />
      <Texte2 />
      <div className={styles.space}></div>
      <Paragraphe1 />
      <div className={styles.space_2}></div>
      <Paragraphe2 />
      <div className={styles.space_2}></div>
      <Paragraphe3 />
    </div>
  );
}

function MethodeMobile(): JSX.Element {
  return (
    <div className={`${styles.wrapper} ${responsive.mobile}`}>
      <Introduction />
      <Titre1 />
      <Texte1 />
      <Titre2 />
      <Texte2 />
      <div className={styles.space}></div>
      <Paragraphe1 />
      <div className={styles.space_2}></div>
      <Paragraphe2 />
      <div className={styles.space_2}></div>
      <Paragraphe3 />
    </div>
  );
}

function Introduction(): JSX.Element {
  return (
    <div className={styles.intro}>
      Ma prise en charge diététique se séquence généralement en plusieurs séances.
    </div>
  );
}

function Titre1(): JSX.Element {
  return <div className={styles.titre}>Consultation initiale</div>;
}

function Texte1(): JSX.Element {
  return (
    <div className={styles.text}>
      La première consultation consiste à réaliser
      <span className={styles.color}> un bilan alimentaire et nutritionnel.</span> Elle dure environ
      une heure. Lors de ce premier rendez-vous, nous ferons ensemble le point sur
      <span className={styles.color}>
        {' '}
        vos pathologies, votre mode de vie, vos habitudes alimentaires, vos objectifs...
      </span>
      <br />A la suite de cette discusion, je vous proposerai{' '}
      <span className={styles.color}>
        {' '}
        une alimentation équilibrée répondant à vos attentes,
      </span>{' '}
      en prenant en compte l’ensemble des paramètres définis en première partie de rendez-vous. Je
      vous transmettrai <span className={styles.color}> des fiches conseils,</span> et{' '}
      <span className={styles.color}> un carnet alimentaire</span> à me remettre lors de la
      prochaine consultation. Enfin je répondrai à l’ensemble de vos éventuelles interrogations .
    </div>
  );
}

function Titre2(): JSX.Element {
  return <div className={styles.titre}>Consultations de suivi</div>;
}

function Texte2(): JSX.Element {
  return (
    <div className={styles.text}>
      Les consulations suivantes seront espacées entre 15 et 20 jours. Elles durent en moyenne 30 à
      40min. C’est à ce moment que nous pourrons{' '}
      <span className={styles.color}> faire le point</span> sur votre prise en charge et{' '}
      <span className={styles.color}> réadapter l’alimentation</span> si besoin. Il m’est également
      indispensable de connnaitre <span className={styles.color}> votre ressenti</span> pour{' '}
      <span className={styles.color}> garantir l’atteinte des objectifs</span> que nous nous serons
      fixés.{' '}
      <span className={styles.gras}>
        {' '}
        Vous êtes unique et votre prise en charge se doit de l’être également!
      </span>
    </div>
  );
}

function Paragraphe1(): JSX.Element {
  return (
    <div className={styles.wrapper_methode}>
      <div className={styles.wrapper_text}>
        <div className={styles.titre_text}>Au cabinet</div>Je vous acceuille dans mon cabinet
        <span className={styles.color}> situé à Tassin-la-demie-Lune</span>, au coeur du Parc les
        bureaux verts. C’est dans ce cabinet que nous réaliserons ensembles les différentes séances.
        Le contact humain permet de{' '}
        <span className={styles.color}> renforcer le sentiment de soutien et d’accompagnement</span>{' '}
        que je peux vous offrir. Je reste joignable par mail ou par téléphone si vous avez des
        questions entre chaque consultation.
      </div>
      <div className={styles.image}>
        <img src={image1} />
      </div>
    </div>
  );
}

function Paragraphe2(): JSX.Element {
  return (
    <div className={styles.wrapper_methode}>
      <div className={styles.image}>
        <img src={image2} />
      </div>
      <div className={styles.wrapper_text}>
        <div className={styles.titre_text}>À domicile</div>Je peux{' '}
        <span className={styles.color}> me déplacer chez vous</span> aussi bien pour la consultation
        initiale que pour les consultations de suivi. L'interet de venir à domicile est que nous
        pourrons ensemble{' '}
        <span className={styles.color}>
          {' '}
          faire le point sur les aliments que vous avez dans vos placards...
        </span>{' '}
        et ne vous inquiétez pas ! Je ne suis pas là pour vous juger, mais pour vous informer. Je
        vous propose également de{' '}
        <span className={styles.color}> décrypter les étiquettes alimentaires,</span> de
        <span className={styles.color}> réaliser des recettes</span> qui vous soient adaptées, de
        même que <span className={styles.color}> faire les courses ensemble.</span>
      </div>
    </div>
  );
}

function Paragraphe3(): JSX.Element {
  return (
    <div className={styles.wrapper_methode}>
      <div className={styles.wrapper_text}>
        <div className={styles.titre_text}>À distance</div>
        <span className={styles.color}> Pratique et économique,</span> les consulations à distance
        (skype, téléphone, ect.) sont similaire au consultation au cabinet. Je vous envoie{' '}
        <span className={styles.color}> un questionnaire détaillé pour préparer l’entretien.</span>{' '}
        Il est important de prendre son temps pour répondre au mieux à chaque question, c’est ainsi
        que je pourrai mieux connaître :
        <span className={styles.color}> vos habitudes alimentaires,</span> vos antécédents médicaux,
        vos objectifs... je pourrai alors vous proposer{' '}
        <span className={styles.color}> une solution adaptée.</span>{' '}
        <span className={styles.gras}>
          {' '}
          N’oubliez pas de me renvoyer le questionnaire par mail !
        </span>
      </div>
      <div className={styles.image}>
        <img src={image3} />
      </div>
    </div>
  );
}
