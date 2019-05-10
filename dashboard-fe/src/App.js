import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    links: [],
    post: "",
    responseToPost: ""
  };

  componentDidMount() {
    this.callApi()
      .then(res => {
        console.log(res);
        this.setState({ links: res });
      })
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/api/links");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.links.length !== 0 && (
            <div>
              {this.state.links.map(l => (
                <div>
                  <a href={l.url}>{l.title}</a>
                </div>
              ))}
            </div>
          )}
        </header>
      </div>
    );
  }
}

export default App;
