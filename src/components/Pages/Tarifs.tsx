import React from 'react';
import styles from './Tarifs.module.sass';

interface Props {}

interface State {}

export class Tarifs extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.wrapper_line}>
          {/* AU CABINET */}
          <div className={styles.wrapper_pastille}>
            <div className={styles.wrapper_title}>
              <div className={styles.title}>Au cabinet</div>
            </div>
            <div className={styles.wrapper_content}>
              <div className={styles.wrapper_offre}>
                <div className={styles.content}>
                  <div className={styles.pastille}>Consultation initiale</div>
                </div>
                <div className={styles.wrapper_prix}>
                  <div className={styles.prix}>50</div>
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
                  <div className={styles.prix}>35</div>
                  <div className={styles.wrapper_unitee}>
                    <div className={styles.device}>€</div>
                    <div className={styles.frequence}>/séance</div>
                  </div>
                </div>
                <div className={styles.condition}>30 à 35min</div>
              </div>
            </div>
          </div>
          <div className={styles.space}></div>
          {/* A DOMICILE */}
          <div className={styles.wrapper_pastille}>
            <div className={styles.wrapper_title}>
              <div className={styles.title}>A domicile</div>
            </div>
            <div className={styles.wrapper_content}>
              <div className={styles.wrapper_offre}>
                <div className={styles.content}>
                  <div className={styles.pastille}>Consultation initiale</div>
                </div>
                <div className={styles.wrapper_prix}>
                  <div className={styles.prix}>60</div>
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
                  <div className={styles.prix}>45</div>
                  <div className={styles.wrapper_unitee}>
                    <div className={styles.device}>€</div>
                    <div className={styles.frequence}>/séance</div>
                  </div>
                </div>
                <div className={styles.condition}>30 à 35min</div>
              </div>
            </div>
          </div>
          <div className={styles.space}></div>
          {/* SKYPE */}
          <div className={styles.wrapper_pastille}>
            <div className={styles.wrapper_title}>
              <div className={styles.title}>Sur Skype</div>
            </div>
            <div className={styles.wrapper_content}>
              <div className={styles.wrapper_offre}>
                <div className={styles.content}>
                  <div className={styles.pastille}>Consultation initiale</div>
                </div>
                <div className={styles.wrapper_prix}>
                  <div className={styles.prix}>25</div>
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
                  <div className={styles.prix}>15</div>
                  <div className={styles.wrapper_unitee}>
                    <div className={styles.device}>€</div>
                    <div className={styles.frequence}>/séance</div>
                  </div>
                </div>
                <div className={styles.condition}>30 à 35min</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.wrapper_line}>
          {/* OFFRE AU CABINET */}
          <div className={styles.wrapper_pastille}>
            <div className={styles.wrapper_title}>
              <div className={styles.title_offre}>Offre au cabinet</div>
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
                <div className={styles.prix}>150</div>
                <div className={styles.wrapper_unitee}>
                  <div className={styles.device}>€</div>
                  <div className={styles.frequence}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.space}></div>
          {/* OFFRE A DOMICILE */}
          <div className={styles.wrapper_pastille}>
            <div className={styles.wrapper_title}>
              <div className={styles.title_offre}>Offre à domicile</div>
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
                <div className={styles.prix}>200</div>
                <div className={styles.wrapper_unitee}>
                  <div className={styles.device}>€</div>
                  <div className={styles.frequence}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.space}></div>
          {/* OFFRE SKYPE */}
          <div className={styles.wrapper_pastille}>
            <div className={styles.wrapper_title}>
              <div className={styles.title_offre}>Offre sur Skype</div>
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
                <div className={styles.prix}>60</div>
                <div className={styles.wrapper_unitee}>
                  <div className={styles.device}>€</div>
                  <div className={styles.frequence}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
