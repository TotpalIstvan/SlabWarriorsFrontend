import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './components/websites/Registration';
import  MainPage  from './components/websites/MainPage';
import Leaderboard from './components/websites/Leaderboard';
import Forum from './components/websites/Forum';
import DeckRecommendation from './components/websites/DeckRecommendation';
import GameDescription from './components/websites/GameDescription';
import Header from './components/websites/Header';
import Featured from './components/websites/Featured';
import Updates from './components/websites/Updates';
import Login from './components/websites/Login';
import Footer from './components/websites/Footer';


function App() {

  return (
    <div className="App">

<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Header />}>
        <Route index element={<MainPage />} />
          <Route path="MainPage" element={<MainPage />} /> 
          <Route path="Featured" element={<Featured/>} />
          <Route path="Updates" element={<Updates />} />  
          <Route path="Registration" element={<Registration />} />
          <Route path="Login" element={<Login />} />
          <Route path="GameDescription" element={<GameDescription />} />1
          <Route path="Leaderboard" element={<Leaderboard />} />
          <Route path="Forum" element={<Forum />} />
          <Route path="DeckRecommendation" element={<DeckRecommendation />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    </div>
  );
}

export default App;
