import React from 'react';
import styles from './Actualite.module.sass';
import citron from '../../images/citron.png';

interface Props {}

interface State {}

export class Actualite extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.actualite}>
        <img className={styles.img} src={citron}></img>
      </div>
    );
  }
}
