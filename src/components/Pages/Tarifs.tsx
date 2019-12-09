import React from 'react';
import responsive from '../../styles/mobile.module.scss';
import styles from './Tarifs.module.scss';

export function Tarifs(): JSX.Element {
  return (
    <React.Fragment>
      <TarifsWeb />
      <TarifsMobile />
    </React.Fragment>
  );
}
function TarifsWeb(): JSX.Element {
  return (
    <div className={`${styles.wrapper} ${responsive.web}`}>
      <div className={styles.wrapper_line}>
        <Tarif title="Au cabinet" prix_initial="50" prix_suivi="35" />
        <div className={styles.space}></div>
        <Tarif title="À domicile" prix_initial="60" prix_suivi="45" />
        <div className={styles.space}></div>
        <Tarif title="À distance" prix_initial="25" prix_suivi="15" />
      </div>
      <div className={styles.wrapper_line}>
        <Offre title="Offre au cabinet" prix_global="150" />
        <div className={styles.space}></div>
        <Offre title="Offre à domicile" prix_global="200" />
        <div className={styles.space}></div>
        <Offre title="Offre à distance" prix_global="60" />
      </div>
    </div>
  );
}

function TarifsMobile(): JSX.Element {
  return (
    <div className={`${styles.wrapper} ${responsive.mobile}`}>
      <Tarif title="Au cabinet" prix_initial="50" prix_suivi="35" />
      <div className={styles.space}></div>
      <Tarif title="À domicile" prix_initial="60" prix_suivi="45" />
      <div className={styles.space}></div>
      <Tarif title="À distance" prix_initial="25" prix_suivi="15" />
      <div className={styles.space}></div>
      <Offre title="Offre au cabinet" prix_global="150" />
      <div className={styles.space}></div>
      <Offre title="Offre à domicile" prix_global="200" />
      <div className={styles.space}></div>
      <Offre title="Offre à distance" prix_global="60" />
    </div>
  );
}

interface TarifProps {
  title: string;
  prix_initial: string;
  prix_suivi: string;
}

function Tarif(props: TarifProps): JSX.Element {
  return (
    <div className={styles.wrapper_pastille}>
      <div className={styles.wrapper_title}>
        <div className={styles.title}>{props.title}</div>
      </div>
      <div className={styles.wrapper_content}>
        <div className={styles.wrapper_offre}>
          <div className={styles.content}>
            <div className={styles.pastille}>Consultation initiale</div>
          </div>
          <div className={styles.wrapper_prix}>
            <div className={styles.prix}>{props.prix_initial}</div>
            <div className={styles.wrapper_unitee}>
              <div className={styles.device}>€</div>
              <div className={styles.frequence}></div>
            </div>
          </div>
          <div className={styles.condition}>1h</div>
        </div>
        <div className={styles.wrapper_offre}>
          <div className={styles.content}>
            <div className={styles.pastille}>Consultations de suivi</div>
          </div>
          <div className={styles.wrapper_prix}>
            <div className={styles.prix}>{props.prix_suivi}</div>
            <div className={styles.wrapper_unitee}>
              <div className={styles.device}>€</div>
              <div className={styles.frequence}>/séance</div>
            </div>
          </div>
          <div className={styles.condition}>30 à 35min</div>
        </div>
      </div>
    </div>
  );
}

interface OffreProps {
  title: string;
  prix_global: string;
}

function Offre(props: OffreProps): JSX.Element {
  return (
    <div className={styles.wrapper_pastille}>
      <div className={styles.wrapper_title}>
        <div className={styles.title_offre}>{props.title}</div>
      </div>
      <div className={styles.wrapper_content}>
        <div className={styles.content_offre}>
          <div className={styles.pastille}>Consultation initiale</div>
        </div>
        <div className={styles.plus}>+</div>
        <div className={styles.content_offre}>
          <div className={styles.pastille}>
            <span className={styles.gras_color}>4x</span> consultations de suivi
          </div>
        </div>
        <div className={styles.wrapper_prix_offre}>
          <div className={styles.prix}>{props.prix_global}</div>
          <div className={styles.wrapper_unitee}>
            <div className={styles.device}>€</div>
            <div className={styles.frequence}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
