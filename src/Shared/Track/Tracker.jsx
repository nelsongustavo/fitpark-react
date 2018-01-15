import React from 'react';
import ga from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

ReactPixel.init('894385937398127');
ga.initialize('UA-102606035-1');

const tracker = (WrappedComponent) => {

  const trackPage = (page) => {
    ga.set({ page });
    ga.pageview(page);
    ReactPixel.pageView();
  };

  const HOC = (props) => {
    if (process.env.NODE_ENV === 'production') {
      const page = props.location.pathname;
      trackPage(page);
    }

    return (
      <WrappedComponent {...props} />
    );
  };
  return HOC;
};

export default tracker;
