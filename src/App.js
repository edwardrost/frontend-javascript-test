import React, { Component } from 'react';
import Menu from './components/Menu';
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
      isLoaded: false,
      minDataValue: true,
      robots: [],
      searchfield: "",
      // line: '',
      error: false,
    };
    this.onUrlChange = this.onUrlChange.bind(this);
  }

  onUrlChange (event) {	  
    this.setState( state => ({ 
		minDataValue: !state.minDataValue,
    isLoaded: false 
  }))}

  loadFromApi(state){
    let url = this.state.minDataValue
      ? 'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D'
      : 'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D';

    fetch(url)
      .then((response) => response.json())
      .then((users) => this.setState({ 
        robots: users,
        isLoaded: true
       }))
      .catch(this.onError);
  };

  componentDidMount() {
    this.loadFromApi();
  }

  componentDidUpdate() {
    this.loadFromApi();
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  onError = () => {
    this.setState({
      error: true,
    });
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
    const { robots, searchfield, isLoaded, error } = this.state;

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
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
    ];

    return (
      <div className="center">
        <h1 className="tc">Frontend-Javascript Test</h1>
        <div className="flex justify-around">
          <Menu
            minDataValue={this.minDataValue}
            urlChange={this.onUrlChange}
          />
          <SearchBox searchChange={this.onSearchChange} />
        </div>
        {!isLoaded && !error &&
          <Spinner />
        }

        {isLoaded && error &&
          <ErrorIndicator />
        }

        {isLoaded && !error &&
          <Table columns={columns} data={data} />
        }
      </div>
    )

    // return !robots.length ? (
    //   <div className="tc">
    //     <h1 className="f1">Frontend-Javascript-Test</h1>
    //     <h2>Идет загрузка...</h2>
    //     <Spinner />
    //   </div>
    // ) : (
    //   <div className="tc">
    //     <Header
    //       minDataValue={this.minDataValue}
    //       urlChange={this.onUrlChange}
    //     />
    //     <Form addItem={this.addItem} />
    //     <SearchBox searchChange={this.onSearchChange} />
    //     <Table columns={columns} data={data} />
    //   </div>
    // );
  }
}

export default App;