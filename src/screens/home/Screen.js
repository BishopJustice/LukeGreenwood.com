import React from 'react';

export default class Home extends React.Component {
  render() {
    let header = React.DOM.h2({}, 'Luke Greenwood');

    let subheaders = [
      React.DOM.h3({}, "The man who does things with stuff"),
      React.DOM.h3({}, "The ultimate purveyor of glory and truth"),
      React.DOM.h3({}, "Luke Greenwood")
    ];

    return React.DOM.div({className: 'center'}, header, ...subheaders);
  }
};
