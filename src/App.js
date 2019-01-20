import React, { Component } from 'react';
import NewComent from './NewComent'
import Coments from './Coments'
import { database, auth } from './firebase';
import Login from './Login'
import User from './User'
import CadastraUsuario from './CadastraUsuario'
import 'bootstrap-css-only'
class App extends Component {

  state = {
    isload: false,
    comments: [],
    isAuth: false,
    user: {},
    userScreen:'login'
  }

  enviar = (comment) => {
    const { email, uid } = this.state.user
    const id = database.ref().child('comments').push().key;
    const comments = {}
    comments['comments/' + id] = {
      comment,
      email: email,
      userId: uid
    }
    database.ref().update(comments)

  }
  componentDidMount() {
    this.setState({ isload: true })
    let comm = database.ref('comments')
    comm.on('value', snap => {
      this.setState({ comments: snap.val(), isload: false })
    })
    auth.onAuthStateChanged(user => {

      if (user) {
        this.setState({ isAuth: true, user })
      } else {
        this.setState({ isAuth: false, user: {} })
      }
    })
  }

  handleSubmit = async ({ ...dados }) => {

    try {
      await auth.signInWithEmailAndPassword(dados.usuario, dados.senha)
    } catch (ee) {
      alert(ee.code)
    }
  }

  createAcount = async ({ ...dados }) => {

    try {
      await auth.createUserWithEmailAndPassword(dados.usuario, dados.senha)
    } catch (ee) {
      alert(ee.code)
    }
  }
  logout = () => {
    auth.signOut()
  }

  changeScreen = (screen) => {
  
    this.setState({userScreen: screen})
    
}

  render() {
    return (
      <div className="container" >
        {this.state.isAuth && <User email={this.state.user.email} logout={this.logout} />}
        {!this.state.isAuth && 
          this.state.userScreen === 'login' &&
          <Login handleSubmit={this.handleSubmit} changeScreen={this.changeScreen} />}

         { !this.state.isAuth && this.state.userScreen === 'singUp' &&
          <CadastraUsuario createAcount={this.createAcount} changeScreen={this.changeScreen} />}

        {this.state.isAuth && <NewComent enviar={this.enviar} />}
        <Coments comments={this.state.comments} />
        {
          this.state.isload && <p>carregando...... </p>
        }
      </div>
    );
  }
}

export default App;
