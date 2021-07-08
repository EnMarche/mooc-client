import React, { Component } from 'react';
import Header from './components/Header';
import Title from './components/Title';
import Grid from './components/Grid';
import Footer from './components/Footer';
import { callApi } from './Utils/request';

class App extends Component {
  state = {
    moocs: []
  };
  componentWillMount() {
    callApi('/mooc').then((moocs) => this.setState({ moocs }));
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="content l__wrapper">
          <Title />
          <Grid moocs={this.state.moocs} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
