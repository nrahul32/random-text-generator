import './App.css';
import axios from 'axios';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }
  }

  componentWillMount() {
    this.getSampleText();
  }

  getSampleText() {
    axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras=5&format=text')
      .then(resp => {
        this.setState({ text: resp.data }, function () {
          console.log(this.state);
        })
      }).catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        Random Text Generator
      </div>
    );
  }
}

export default App;
