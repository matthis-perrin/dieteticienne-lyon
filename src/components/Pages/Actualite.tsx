import React, {Fragment, useState} from 'react';
import {actualites, ActualiteData} from '../../articles/__Data_Article';
import styles from './Actualite.module.scss';
import {SizeMonitor} from '../size_monitor';

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

function getActualites(): ActualiteData[] {
  return actualites.map(a => ({...a, intro: truncateText(a.intro, truncateOptions)}));
}

function isMobile(): boolean {
  var check = false;
  (function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || (window as any).opera);
  return check;
}

export function Actualite(): JSX.Element {
  return (
    <React.Fragment>
      <ActualiteWeb />
    </React.Fragment>
  );
}

function ActualiteWeb(): JSX.Element {
  const actualites = getActualites();
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [currentActualite, setcurrentActualite] = useState<ActualiteData>(actualites[0]);

  function handleButtonClick(actualite: ActualiteData): void {
    if (isMobile()) {
      window.open(actualite.pdf);
    } else {
      setIsSelected(true);
      setcurrentActualite(actualite);
      window.scrollTo(0, 0);
    }
  }
  function handleButtonBackClick(): void {
    setIsSelected(false);
    window.scrollTo(0, 0);
  }
  return (
    <div className={`${styles.wrapper}`}>
      <Pastilles
        handleButtonClick={handleButtonClick}
        display={!isSelected}
        actualites={actualites}
      />
      <Wiewer
        handleButtonClick={handleButtonClick}
        handleButtonBackClick={handleButtonBackClick}
        display={isSelected}
        actualite={currentActualite}
      />
    </div>
  );
}

interface PastillesProps {
  handleButtonClick: (actualite: ActualiteData) => void;
  display: boolean;
  actualites: ActualiteData[];
}

function Pastilles(props: PastillesProps): JSX.Element {
  const pastilles_array: JSX.Element[] = [];

  for (let i = 0; i < props.actualites.length; i++) {
    pastilles_array.push(
      <PastilleArticle
        key={props.actualites[i].id}
        actualite={props.actualites[i]}
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
  const pastilleClass = isMobile()
    ? styles.wrapper_pastille
    : `${styles.wrapper_pastille} ${styles.wrapper_pastille_web}`;
  return (
    <div className={pastilleClass} onClick={handleClick}>
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

  const actualites = getActualites();
  const actualitesToDisplay = 3;

  // Récupération de l'index de l'actualité courante
  let currentIndex = actualites.map(a => a.id).indexOf(props.actualite.id);
  if (currentIndex === -1) {
    currentIndex = 0; // Should never happend
  }

  // Création d'un tableau de toutes les actualité sauf celle affichée
  const filteredActualites = actualites.filter(a => a.id !== props.actualite.id);

  // On parcours les actualités une par une à partir de l'index de l'actualité courante
  // et on les ajoute dans un tableau jusqu'à qu'on en ait assez
  const nextActualites: ActualiteData[] = [];
  while (filteredActualites.length > 0 && nextActualites.length < actualitesToDisplay) {
    // Si l'index dépasse la taille du tableau, on boucle au début
    if (currentIndex >= filteredActualites.length) {
      currentIndex = currentIndex % filteredActualites.length;
    }
    // Ajout de l'actualité
    nextActualites.push(filteredActualites[currentIndex]);
    // Passage à l'index suivant
    currentIndex += 1;
  }

  const baseWidth = 783;
  const baseHeight = 1100;
  const mobilePadding = 16;

  return (
    <div className={styles.wrapper_wiewer} style={{display: props.display ? 'flex' : 'none'}}>
      <div className={styles.button} onClick={handleClick}>
        Retour
      </div>
      <SizeMonitor>
        {(screenWidth: number, screenHeight: number) => {
          const width = Math.min(screenWidth - 2 * mobilePadding, baseWidth);
          const height = props.actualite.numberOfPage * baseHeight * (width / baseWidth);
          return (
            <iframe
              src={`${props.actualite.pdf}#toolbar=0`}
              width={width}
              height={height}
              seamless
              frameBorder={0}
            ></iframe>
          );
        }}
      </SizeMonitor>
      <Pastilles handleButtonClick={handleButtonClick} display={true} actualites={nextActualites} />
      <div className={styles.button} onClick={handleClick}>
        Retour
      </div>
    </div>
  );
}
