import React, { Component } from 'react';
import Schema from './components/rschema'

class App extends Component {
  render() {
    return (
      <Schema
        type="Organization"
        data={{
          '@id': 'https://www.acme.com/#website',
          name: 'Acme, Inc.',
          url: 'https://www.acme.com'
        }}
      />
    );
  }
}

export default App;
