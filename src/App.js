import React from 'react';
import { baseURL } from './services/api';

import './App.scss';

import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      contactsFiltered: [],
      filter: '',
      orderBy: '',
		  order: 'asc',
      isLoading: true,
      isFiltered: false,
      isOrdered: false,
    }

    this.handleFilter = this.handleFilter.bind(this);
    this.handleOrder = this.handleOrder.bind(this);
  }

  fecthContacts = () => {
    const { filter, orderBy, order, isFiltered, isOrdered } = this.state;
    const url = `${baseURL}contacts?filter=${filter}&orderBy=${orderBy}&order=${order}`;

    fetch( url )
    .then( async response => {
      if(response.ok){
        const data = await response.json();
        (!isFiltered && !isOrdered) ? this.setState({ isLoading: false, contacts: data }) : this.setState({ isLoading: false, contactsFiltered: data })
      } else {
        console.error("Network response was not ok");
      }
    })
    .catch( error => {
      console.error(error);
    })
  }

  handleFilter(filter) {
    if (filter) {
      this.setState( { filter, isFiltered: true }, this.fecthContacts );
    }
  }

  handleOrder(orderBy, order) {
    this.setState( { orderBy, order, isOrdered: true }, this.fecthContacts );
  }

  componentDidMount() {
    this.fecthContacts();
  }

  render() {
    const { contacts, contactsFiltered, isLoading, isFiltered, isOrdered } = this.state; 
    return (
      <React.Fragment>
        <Topbar />
        <Filters onFilter={ this.handleFilter } onOrder={ this.handleOrder } />
        <Contacts contactList={ (!isFiltered && !isOrdered) ? contacts : contactsFiltered }  isLoading= { isLoading }/>
      </React.Fragment>
    )
  }
}

export default App;
