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
        phone: '',
        isIdCompleted: false,
        isFirstNameCompleted: false,
        isLastNameCompleted: false,
        isEmailCompleted: false,
        isPhoneCompleted: false,
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
        <div className="tc flex justify-center">
          {!this.state.isPressed 
          ? <button className="mv3 bg-white ba ph3 pa3 dib br3 b--green" onClick = {() => this.setState({isPressed: true})}>Добавить пользователя в таблицу</button> 
          : <div className="ph4">
              <div className="f6 w-100 mw8 center" cellSpacing="0">
                  <form className="tl flex pa3">
                    <div className="w-10 mr2">
                      <label className="f6 db">ID:</label>
                      <input
                        className="input-reset w-100 pa2 ba br2 b--green"
                        name="id"
                        type="text"
                        placeholder="цифры"
                        value={this.state.id}
                        onChange={this.handleInputChange} />    
                    </div>
                    <div className="w-20 mr2">
                      <label className="f6 db">First Name:</label>                        
                      <input
                      className="input-reset w-100 pa2 ba br2 b--green"
                      name="firstName"
                      type="text"
                      placeholder="латинские буквы"
                      value={this.state.firstName}
                      onChange={this.handleInputChange} /> 
                    </div>
                    <div className="w-20 mr2">
                      <label className="ff6 db">Last Name:</label>
                      <input
                      className="input-reset w-100 pa2 ba br2 b--green"
                      name="lastName"
                      type="text"
                      placeholder="латинские буквы"
                      value={this.state.lastName}
                      onChange={this.handleInputChange} />
                    </div>
                    <div className="w-30 mr2"> 
                      <label className="ff6 db ">Email:</label>
                      <input
                      className="input-reset w-100 pa2 ba br2 b--green"
                      name="email"
                      type="email"
                      placeholder="@"
                      value={this.state.email}
                      onChange={this.handleInputChange} />
                    </div>
                    <div className="w-20 mr2">
                      <label className="ff6 db">Phone:</label>
                      <input
                      className="input-reset w-100 pa2 ba br2 b--green"
                      name="phone"
                      type="text"
                      placeholder="(XXX) XXX-XXXX"
                      value={this.state.phone}
                      onChange={this.handleInputChange} />
                    </div>                

                    <button className="w-15 db bg-white ba br2 b--green" onClick = {this.onSubmit}>Добавить</button>
                  </form>
              </div>
          </div>
          }
        </div>
      );
    }
  };
  