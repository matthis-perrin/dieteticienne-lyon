import React from 'react';
import styles from './Actualite.module.scss';

import pdfUrl from '../../articles/Alimentation et grossesse.pdf';

// interface ActualiteData {
//   pdfUrl: pdfUrl;

// }

// const actualites = [

// ]

interface Props {}

interface State {}

export class Actualite extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.text}>Coming soon</div>
        {/* <iframe
          src={`${pdfUrl}#toolbar=0`}
          width="800"
          height="3000"
          seamless
          frameBorder={0}
        ></iframe> */}
      </div>
    );
  }
}
