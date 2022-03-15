import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './components/websites/Registration';
import  MainPage  from './components/websites/MainPage';
import Leaderboard from './components/websites/Leaderboard';
import gameDescription from './components/websites/gameDescription';
import Forum from './components/websites/Forum';
import deckRecommendation from './components/websites/deckRecommendation';
import Header from './components/websites/Header';


function App() {

  return (
    <div className="App">

<BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Header />}>
        <Route index element={<MainPage />} />
          <Route path="MainPage" element={<MainPage />} />
          <Route path="Registration" element={<Registration />} />
          <Route path="gameDescription" element={<gameDescription/>} />1
          <Route path="Leaderboard" element={<Leaderboard />} />
          <Route path="Forum" element={<Forum />} />
          <Route path="deckRecommendation" element={<deckRecommendation />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
