import React, { Component } from "react";
import "./App.css";
import * as data from "./data"
import _ from 'lodash'
class App extends Component {

  constructor(props) {
    super(props)
    this.state = { ...data };
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>
            {this.state.title}
          </h1>
          <p>
            {this.state.tagline}
          </p>
        </header>
        <nav>
          <ul>
            {this.state.tags.filter(tag => tag.enabled).map((tag, i) => <li key={i}> {tag.name} </li>)}
          </ul>
        </nav>
        {this.state.articles.filter(article => article.enabled)
          .filter(article => {
            return _.intersection(article.tags, this.state.tags.filter(tag => tag.enabled).map(value => value.id)).length > 0
          })
          .map((article, i) =>
            <div key={i}>
              <h2>{article.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: _.truncate(article.content, { 'length': 200 }) }} />
            </div>)}
      </div>
    );
  }
}

export default App;