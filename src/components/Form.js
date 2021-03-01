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
        isCompleted: {
          'id': false, 
          'firstName': false,
          'lastName': false,
          'email' : false,
          'phone' : false 
        }
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    };

    checkInput(name, value) {
      let regexp = new RegExp();
      switch (name) {
        case 'id':
          regexp = /\d/;
          break;
        case 'firstName':
        case 'lastName':
          regexp = /[a-zA-Z]/;
          break;
        case 'email':
          regexp = /[a-z0-9\.-_]/i;
          break;
        case 'phone':
          regexp = /\d/;
          break;        
      }

      let checkedValue = value.length > 1 ? value.substr(-1) : value;
      
      return checkedValue.match(regexp) ? true : false
    }
    
    handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      /*  валидация полей формы в 2 этапа:
          1: позволяем вводить только требуемые символы -  неразрешенные не появляются ( функция checkInput ) ;
          2: при каждом вводе проверяется заполнены ли все поля? (функция isFormCompleted) 
          поле id - хотя бы одна цифра, которая никак не проверяется на уникальность
          текстовые поля считаются заполненными при вводе хотя бы одной буквы,
          поле Email - на соответствие шаблону
          поле Phone - при вводе 7-й цифры */

      if (value) {  // проверка нужна когда мы BackSpace удаляем последний из введенных символов
      
      if (this.checkInput(name, value)) {
        if (name !== 'email' && name !== 'phone') {
          this.setState({
                          [name]: value,
                          isCompleted: {
                                        ...this.state.isCompleted,
                                        [name]: true
                                        }                          
                        });
        }
        else if (name === 'email') {
          let emailRegexp = /^[a-z0-9][a-z0-9\.-_]*[a-z0-9]@[a-z0-9][a-z0-9_-]*[a-z0-9]+\.[a-z0-9][a-z0-9_-]*[a-z0-9]+$/i;
          if (value.match(emailRegexp)) {
            this.setState({
              [name]: value,
              isCompleted: {
                            ...this.state.isCompleted,
                            [name]: true
                            }              
            });
          }
          else {
            this.setState({
              [name]: value              
            });
          }
        }
        else if (name === 'phone') {
          let phoneRegexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
          if (value.match(phoneRegexp)) {
            this.setState({
              [name]: value,
              isCompleted: {
                            ...this.state.isCompleted,
                            [name]: true
                            }              
            });
          }
          else {
            this.setState({
              [name]: value              
            });
          }
        }        
      }
    }
    else {
      this.setState({
        [name]: ''              
      });
    }
    }

    isFormCompleted(){
      let flag = true;
      for (let value of Object.values(this.state.isCompleted)) {
        if (value === false) {
          flag = false;
          break; 
        }      
      }
      return flag
    }

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
            phone: '',
            isCompleted: {
              'id': false, 
              'firstName': false,
              'lastName': false,
              'email' : false,
              'phone' : false 
            }
        })
    };    
    

    render(){
      const { id, firstName, lastName, email, phone, isPressed } = this.state;
      let className = this.isFormCompleted() ? "w-90 pv2 bg-green white ba br2 b--green" : "hidden";

      return (
        <div className="tc flex justify-center">
          {!isPressed 
          ? <button className="mv3 bg-white ba ph3 pa3 dib br3 b--green" onClick = {() => this.setState({isPressed: true})}>Добавить новую строку в таблицу</button> 
          : <div className="ph4 overflow-auto ">
              <div className="f6 w-100 mw8 center" cellSpacing="0">
                  <form className="tl flex pa3">
                    <div className="w-15 mr2">
                      <label className="f6 db">ID:</label>
                      <input
                        className="input-reset w-100 pa2 ba br2 b--green"
                        name="id"
                        type="text"
                        placeholder="только цифры"
                        value={id}
                        onChange={this.handleInputChange} />    
                    </div>
                    <div className="w-20 mr2">
                      <label className="f6 db">Имя:</label>                        
                      <input
                      className="input-reset w-100 pa2 ba br2 b--green"
                      name="firstName"
                      type="text"
                      placeholder="латинсие буквы"
                      value={firstName}
                      onChange={this.handleInputChange} /> 
                    </div>
                    <div className="w-20 mr2">
                      <label className="ff6 db">Фамилия:</label>
                      <input
                      className="input-reset w-100 pa2 ba br2 b--green"
                      name="lastName"
                      type="text"
                      placeholder="латинсие буквы"
                      value={lastName}
                      onChange={this.handleInputChange} />
                    </div>
                    <div className="w-40 mr2"> 
                      <label className="ff6 db ">Эл.почта:</label>
                      <input
                      className="input-reset w-100 pa2 ba br2 b--green"
                      name="email"
                      type="email"
                      placeholder="@"
                      value={email}
                      onChange={this.handleInputChange} />
                    </div>
                    <div className="w-30 mr2">
                      <label className="ff6 db">Телефон:</label>
                      <input
                      className="input-reset w-100 pa2 ba br2 b--green"
                      name="phone"
                      type="text"
                      placeholder="XXXXXXXXXX"
                      value={phone}
                      onChange={this.handleInputChange} />
                    </div>                

                  </form>
                  <button className={className} onClick = {this.onSubmit}>Добавить новую строку в таблицу</button>

              </div>
          </div>
          }
        </div>
      );
    }
  };
  