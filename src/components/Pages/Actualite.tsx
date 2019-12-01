import React from 'react';
import styles from './Actualite.module.sass';
import logo from '../../images/logo_pomme_design.png';

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
        <div className={styles.image}>
          <img src={logo} />
        </div>
      </div>
    );
  }
}
