import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
 state = {
  data : null
};

componentDidMount() {
  this.callBackendAPI()
    .then(res => this.setState({data: res.express}))
    .catch(err => console.log(err))
}

callBackendAPI = async () => {
  const response = await fetch('/express_backend');
  const body = await response.json();

  if(response.status !== 200){
    throw Error(body.message)
  }
  return body;
};
render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p>
          {this.state.data}
        </p>
    </div>
  );
}
}

export default App;
