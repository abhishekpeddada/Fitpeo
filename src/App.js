import './App.css';
import Homepage from './components/Homepage/Homepage';
import Sidebar from './components/Sidebar/Sidebar';
function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
