import React from 'react';

export default class BookingForm extends React.Component {
  constructor(){
    super(...arguments);
    this.state = {};
  }
  render() {
    var fields = ["Name", "Location", "Time", "Fee"].map(this.hydrateField.bind(this));
    var submit = React.DOM.button({}, "Yeah Dawg")
    var form = React.DOM.form({onSubmit: this.formSubmitted.bind(this)}, ...fields, submit);
    var thanks = React.DOM.h2({}, "Grazie!");
    return this.state.booked ? thanks : form;
  }

  fieldChanged(event) {
    let newState = {}
    newState[event.target.placeholder] = event.target.value;
    this.setState(newState)
  }

  formSubmitted(event){
    event.preventDefault();
    event.stopPropagation();

  	console.log(this.state);
  	this.props.database.push(this.state);
    this.setState({booked: true});
  }

  hydrateField(string) {
    return React.DOM.input({
      placeholder: string,
      onChange: this.fieldChanged.bind(this)
    });
  }
}
