import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import Table from './components/Table';
import Form from './components/Form';
import Spinner from './components/Spinner';
import ErrorIndicator from './components/ErrorIndicator';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      minDataSet: true,
      robots: [],
      searchfield: "",
      error: false,
    };
    this.onUrlChange = this.onUrlChange.bind(this);
  }

  loadFromApi(url) {
    
    this.setState({
      isLoaded: false
    })

    fetch(url)
      .then((response) => response.json())
      .then((users) => this.setState({ 
        robots: users,
        isLoaded: true
       }))
      .catch(e => {
        console.log('Load Error');
        this.setState({ 
          robots: [],
          error: true,
          isLoaded: true
         })
      });
  };

  componentDidMount() {
    let url = 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
    this.loadFromApi(url);
  }

  onUrlChange (e) {
    let url = !this.state.minDataSet
      ? 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'
      : 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';
    
    this.setState({
      minDataSet: !this.state.minDataSet
    })

    this.loadFromApi(url);
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  addItem = (newItem) => {
    this.setState(({ robots }) => {
      const newArr = [newItem, ...robots];
      return {
        robots: newArr,
      };
    });
  };

  render() {
    const { robots, searchfield, isLoaded, minDataSet, error } = this.state;

    const buttonText = minDataSet ? 'Загрузить Большой ДатаСет' : 'Загрузить Малый ДатаСет';

    const filteredRobots = !searchfield
      ? robots
      : robots.filter((robot) => {
          return Object.values(robot)
            .slice(0, 4)
            .toString()
            .toLowerCase()
            .includes(searchfield.toLowerCase());
        });

    const data = filteredRobots;

    const columns = [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Имя",
        accessor: "firstName",
      },
      {
        Header: "Фамилия",
        accessor: "lastName",
      },
      {
        Header: "Эл.почта",
        accessor: "email",
      },
      {
        Header: "Телефон",
        accessor: "phone",
      },
    ];

    return (
      <div className="tc center">
        <h1 className="f1 lh-title">Frontend-Javascript-Test</h1>
        <button 
          className="w-30 bg-white ba ph3 pv2 dib br3 b--green"
          onClick={this.onUrlChange}>{buttonText}</button>

       
        {!isLoaded && 
          <Spinner />
        }

        {error && isLoaded &&
          <ErrorIndicator />
        }

        {isLoaded && !error && 
          <div className="tc center">
            <SearchBox searchChange={this.onSearchChange} />
            <Form addItem={this.addItem} />
            <Table columns={columns} data={data} />
          </div>
        }
      </div>
    );
  }
}

export default App;