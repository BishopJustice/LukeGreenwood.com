import React from 'react';
import DataService from '../../DataService';
import BookingControl from './BookingControl';

export default class Home extends React.Component {
  render() {
    let header = React.DOM.h2({}, 'Luke Greenwood');

    let subheaders = [
      React.DOM.h3({}, "The man who does things with stuff"),
      React.DOM.h3({}, "The ultimate purveyor of glory and truth"),
      React.DOM.h3({}, "Luke Greenwood")
    ];

    let bookingControl = React.createElement(BookingControl, {database: DataService.child('bookings')});

    return React.DOM.div({className: 'center'}, header, ...subheaders, bookingControl);
  }
};
