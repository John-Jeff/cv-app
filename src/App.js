
import './App.css';

import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';

import { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="App">
        <CVForm />
        <CVPreview />
      </div>
    );
  }
}

export default App;
