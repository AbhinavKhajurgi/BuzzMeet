import logo from './logo.svg';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Landing from './pages/Landing';
import './App.css';
import Authentication from './pages/Authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeet from './pages/VideoMeet';
import Home from './pages/home';
import History from './pages/history';


function App() {
  return (
    <div className='App'>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/auth' element={<Authentication />} />
            <Route path='/home' element={<Home />} />
            <Route path='/:url' element={<VideoMeet/>}/>
            <Route path='/history' element={<History/>}/>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
