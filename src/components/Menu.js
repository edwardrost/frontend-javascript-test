import React, {Component} from 'react';
import './Menu.css';

class Menu extends Component {
  constructor(props){
    super(props);
    this.urlChange = this.urlChange.bind(this);
  }

  urlChange(e) {
    e.persist();
    this.props.onUrlChange(e.target.value);
    console.log(e);
  }s

  render(){
    return (
      <div className="pa2">
        <form className="db">
              <div className="dib mr2">Большой объем данных</div>
              <div className="relative dib">
                <input
                  className="absolute z-5 w-100 h-100 o-0 pointer checkbox"
                  name = "minDataValue"
                  type="checkbox"
                  checked = {!this.props.minDataValue}
                  onChange={this.urlChange}
                />
                <div className="relative z-4 dib w3 h2 bg-mid-gray overflow-hidden br4 v-mid bg-animate checkbox-wrapper">
                  <div className="absolute right-auto left-0 w2 h2 br4 bg-silver shadow-4 t-cb bg-animate checkbox-toggle"></div>
                </div>
              </div>
        </form>
      </div>
    );
  }
}

export default Menu;