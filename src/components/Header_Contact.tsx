import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import styles from './Header_Contact.module.scss';
import {faMobileAlt} from '@fortawesome/free-solid-svg-icons';

export function HeaderContact(): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contact}>
        <div className={styles.logo_tel}>
          <FontAwesomeIcon icon={faMobileAlt} className={styles.icon} />
        </div>
        <a className={styles.number} href="tel:+33768462405">
          07 68 46 24 05
        </a>
      </div>
    </div>
  );
}
