import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: "http://localhost:8080",
      photos: []
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Astrud
          </p>
        </header>
        <main>
          <p>
            Photos here.
          </p>
        </main>
      </div>
    );
  }
}

export default App;
