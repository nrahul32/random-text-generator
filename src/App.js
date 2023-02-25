import './App.css';
import axios from 'axios';
import { Component } from 'react';
import Output from './components/Output';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      paras: 5,
      format: "html",
      text: ""
    }
  }

  componentWillMount() {
    this.getSampleText();
  }

  getSampleText() {
    axios.get("https://baconipsum.com/api/?type=meat-and-filler&paras=" + this.state.paras + "&format=" + this.state.format)
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
        <h1>Random Text Generator</h1>
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
