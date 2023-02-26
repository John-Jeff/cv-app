
import './styles/App.css';

import CVForm from './components/CVForm';
import CVPreview from './components/CVPreview';

import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      formData: ''
    }

    this.getFormData = this.getFormData.bind(this);
  }

  getFormData(data) {
    this.setState({
      formData: data
    })
    console.log(this.formData);
  }

  render() {
    return (
      <div className="App">
        <CVForm getFormData={this.getFormData}/>
        <CVPreview />
      </div>
    );
  }
}

export default App;
