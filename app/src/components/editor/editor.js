import React, { Component, Fragment } from 'react';
import axios from 'axios';

export default class Editor extends Component {
  constructor() {
    super();

    this.state = {
      pageList: [],
      newPageName: ''
    };

    this.createNewPage = this.createNewPage.bind(this);
  }

  componentDidMount() {
    this.loadPageList();
  }

  loadPageList() {
    axios
      .get('./api')
      .then(res => this.setState({ pageList: res.data }))
  }

  createNewPage() {
    axios
      .post('./api/createNewPage.php', { 'name': this.state.newPageName })
      .then(this.loadPageList())
      .catch(() => alert('Страница уже существует!'));
  }

  render() {
    const { pageList } = this.state;
    const pages = pageList.map((page, idx) => {
      return (
        <h1 key={idx}>{ page }</h1>
      )
    });

    return (
      <Fragment>
        <input
          onChange={(e) => {this.setState({ newPageName: e.target.value })}}
          type="text"
        />
        <button onClick={this.createNewPage}>Создать страницу</button>
        { pages }
      </Fragment>
    )
  }
}