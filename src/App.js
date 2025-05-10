import React from 'react';
import './App.css';
import HeaderContainer from './components/header/headerContainer';
import Nav from './components/navbar/navbar';
import ProfileContainer from './components/profile/profileContainer';
import DialogsContainer from './components/dialogs/dialogsContainer';
import Music from './components/music/music';
import News from './components/news/news';
import Setting from './components/setting/setting';
import UsersContainer from './components/users/usersContainer';
import { Route, BrowserRouter } from "react-router-dom";
import { Routes } from 'react-router-dom';


function App(props) {
  return (
    <BrowserRouter>

      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>

       
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/setting" element={<Setting />} />

          </Routes>
        </div>

      </div >

    </BrowserRouter>
  );
}


export default App;

