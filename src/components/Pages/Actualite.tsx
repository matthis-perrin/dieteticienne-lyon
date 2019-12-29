import React, {Fragment, useState} from 'react';
import styles from './Actualite.module.scss';
import responsive from '../../styles/mobile.module.scss';
import ailPdf from "../../articles/L'ail.pdf";
import canellePdf from '../../articles/La canelle.pdf';
import giroflePdf from '../../articles/Le clou de girofle.pdf';
import canellePng from '../../articles/La canelle.png';
import giroflePng from '../../articles/Le clou de girofle.png';
import ailPng from "../../articles/L'ail.png";

interface ActualiteData {
  title: string;
  intro: string;
  img: string;
  pdf: string;
}

function truncateText(
  text: string,
  options: {
    fontSize: number;
    fontFamily: string;
    lineHeight: number;
    width: number;
    height: number;
  }
): string {
  const {fontSize, fontFamily, width, height, lineHeight} = options;
  const randomId = Math.round(Math.random() * 1e10);
  const boxId = `measure-text-${randomId}`;
  const box = document.createElement('div');
  box.setAttribute('id', boxId);
  box.style.position = 'absolute';
  box.style.left = '-99999px';
  box.style.top = '-99999px';
  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
  box.style.fontSize = `${fontSize}px`;
  box.style.fontFamily = fontFamily;
  box.style.lineHeight = `${lineHeight}px`;

  document.body.appendChild(box);

  const words = text.split(' ');
  for (let numberOfWord = 1; numberOfWord < words.length; numberOfWord++) {
    const content = words.slice(0, numberOfWord);
    box.innerHTML = content.join(' ') + '...';
    if (box.scrollHeight > box.offsetHeight) {
      return words.slice(0, numberOfWord - 1).join(' ') + '...';
    }
  }
  return text;
}

const truncateOptions = {
  fontSize: 16,
  fontFamily: 'Roboto',
  lineHeight: 20,
  width: 300,
  height: 60,
};

const actualites: ActualiteData[] = [
  {
    title: 'La canelle',
    intro: truncateText(
      'Originaire de Ceylan, le cannelier fournit une écorce fortement parfumée. La cannelle est associée à l’idée du sucré bien qu’utilisée aussi dans des préparations culinaires salées.',
      truncateOptions
    ),
    img: canellePng,
    pdf: canellePdf,
  },
  {
    title: "L'ail",
    intro: truncateText(
      'C’est la reine des herbes ! L’ail cultivée et l’ail des ours, la variété sauvage, sont connues pour leurs bienfaits depuis l’Antiquité, de l’Occident à l’Extrême-Orient. Les bâtisseurs de pyramides en consommaient et Hyppocrate utilisait l’ail pour soigner les cancers du sein et de la prostate.',
      truncateOptions
    ),
    img: ailPng,
    pdf: ailPdf,
  },
  {
    title: 'Le clou de girofle',
    intro: truncateText(
      'C’est un bouton de fleur, déjà connu en Mésopotamie 1700 ans avant J-C, et plus tard les croisés l’ont utilisé pour combattre... les rages de dent.',
      truncateOptions
    ),
    img: giroflePng,
    pdf: giroflePdf,
  },
  {
    title: "L'ail",
    intro: truncateText(
      'C’est la reine des herbes ! L’ail cultivée et l’ail des ours, la variété sauvage, sont connues pour leurs bienfaits depuis l’Antiquité, de l’Occident à l’Extrême-Orient. Les bâtisseurs de pyramides en consommaient et Hyppocrate utilisait l’ail pour soigner les cancers du sein et de la prostate.',
      truncateOptions
    ),
    img: ailPng,
    pdf: ailPdf,
  },
  {
    title: 'Le clou de girofle',
    intro: truncateText(
      'C’est un bouton de fleur, déjà connu en Mésopotamie 1700 ans avant J-C, et plus tard les croisés l’ont utilisé pour combattre... les rages de dent.',
      truncateOptions
    ),
    img: giroflePng,
    pdf: giroflePdf,
  },
];

export function Actualite(): JSX.Element {
  return (
    <React.Fragment>
      <ActualiteWeb />
      <ActualiteMobile />
    </React.Fragment>
  );
}

function ActualiteWeb(): JSX.Element {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [currentActualite, setcurrentActualite] = useState<ActualiteData>(actualites[0]);

  function handleButtonClick(actualite: ActualiteData): void {
    setIsSelected(true);
    setcurrentActualite(actualite);
  }
  function handleButtonBackClick(): void {
    setIsSelected(false);
  }
  return (
    <div className={`${styles.wrapper} ${responsive.web}`}>
      <Pastilles handleButtonClick={handleButtonClick} display={!isSelected} />
      <Wiewer
        handleButtonClick={handleButtonClick}
        handleButtonBackClick={handleButtonBackClick}
        display={isSelected}
        actualite={currentActualite}
      />
    </div>
  );
}

function ActualiteMobile(): JSX.Element {
  const [isSelected, setIsSelected] = useState<boolean>(false);

  function handleButtonClick(actualite: ActualiteData): void {
    setIsSelected(true);
  }
  return (
    <div className={`${styles.wrapper} ${responsive.mobile}`}>
      <Pastilles handleButtonClick={handleButtonClick} display={!isSelected} />
    </div>
  );
}

interface PastillesProps {
  handleButtonClick: (actualite: ActualiteData) => void;
  display: boolean;
}

function Pastilles(props: PastillesProps): JSX.Element {
  const pastilles_array: JSX.Element[] = [];

  for (let i = 0; i < actualites.length; i++) {
    pastilles_array.push(
      <PastilleArticle
        key={actualites[i].title}
        actualite={actualites[i]}
        onPastilleClick={props.handleButtonClick}
      />
    );
  }
  return (
    <div className={styles.wrapper_pastilles} style={{display: props.display ? 'flex' : 'none'}}>
      {pastilles_array}
    </div>
  );
}

interface PastilleArticleProps {
  key: string;
  actualite: ActualiteData;
  onPastilleClick: (actualite: ActualiteData) => void;
}

function PastilleArticle(props: PastilleArticleProps): JSX.Element {
  function handleClick(): void {
    props.onPastilleClick(props.actualite);
  }
  return (
    <div className={styles.wrapper_pastille} onClick={handleClick}>
      <img src={props.actualite.img} />
      <div className={styles.title}>{props.actualite.title}</div>
      <div className={styles.intro}>{props.actualite.intro}</div>
    </div>
  );
}

interface WiewerProps {
  display: boolean;
  actualite: ActualiteData;
  handleButtonBackClick: () => void;
  handleButtonClick: (actualite: ActualiteData) => void;
}

function Wiewer(props: WiewerProps): JSX.Element {
  function handleButtonClick(actualite: ActualiteData): void {
    props.handleButtonClick(actualite);
  }
  function handleClick(): void {
    props.handleButtonBackClick();
  }
  return (
    <div className={styles.wrapper_wiewer} style={{display: props.display ? 'flex' : 'none'}}>
      <div className={styles.button} onClick={handleClick}>
        Retour
      </div>
      <iframe
        src={`${props.actualite.pdf}#toolbar=0`}
        width="800"
        height="3000"
        seamless
        frameBorder={0}
      ></iframe>
      <Pastilles handleButtonClick={handleButtonClick} display={true} />
      <div className={styles.button} onClick={handleClick}>
        Retour
      </div>
    </div>
  );
}
