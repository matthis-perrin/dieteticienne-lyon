import React from 'react';
import GoogleAnalytics from 'react-ga';

GoogleAnalytics.initialize('UA-154182275-1');

const withTracker = (WrappedComponent: any, options = {}) => {
  const trackPage = (page: string) => {
    GoogleAnalytics.set({
      page,
      ...options,
    });
    GoogleAnalytics.pageview(page);
  };

  const HOC = class extends React.Component<any> {
    componentDidMount() {
      const location = this.props.location;
      if (location === undefined) {
        return;
      }
      const page = location.pathname + location.search;
      trackPage(page);
    }

    componentDidUpdate(prevProps: any) {
      const location = this.props.location;
      if (location === undefined) {
        return;
      }
      const currentPage = prevProps.location.pathname + prevProps.location.search;
      const nextPage = this.props.location.pathname + this.props.location.search;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};

export default withTracker;
