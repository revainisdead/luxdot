import logo from './logo.svg';
import './app.css';

import NavBar from './navbar';


function App() {
    return (
        <div className="App">
            <Navbar />

            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>

                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
            </div>
        </div>
    );
}

export default App;
