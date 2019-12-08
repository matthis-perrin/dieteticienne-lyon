import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import styles from './App.module.scss';
import {Header} from './Header';
import {Accueil} from './Pages/Accueil';
import {Menu} from './Menu';
import {Contact} from './Pages/Contact';
import {Actualite} from './Pages/Actualite';
import {Methode} from './Pages/Methode';
import {Tarifs} from './Pages/Tarifs';
import {Footer} from './Footer';
import withTracker from './withTracker';
import {tarifsRoute, actualiteRoute, contactRoute, methodeRoute, accueilRoute} from '../routes';

interface Props {}

interface State {}

export class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className={styles.wrapper}>
          <div className={styles.top_bar}>
            <Header />
          </div>
          <div className={styles.app}>
            <div className={styles.menu}>
              <Menu />
            </div>
            <div className={styles.content}>
              <Switch>
                <Route path={tarifsRoute} component={withTracker(Tarifs)}></Route>
                <Route path={methodeRoute} component={withTracker(Methode)}></Route>
                <Route path={actualiteRoute} component={withTracker(Actualite)}></Route>
                <Route path={contactRoute} component={withTracker(Contact)}></Route>
                <Route path={accueilRoute} component={withTracker(Accueil)}></Route>
              </Switch>
            </div>
            <div className={styles.footer}>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
