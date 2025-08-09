import React, { Component } from 'react';
import './App.css';
import HeaderContainer from './components/header/headerContainer';
import Nav from './components/navbar/navbar';
import ProfileContainer, { withRouter } from './components/profile/profileContainer';
import DialogsContainer from './components/dialogs/dialogsContainer';
import Music from './components/music/music';
import News from './components/news/news';
import Setting from './components/setting/setting';
import UsersContainer from './components/users/usersContainer';
import { Route, BrowserRouter } from "react-router-dom";
import { Routes } from 'react-router-dom';
import Login from './components/Login/login';
import { getAuthUserDataThunkCreator } from './data/auth-reduser copy';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './data/app-reducer';
import loader from './assets/images/b4d657e7ef262b88eb5f7ac021edda87_w200.gif'

class App extends React.Component{

  componentDidMount(){
    this.props.initializeApp()
  }

render(){
  if(!this.props.initialized){
    return  <img  src={loader}/>
  } 
  return (
    <BrowserRouter>

      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>

       
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/dialogs/*" element={<DialogsContainer />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/setting" element={<Setting />} /> 
            <Route path="/login" element={<Login />} />

          </Routes>
        </div>

      </div >

    </BrowserRouter>
  );
}
}

const mapStateToProps=(state)=>({
  initialized:state.app.initialized 
})
export default compose(
                withRouter, 
                connect(mapStateToProps,{initializeApp}))(App);
