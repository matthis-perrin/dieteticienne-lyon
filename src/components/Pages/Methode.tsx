import React from 'react';
import styles from './Methode.module.scss';
import image1 from '../../images/icone_entretien.svg';
import image2 from '../../images/icone_domicile.svg';
import image3 from '../../images/icone_skype.svg';

interface Props {}

interface State {}

export class Methode extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.intro}>
          Ma prise en charge diététique se séquence généralement en plusieurs scéances.
        </div>
        <div className={styles.titre}>Consultations initiale</div>
        <div className={styles.text}>
          La première consultation consiste à réaliser
          <span className={styles.color}> un bilan alimentaire et nutritionnel.</span> Elle dure
          environ une heure. Lors de ce premier rendez-vous, nous ferons ensemble le point sur
          <span className={styles.color}>
            {' '}
            vos pathologies, votre mode de vie, vos habitudes alimentaires, vos objectifs...
          </span>
          <br />A la suite de cette discusion, je vous proposerai{' '}
          <span className={styles.color}>
            {' '}
            une alimentation équilibrée répondant à vos attentes,
          </span>{' '}
          en prenant en compte l’ensemble des paramètres définis en première partie de rendez-vous.
          Je vous transmettrai <span className={styles.color}> des fiches conseils,</span> et{' '}
          <span className={styles.color}> un carnet alimentaire</span> à me remettre lors de la
          prochaine consultation. Enfin je réponderai à l’ensemble de vos éventuelles interrogations
          .
        </div>
        <div className={styles.titre}>Consultations suivi</div>
        <div className={styles.text}>
          Les consulations suivantes seront espacées entre 15 et 20 jours. Elles durent en moyenne
          30 à 40min. C’est à ce moment que nous pourrons{' '}
          <span className={styles.color}> faire le point</span> sur votre prise en charge et{' '}
          <span className={styles.color}> réadapter l’alimentation</span> si besoins. Il m’est
          également indispensable de connnaitre{' '}
          <span className={styles.color}> votre ressenti</span> pour{' '}
          <span className={styles.color}> garantir l’atteinte des objectifs</span> que nous nous
          serons fixé.{' '}
          <span className={styles.gras}>
            {' '}
            Vous êtes unique et votre prise en charge se doit de l’être également!
          </span>
        </div>
        <div className={styles.space}></div>
        <div className={styles.wrapper_methode}>
          <div className={styles.wrapper_text}>
            <div className={styles.titre_text}>Au cabinet</div>Je vous acceuille dans mon cabinet
            <span className={styles.color}> situé à Tassin-la-demie-Lune</span>, au coeur du Parc
            les bureaux verts. C’est dans ce cabinet que nous réaliserons ensembles les différentes
            séances. Le contact humain permet de{' '}
            <span className={styles.color}>
              {' '}
              renforcer le sentiment de soutien et d’accompagnement
            </span>{' '}
            que je peux vous offrir. Je reste joignable par mail ou par téléphone si vous avez des
            questions entre chaque consultation.
          </div>
          <div className={styles.image}>
            <img src={image1} />
          </div>
        </div>
        <div className={styles.space_2}></div>
        <div className={styles.wrapper_methode}>
          <div className={styles.image}>
            <img src={image2} />
          </div>
          <div className={styles.wrapper_text}>
            <div className={styles.titre_text}>A domicile</div>Je peux{' '}
            <span className={styles.color}> me déplacer chez vous</span> aussi bien pour la
            consultation initial que pour les consultations de suivi. L'interet de venir à domicile
            est que nous pourrons ensemble{' '}
            <span className={styles.color}>
              {' '}
              faire le point sur les aliments que vous avez dans vos placards...
            </span>{' '}
            et ne vous inquiétez pas ! Je ne suis pas là pour vous juger, mais pour vous informer.
            Je vous propose également de{' '}
            <span className={styles.color}> décrypter les étiquettes alimentaires,</span> de
            <span className={styles.color}> réaliser des recettes</span> qui vous soient adaptées,
            de même que <span className={styles.color}> faire les courses ensemble.</span>
          </div>
        </div>
        <div className={styles.space_2}></div>
        <div className={styles.wrapper_methode}>
          <div className={styles.wrapper_text}>
            <div className={styles.titre_text}>Sur skype</div>
            <span className={styles.color}> Pratique et économique,</span> les consulations sur
            skype sont similaire au consultation au cabinet. Je vous envoie{' '}
            <span className={styles.color}>
              {' '}
              un questionnaire détaillé pour préparer l’entretien.
            </span>{' '}
            Il est important de prendre son temps pour répondre au mieux à chaque question, c’est
            ainsi que je pourrai mieux connaître :
            <span className={styles.color}> vos habitudes alimentaires,</span> vos antécédents
            médicaux, vos objectifs... je pourrai alors vous proposer{' '}
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
      </div>
    );
  }
}
