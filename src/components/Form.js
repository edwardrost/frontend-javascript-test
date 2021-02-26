import React, { Component } from 'react';

export default class Form extends Component {    
    constructor() {
      super();

      this.state = {       
        isPressed: false,
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    };
    
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone   
        };
 
        this.props.addItem(newItem);
        
        this.setState({
            isPressed: false,
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        })

    };
  
    render() {
      return (
        !this.state.isPressed 
        ? <button className="pa2 ba b--green" onClick = {() => this.setState({isPressed: true})}>Добавить</button> 
        : <div className="ph4">
            <div className="f6 w-100 mw8 center" cellSpacing="0">
                <form className="tl">  
                      <label className="f6 b db mt2">ID:</label>
                      <input
                        className="input-reset"
                        name="id"
                        type="text"
                        value={this.state.id}
                        onChange={this.handleInputChange} />                  

                        <label className="f6 b db mt2">First Name:</label>                        
                        <input
                        className="input-reset"
                        name="firstName"
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleInputChange} />
                   
                        <label className="f6 b db mt2">Last Name:</label>
                        <input
                        className="input-reset"
                        name="lastName"
                        type="text"
                        value={this.state.lastName}
                        onChange={this.handleInputChange} />
   
                        <label className="f6 b db mt2">Email:</label>
                        <input
                        className="input-reset"
                        name="email"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInputChange} />
                 
                        <label className="f6 b db mt2">Phone:</label>
                        <input
                        className="input-reset"
                        name="phone"
                        type="text"
                        value={this.state.phone}
                        onChange={this.handleInputChange} />                 

                    <button className="f6 db pa2 ba mt2 b--green" onClick = {this.onSubmit}>Добавить</button>
                </form>
            </div>
        </div>
      );
    }
  };
  