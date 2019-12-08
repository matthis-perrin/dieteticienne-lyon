import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import styles from './Menu.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {RouteComponentProps} from 'react-router';
import {accueilRoute, methodeRoute, actualiteRoute, tarifsRoute, contactRoute} from '../routes';

interface Props {}

export class MenuInternal extends React.Component<RouteComponentProps<Props>, {}> {
  render() {
    const {pathname} = this.props.history.location;
    const wrapLinkClass = (className: string, isSelected: boolean): string =>
      `${className} ${isSelected ? styles.selected : ''}`;
    return (
      <div className={styles.wrapper}>
        <Link to={accueilRoute} className={wrapLinkClass(styles.icon, pathname === accueilRoute)}>
          <FontAwesomeIcon icon={faHome} className={styles.icon} />
        </Link>
        <Link to={methodeRoute} className={wrapLinkClass(styles.text, pathname === methodeRoute)}>
          Méthode
        </Link>
        <Link
          to={actualiteRoute}
          className={wrapLinkClass(styles.text, pathname === actualiteRoute)}
        >
          Actualité
        </Link>
        <Link to={tarifsRoute} className={wrapLinkClass(styles.text, pathname === tarifsRoute)}>
          Tarifs
        </Link>
        <Link to={contactRoute} className={wrapLinkClass(styles.text, pathname === contactRoute)}>
          Contact
        </Link>
      </div>
    );
  }
}

export const Menu = withRouter(MenuInternal);
