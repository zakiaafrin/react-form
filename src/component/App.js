import React, { Component } from 'react';
import FormApp from './FormApp';

class App extends Component {

  render() {
    return (
      <div className="container py-5" >
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <FormApp />
          </div >
        </div>
      </div>
    );
  }
}

export default App;