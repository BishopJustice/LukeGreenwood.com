import React from 'react';
import Form from './BookingForm'

export default class BookingControl extends React.Component {
  constructor() {
    super();
    this.state = {formOpen: false};
  }

  render() {
    var opener = React.DOM.button({onClick: this.openForm.bind(this)}, 'Book Him');

    return this.state.formOpen ? React.createElement(Form, {database: this.props.database}) : React.DOM.div({}, opener);
  }

  openForm(event) {
    this.setState({formOpen: true});
  }
}
