import React from 'react';
import styles from './Methode.module.sass';
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
        <div className={styles.wrapper_paragraphe}>
          <div className={styles.wrapper_img}>
            <img src={image1}></img>
          </div>
          <div className={styles.wrapper_text}>
            <div className={styles.title}>Au cabinet</div>
            <div className={styles.text}>
              <span className={styles.gras_color}>Consultation initiale 1h</span>
              <br />
              <br />
              Cette première consultation me permettra de réaliser un bilan alimentaire et
              nutritionnel. Nous ferons le point sur vos pathologies, votre mode de vie, vos
              habitudes alimentaires, vos objectifs... Je vous proposerais une alimentation
              équilibrée, je répondrais à vos questions. Je vous transmettre des fiches conseils, et
              un carnet alimentaire à me remettre lors de la prochaine consultation.
              <br />
              <br />
              <span className={styles.gras_color}>Consultation de suivis 30 à 40 min</span>
              <br />
              <br />
              Elles seront espacées entre 15 et 20 jours. Cette consultation permettra de ré adapté
              l’alimentation si besoins, de faire le point sur votre ressentis, vos résultats.
            </div>
          </div>
        </div>
        <div className={styles.space_inter_paragraphe}></div>
        <div className={styles.wrapper_paragraphe}>
          <div className={styles.wrapper_img}>
            <img src={image2}></img>
          </div>
          <div className={styles.wrapper_text}>
            <div className={styles.title}>A domicile</div>
            <div className={styles.text}>
              Identique au cabinet (consultation initiale et consultation de suivis). L'interet de
              venir à domicile c'est que nous pouvons regarder ensemble les aliments que vous avez
              dans vos placards, ne vous inquietez pas ! je ne suis pas là pour vous juger, mais
              pour vous informer. je vous propose également de décrypter les étiquettes
              alimentaired, réaliser des recettes, faire les courses ensemble.
            </div>
          </div>
        </div>
        <div className={styles.space_inter_paragraphe}></div>
        <div className={styles.wrapper_paragraphe}>
          <div className={styles.wrapper_img}>
            <img src={image3}></img>
          </div>
          <div className={styles.wrapper_text}>
            <div className={styles.title}>Sur skype, au téléphone</div>
            <div className={styles.text}>
              Je vous envoie un questionnaire détaillé. Il est important de prendre son temps pour
              répondre au mieux à chaques questions, cela me permettre de connaitre: vos habitudes
              alimentaires, vos antécédents médicaux, vos objectifs... je pourrais alors vous
              proposer une solution adaptée. N'oubliez pas de me renvoyer le questionnaire par mail
              !
            </div>
          </div>
        </div>
      </div>
    );
  }
}
