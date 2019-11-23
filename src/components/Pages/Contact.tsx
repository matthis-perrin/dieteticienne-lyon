import React from 'react';
import styles from './Contact.module.sass';
import r_grassigli from '../../images/r_grassigli.png';

interface Props {}

interface State {}

export class Contact extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.contact}>
        <div>Test</div>
        <img className={styles.img} src={r_grassigli}></img>
      </div>
    );
  }
}
