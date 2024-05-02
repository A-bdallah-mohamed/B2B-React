
  import './App.css';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Homepage from './assets/pages/Homepage';
  function App() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' component={Homepage}/>
        </Routes>
      </Router>
    );
  }

  export default App;
