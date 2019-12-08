import React from 'react';
import styles from './Bt_Menu.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconDefinition} from '@fortawesome/free-solid-svg-icons';

interface Props {
  title: string;
  icone: IconDefinition;
}

interface State {}

export class Bt_Menu extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.bt}>
        <FontAwesomeIcon icon={this.props.icone} className={styles.icon} />
        <h1 className={styles.text}>{this.props.title}</h1>
      </div>
    );
  }
}
