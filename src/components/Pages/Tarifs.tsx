import React from 'react';
import styles from './Tarifs.module.sass';
import avocat from '../../images/avocat.png';

interface Props {}

interface State {}

export class Tarifs extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.tarifs}>
        <img className={styles.img} src={avocat}></img>
      </div>
    );
  }
}
