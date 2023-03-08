import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    _data: []
  }

  componentDidMount() {
    axios.get(`https://3000-sanglc98-hotelreact-nlbvcaa0194.ws-us89b.gitpod.io/posts`)
      .then(res => {
        const _data = res.data;
        this.setState({ _data });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <ul>
        { this.state._data.map(room => <li>{room.title}</li>)}
      </ul>
    )
  }
}