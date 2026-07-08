import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://w9sjbonjxf.execute-api.us-west-2.amazonaws.com/prod/brian-capstone`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>TEST: {person.id} - {person.name}</li>
            )
        }
      </ul>
    )
  }
}